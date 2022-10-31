/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative bg-black-800 max-h-max'>
      <div className='absolute inset-0 '>
        <img
          className='w-full h-full object-cover z-50 mt-50'
          src='/mainpage.png'
          alt=''
          layout='fill'
        />

        <div
          className='absolute inset-0 bg-gray-500 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Share your memories
        </h1>
        <h3 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          ... for generations.
        </h3>
        <p className='mt-6 text-xl text-indigo-100 max-w-3xl'>
          This website enables family members to safely share, via the internet
          and cloud storage, digitalized memories (photos, texts, small videos)
          with other family members for generations to come, in a easy to use
          interface.
        </p>
      </div>
    </div>
  );
}
