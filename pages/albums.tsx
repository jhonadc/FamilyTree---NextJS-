import Prisma from '../lib/prisma';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

{
  /* export const getStaticProps: GetStaticProps = async () => {
  const albums = await prisma.album.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { albums },
    revalidate: 5,
  };
};

export default function Albums() {
  return <div></div>;
}
*/
}
