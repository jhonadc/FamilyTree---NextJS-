/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='h-screen relative bg-black'>
        <div className='h-2/6 mx-auto my-5 py-20  px-6 lg:px-40 text-justify content-center'>
          <h1 className='antialiased font-extrabold tracking-tight text-white text-4xl lg:text-6xl'>
            Share your memories
          </h1>
          <h3 className='mt-4 antialiased text-blue-500 lg:text-6xl text-xl font-extrabold tracking-tight text-5xl lg:text-6xl text-center'>
            ... for GENERATIONS
          </h3>

          <p className=' mt-10 antialiased leading-8 text-xl md:text-2xl lg: text-4xl text-indigo-100  text-justify m-5'>
            <span className='underline decoration-blue-500 '>Family Tree </span>
            allows family members to safely share, via the internet and cloud
            storage, digitalized memories (photos, texts, small videos) with
            other family members for generations to come, in a easy to use
            interface.
          </p>
          {/*<button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>
            Start
  </button> */}
        </div>

        <div className='h-3/6 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4'>
          <img className='' src='/main_photo1.png' alt='' />

          <img className='max-xl:invisible' src='/main_photo2.png' alt='' />

          <img className='max-xl:hidden' src='/main_photo3.png' alt='' />

          <img className='' src='/main_photo4.png' alt='' />
        </div>
      </div>
    </>
  );
}
