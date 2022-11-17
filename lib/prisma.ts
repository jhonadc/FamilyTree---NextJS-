import { PrismaClient } from '@prisma/client'
//declare global variable to be used throw the app
//otherwise, connection on heroku postgress gets over limit
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
