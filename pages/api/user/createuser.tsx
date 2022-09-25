import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const user = await prisma.user.create({
    data: {
      name: "Jhonathan Campos",
      email: "getarush@gmail.com"
    }
  })
  res.status(200).json(user)
}