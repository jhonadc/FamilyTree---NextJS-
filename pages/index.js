/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/*} <div className='absolute inset-0'>


        <div
          className='absolute inset-0 bg-gray-500 mix-blend-multiply'
          aria-hidden='true'
        />
  </div> */}
      <div className='relative bg-black'>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Share your memories
          </h1>
          <h3 className='text-blue-500 text-6xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center'>
            ... for generations
          </h3>

          <p className='mt-10 text-2xl text-indigo-100  text-center'>
            Family Tree allows family members to safely share, via the internet
            and cloud storage, digitalized memories (photos, texts, small
            videos) with other family members for generations to come, in a easy
            to use interface.
          </p>
          <button className='btn btn-blue z-50'>Start</button>
        </div>
      </div>
      <img className='   "' src='/mainpage.png' alt='' layout='fill' />
    </>
  );
}
