import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"

type Data = {
  name?: string,
  message?: string,
  error?
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {name, email} = req.body;

  try {
    const user = await prisma.user.create({
    data: {
      name,
      email
    },
  });

  res.status(200).json({message: "data submitted"});
} catch (error) {
  res.status(400).json({error});
  }
}
 