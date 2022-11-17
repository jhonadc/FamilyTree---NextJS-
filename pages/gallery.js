import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '../lib/prisma';
import { search, mapImageResources } from '../lib/cloudinary';



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
    //avoid whole page from refreshing while fetching
    e.preventDefault();

    //fetch data from cloudinary
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        expression: `folder=""`,
        nextCursor,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    //new state for images. old plus new set for pagination
    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);

    console.log('images', images);
  }

  if (session) {
    return (
      <>
        <div className='mt-8 mx-auto  gap-6 sm:px-6 xl:max-w-7xl '>
          <div className='bg-white shadow sm:rounded-lg'>
            {/* upper tag */}
            <div className='px-4 py-5 sm:px-6 bg-gradient-to-l from-blue-400 to-blue-600'>
              <h2
                id='user-profile'
                className='text-xl leading-6 font-medium text-white'>
                Memories Gallery
              </h2>
              <p className='mt-1  text-sm md:text-lg  text-white'>
                Your memories will carry on.
              </p>{' '}
              {/* Link to upload files */}
              <Link href='/upload'>
                <button className='mt-10 border text-white p-2'>
                  Upload Memories
                </button>
              </Link>
            </div>
          </div>

          {/* map images for exibition */}
          <main className='mt-10 2xl:mx-10 mx-5 grid justify-items-center 2xl:grid-cols-2'>
            <ul className='mt-10 2xl:mx-10 mx-5 grid justify-items-center 2xl:grid-cols-2'>
              {images.map((image) => {
                return (
                  <li key={image.id}>
                    <a href={image.link} rel='noreferrer'>
                      <div className='2xl:mx-10'>
                        <Image
                          width={1200}
                          height={900}
                          src={image.image}
                          alt=''
                        />
                      </div>

                      <div className='my-5 w-full border-t border-gray-300' />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* pagination */}
            <div className='justify-self-center'>
              <button
                type='button'
                className='mb-50 rounded-md bg-blue-600 px-10 py-10 text-2xl font-medium leading-4 text-white shadow-sm hover:bg-blue-700  '
                onClick={handleLoadMore}>
                {' '}
                Load More Results
              </button>
            </div>
          </main>
        </div>
      </>
    );
  } else {
    return (
      <div className=' py-20 bg-gradient-to-b from-blue-500 to-cyan-600'>
        <h1 className='ml-10 mb-10  text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          You are not signed in.
        </h1>
        <Link href='api/auth/signin'>
          <a className='ml-10  cursor-pointer py-20 text-xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl'>
            Click here to enter
          </a>
        </Link>
      </div>
    );
  }
}

//check loggen in user for authorization
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
