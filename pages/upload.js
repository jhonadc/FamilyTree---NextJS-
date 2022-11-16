/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';

/**
 * handleOnChange
 * @description Triggers when the file input changes (ex: when a file is selected)
 */

function handleOnChange(changeEvent) {
  const reader = new FileReader();

  reader.onload = function (onLoadEvent) {
    setImageSrc(onLoadEvent.target.result);
    setUploadData(undefined);
  };

  reader.readAsDataURL(changeEvent.target.files[0]);
}

/**
 * handleOnSubmit
 * @description Triggers when the main form is submitted
 */

async function handleOnSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const fileInput = Array.from(form.elements).find(
    ({ name }) => name === 'file'
  );

  const formData = new FormData();

  for (const file of fileInput.files) {
    formData.append('file', file);
  }

  formData.append('upload_preset', 'FamilyTree');

  const data = await fetch(
    'https://api.cloudinary.com/v1_1/dzesz1bgf/image/upload',
    {
      method: 'POST',
      body: formData,
    }
  ).then((r) => r.json());

  setUploadData(data);
}

export default function Upload() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <div className='mt-8  mx-auto grid grid-cols-1 gap-6 sm:px-6 xl:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2'>
            <div className='space-y-6 lg:col-start-1 lg:col-span-2'>
              <section aria-labelledby='user-profile'>
                <div className='bg-white shadow sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6 bg-gradient-to-l from-blue-400 to-blue-600'>
                    <h2
                      id='user-profile'
                      className='text-xl leading-6 font-medium text-white'>
                      Upload Memories
                    </h2>
                    <p className='mt-1  text-sm md:text-lg  text-white'>
                      Select a file to be sent to your memories vault.
                    </p>
                  </div>
                </div>
                <div>
                  <main className='grid'>
                    <form
                      className='mt-10  justify-items-center'
                      method='post'
                      onChange={handleOnChange}
                      onSubmit={handleOnSubmit}>
                      <p>
                        <input
                          className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                          type='file'
                          name='file'
                        />
                      </p>
                      <img
                        src={imageSrc}
                        width={300}
                        height={200}
                        alt='memory to upload'
                      />
                      {imageSrc && !uploadData && (
                        <p>
                          <button
                            type='button'
                            className='ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                            Upload File
                          </button>
                        </p>
                      )}
                      {uploadData && (
                        <div className='mt-20 px-4 py-5 sm:px-6 bg-gradient-to-l from-blue-400 to-blue-600'>
                          <h2 className='lg:text-xl text-sm'>
                            Done! The photo is available on your Memory page.{' '}
                          </h2>
                        </div>
                      )}
                    </form>
                  </main>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className=' py-20 bg-gradient-to-b from-blue-500 to-cyan-600'>
        <h1 className='ml-10 mb-10  sm:text-lg lg:text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          You are not signed in.
        </h1>
        <Link href='api/auth/signin'>
          <a className='ml-10  cursor-pointer py-20 text-sm md:text-lg  font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl'>
            Click here to enter
          </a>
        </Link>
      </div>
    );
  }
}
