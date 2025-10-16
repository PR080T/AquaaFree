import { insertContact } from '../../lib/db'
import { getRateLimiter } from '../../lib/rate-limiter'

let prisma = null
async function getPrisma(){
  if(prisma) return prisma
  try{
    const mod = await import('../../lib/prisma')
    prisma = mod.default
    return prisma
  } catch(e){
    return null
  }
}
import { RateLimiterMemory } from 'rate-limiter-flexible'

const rateLimiter = new RateLimiterMemory({ points: 5, duration: 60 }) // 5 requests per minute per IP

function validate(body){
  if(!body) return 'Missing body'
  const { name, email, message } = body
  if(!name || typeof name !== 'string' || name.trim().length < 2) return 'Invalid name'
  if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Invalid email'
  if(!message || typeof message !== 'string' || message.trim().length < 5) return 'Message too short'
  return null
}

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})

  try{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    const rateLimiter = await getRateLimiter()
    await rateLimiter.consume(ip)
  } catch(_) {
    return res.status(429).json({error:'Too many requests'})
  }

  const err = validate(req.body)
  if(err) return res.status(400).json({error:err})

  try{
    const { name, email, message } = req.body
    const prismaClient = await getPrisma()
    let row
    if(prismaClient && process.env.DATABASE_URL){
      row = await prismaClient.contact.create({ data: { name, email, message } })
    } else {
      // Fallback to file-based or pg helper
      row = await insertContact({ name, email, message })
    }

    // Send emails via SendGrid if configured
    try{
      const { sendContactEmails } = await import('../../lib/send-mail')
      await sendContactEmails({ name, email, message })
    } catch(e){
      console.warn('Email sending skipped:', e.message)
    }  return res.status(200).json({ok:true, id: row.id})
  } catch(e){
    console.error(e)
    return res.status(500).json({error:'Server error'})
  }
}
