/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className='hrelative bg-black'>
        {/* Upper text with black background*/}
        <div className='mx-auto my-5 py-20  px-6 lg:px-40 text-justify content-center'>
          <h1 className='antialiased font-extrabold tracking-tight text-white text-3xl  lg:text-6xl'>
            Share your memories
          </h1>
          <h3 className='mt-4 antialiased text-blue-500 text-4xl lg:text-4xl font-extrabold tracking-tight text-center'>
            ... for GENERATIONS
          </h3>

          <p className=' mt-10 antialiased leading-8 text-lg md:text-2xl text-indigo-100  text-justify m-5'>
            <span className='underline decoration-blue-500 '>Family Tree </span>
            allows family members to safely share, via the internet and cloud
            storage, digitalized memories (photos, texts, small videos) with
            other family members for generations to come, in a easy to use
            interface.
          </p>
        </div>
        {/* Main index image*/}
        <div className='max-lg:hidden'>
          <img className='' src='/mainpage.png' alt='' />{' '}
        </div>
        <div className='xl:hidden'>
          <img className='' src='/mainphoto1.png' alt='' />{' '}
        </div>
      </div>
    </>
  );
}
