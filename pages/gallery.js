import { PrismaClient, Prisma } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { User } from '@prisma/client';
//call getserversidesession
const prisma = new PrismaClient();

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { user: [] } };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  return {
    props: { user },
  };

  const image = await prisma.image.findMany({
    where: {
      email: session.user.email,
    },
  });
  return {
    props: { image },
  };
};

export default function Gallery(user, image) {
  const { data: session } = useSession();
  image = Array.from(image);
  if (session) {
    return (
      <>
        <div className='page'>
          <h1>Memories Gallery</h1>
          <main>
            {image.map((image) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://res.cloudinary.com/${process.env.CLOUD_NAME}/v${image.version}/${image.publicId}.${image.format}`}
                key={image.publicId}
                alt='image'
              />
            ))}
          </main>
        </div>
        <style jsx>{`
          .image {
            background: white;
            transition: box-shadow 0.1s ease-in;
          }
          .image:hover {
            box-shadow: 1px 1px 3px #aaa;
          }
          .image + .image {
            margin-top: 2rem;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <h1 className='text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
          You are not signed in.
        </h1>
      </>
    );
  }
}
