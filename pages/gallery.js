import { useState, useEffect } from 'react';
import prisma from '../lib/prisma';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { User } from '@prisma/client';
import Button from '../components/utilities/button';
//call getserversidesession
import Image from 'next/image';
import { search, mapImageResources } from '../lib/cloudinary';
import { set } from 'react-hook-form';

export default function Gallery({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {
  const { data: session } = useSession();
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  console.log('images', images);
  console.log('nextCursor', nextCursor);

  async function handleLoadMore(e) {
    e.preventDefault(); //avoid whole page from refreshing

    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        expression: `folder=""`,
        nextCursor,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    //new state for images. old plus new set
    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);

    console.log('images', images);
  }

  if (session) {
    return (
      <>
        <div className='page'>

          <div className='px-4 py-5 sm:px-6 bg-blue-600'>
            <h1 className='text-xl leading-6 font-medium text-white'>
              Memories Gallery
            </h1>
          </div>

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
              <button onClick={handleLoadMore}>Load More Results</button>
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
  //check loggen in user - authorization
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

  //fetch photos from cloudinary

  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
      user,
      nextCursor,
    },
  };
};
