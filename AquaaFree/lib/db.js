import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function insertContact({name,email,message}){
  const client = await pool.connect()
  try{
    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      )
    `)
    const res = await client.query(
      'INSERT INTO contacts (name,email,message) VALUES ($1,$2,$3) RETURNING id, created_at',
      [name,email,message]
    )
    return res.rows[0]
  } finally {
    client.release()
  }
}
