import { PrismaClient, Prisma } from '@prisma/client';
import { User } from '@prisma/client';
//call getserversidesession
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const images = await prisma.image.findMany({
    where: {
      email: session.data.user.email,
    },
  });
  res.status(200).json(images);
}
