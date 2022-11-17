/* eslint-disable @next/next/no-img-element */
//archived for now

import React from 'react';

export function Modal(user) {
  return (
    <div
      id='edit_profile_modal'
      aria-hidden='true'
      className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full'>
      <div className='relative w-full max-w-md h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent 
            hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center 
            dark:hover:bg-gray-800 dark:hover:text-white'
            data-modal-toggle='authentication-modal'>
            <img src='../public/logo.png' alt='logo' />
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='py-6 px-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
              Edit your data
            </h3>
            <form className='space-y-6' action='#'>
              <div>
                <label
                  htmlFor='Name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your Name
                </label>
                <input
                  type='name'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                        dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Name'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your Phone
                </label>
                <input
                  type='phone'
                  name='phone'
                  id='phone'
                  placeholder='Your Phone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                        dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  return {
    props: { user },
  };
};
