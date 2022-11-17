import { useSession } from 'next-auth/react';

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
                    {/* } <img
                      src={albums.imageSrc}
                      alt={albums.imageAlt}
                      className='w-full h-full object-center object-cover group-hover:opacity-75'
              /> */}
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
