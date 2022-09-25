import type { NextApiRequest, NextApiResponse } from  from "next"
import {PrismaClient} from "@prisma/PrismaClient"

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const post = await prisma.post.create({
    data: {
      name: "Jhonathan Campos",
      email: "jhonathanaugusto@gmail.com"
    }
  })
  res.status(200).json({name: "Jhonathan Campos"})
}