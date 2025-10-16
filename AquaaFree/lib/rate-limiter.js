import { RateLimiterMemory, RateLimiterRedis } from 'rate-limiter-flexible'

let limiter = null
const points = 5 // requests
const duration = 60 // seconds

export async function getRateLimiter() {
  if (limiter) return limiter

  // Try to use Redis if REDIS_URL is set
  if (process.env.REDIS_URL) {
    try {
      const Redis = (await import('ioredis')).default
      const redis = new Redis(process.env.REDIS_URL)
      limiter = new RateLimiterRedis({
        storeClient: redis,
        points,
        duration,
        blockDuration: 60, // block for 1 minute
      })
      console.log('Using Redis-backed rate limiter')
      return limiter
    } catch (e) {
      console.warn('Redis connection failed, falling back to memory limiter:', e.message)
    }
  }

  // Fallback to memory limiter
  limiter = new RateLimiterMemory({ 
    points, 
    duration,
    blockDuration: 60,
  })
  console.log('Using memory-backed rate limiter')
  return limiter
}