import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.update({
    where: {
      //id: ""
    },
    data: {
      name:"Joao",
      email:"jao@gmail.com",
    }
})
  res.status(200).json(user)
}
