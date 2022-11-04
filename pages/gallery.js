import { PrismaClient, Prisma } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { User } from '@prisma/client';
import Button from '../components/utilities/button';
//call getserversidesession
import Image from 'next/image';
const prisma = new PrismaClient();

export default function Gallery({ images, nextCursor }) {
  const { data: session } = useSession();

  if (session) {
    async function handleOnLoadMore(e) {
      e.preventDefault();

      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          expression: `folder=""`,
          nextCursor,
        }),
      }).then((r) => r.json());

      const { resources } = results;

      const images = mapImageResources(resources);

      console.log('images', images);
    }
    return (
      <>
        <div className='page'>
          <h1>Memories Gallery</h1>
          <main>
            <ul className=''>
              {images.map((image) => {
                return (
                  <li key={image.id}>
                    <a href={image.link} rel='noreferrer'>
                      <div className=''>
                        <Image
                          width={image.width}
                          height={image.height}
                          src={image.image}
                          alt=''
                        />
                      </div>
                      <h3 className=''>{image.title}</h3>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p>
              <Button variant='primary' onClick={handleOnLoadMore}>
                Load More Results
              </Button>
            </p>
          </main>
        </div>
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

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json());

  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
  return {
    props: {
      images,
      user,
      nextCursor,
    },
  };
};
