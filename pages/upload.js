/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


export default function Upload() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const { data: session } = useSession();

  //runs when file input changes (ex: file is selected)
  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  //when the main form is submitted
  async function handleOnSubmit(event) {
    //avoid page from reloading
    event.preventDefault();
    const form = event.currentTarget;

    //make a list of the files selected
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }
    //get data from form and send to the preset defined 
    //inside Family tree folder in Cloudinary
    formData.append('upload_preset', 'FamilyTree');

    //send the file to Cloudinary
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dzesz1bgf/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    setUploadData(data);
  }

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
                    <p className='mt-5 text-sm md:text-lg text-white'>
                      Select a file to be sent to your memories vault.
                    </p>
                  </div>
                </div>
                <div>
                  <main className='mt-5 ml-20'>
                    <form
                      className=''
                      method='post'
                      onChange={handleOnChange}
                      onSubmit={handleOnSubmit}>
                      <p className='my-10'>
                        <input type='file' name='file' />
                      </p>
                      {/* size of the img exibited before upload */}
                      <img
                        src={imageSrc}
                        width={400}
                        height={300}
                        alt='photo to upload'
                      />
                      {imageSrc && !uploadData && (
                        <p>
                          <button className='mt-10 px-20 border rouded bg-blue-700 border-sky-700 text-white p-2'>
                            Upload File
                          </button>
                        </p>
                      )}
                      {/* message after uploading */}
                      {uploadData && (
                        <code>
                          <pre>
                            UPLOAD COMPLETED - GO TO YOUR MEMORIES TO SEE IT
                          </pre>
                        </code>
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
        <h1 className='ml-10 mb-10  sm:text-lg lg:text-4xl font-extrabold tracking-tight text-white'>
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
