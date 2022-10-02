import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Prisma } from "@prisma/client"
import { User } from "@prisma/client"
import { useSession } from "next-auth/react"
const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = useSession()
  const users = await prisma.user.findMany({
    where: {
      email: session.data.user.email
    }
  })
  res.status(200).json(users)
}

