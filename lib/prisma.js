import { PrismaClient } from '@prisma/client'

// Ensure we only instantiate the Prisma client once across hot-reloads in dev
const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export { prisma }
export default prisma
