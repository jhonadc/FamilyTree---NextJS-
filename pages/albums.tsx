//import Prisma from '../lib/prisma';
//import { PrismaClient } from '@prisma/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Loginoutbtn from '../components/navbar/loginoutbutton';
//const prisma = new PrismaClient();

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

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const albums = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function Albums() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='sr-only'>Albums</h2>

            <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              {albums.map((albums) => (
                <a key={albums.id} href={albums.href} className='group'>
                  <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                    <img
                      src={albums.imageSrc}
                      alt={albums.imageAlt}
                      className='w-full h-full object-center object-cover group-hover:opacity-75'
                    />
                  </div>
                  <h3 className='mt-4 text-sm text-gray-700'>{albums.name}</h3>
                  <p className='mt-1 text-lg font-medium text-gray-900'>
                    {albums.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
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
