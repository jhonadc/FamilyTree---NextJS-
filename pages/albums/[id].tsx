import prisma from '../../lib/prisma';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

// pages/p/[id].tsx
{
  /*export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const album = await prisma.album.findUnique({
    where: {
      id: String(params?.id),
    },
  });
  return {
    props: { album },
  };
};

export default ({ albums }) => (
  <>
    <ul>
      (
      {albums.map((album) => (
        <li key={album.id}>{album.user.name}</li>
      ))}
    </ul>
  </>
);
      */
}
