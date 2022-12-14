import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.delete({
    where: {
      //id
    },
})
  res.status(200).json(user)
}
