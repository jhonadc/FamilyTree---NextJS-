import React from 'react';
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/react';
import { Table } from '../components/utilities/table';
import { CameraIcon } from '@radix-ui/react-icons';
import { Modal } from '../components/utilities/modal';

import prisma from '../lib/prisma';

const family = [
  { name: 'Agda Lima Lira', email: 'fakeagda@gmail.com', href: '#' },

  {
    name: 'Iracema Lira Lima',
    email: 'fakeiracema@gmail.com',
    href: '#',
  },
];

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
  return {
    props: { user },
  };
};

export default function Dashboard({ user }) {
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
                      Profile
                    </h2>
                    <p className='mt-1  text-sm md:text-lg  text-white'>
                      Personal details
                    </p>
                  </div>
                  <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm md:text-lg  text-blue-800'>
                          Name
                        </dt>
                        <dd className='mt-3 text-sm md:text-lg  text-gray-900'>
                          {user.name}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='mt-1 text-sm md:text-lg  text-blue-900'>
                          Email address
                        </dt>
                        <dd className='mt-3 text-sm md:text-lg  text-gray-900'>
                          {user.email}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='mt-1 text-sm md:text-lg  text-blue-900'>
                          Plan
                        </dt>
                        <dd className='mt-3 text-sm md:text-lg  text-gray-900'>
                          <div>
                            <select
                              id='location'
                              name='location'
                              className='mt-0 block rounded-md border-blue-300 py-2 pl-3 pr-10 text-base focus:border-blue-700 focus:outline-none focus:ring-blue-500 text-sm lg:text-lg'
                              defaultValue='Family Plan'>
                              <option>Free</option>
                              <option>One Member</option>
                              <option>Family Plan</option>
                            </select>
                          </div>
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='mt-1 text-sm md:text-sm md:text-lg  text-blue-900'>
                          Phone
                        </dt>
                        <dd className='mt-3 text-sm md:text-sm md:text-lg   text-gray-900'>
                          +55 11 98748 FAKE
                        </dd>
                      </div>
                      <div className='sm:col-span-2 lg:col-span-2'>
                        <dt className='mt-1 text-sm md:text-lg  text-blue-900 text-justify'>
                          About
                        </dt>
                        <dd className='mt-5 text-sm lg:text-xl md:text-lg  text-gray-900 text-justify'>
                          Hi! I am Jhonathan Campos and I share my text memories
                          and photos from my life with my closest family
                          members. I am happy to know that, in the future or
                          when I pass away, my dearest memories will be
                          available for my grandson to know more about me and,
                          hopefully, help him find commom facts and
                          identification with me.
                        </dd>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='inline-flex items-center rounded border border-blue-300 bg-blue px-2.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                          onClick={() => {
                            Modal;
                          }}>
                          Edit Profile
                        </button>
                      </div>
                    </dl>
                  </div>
                  <div className='mt-4 sm:col-span-2 lg:col-span-2'>
                    <div className='px-4 py-5 sm:px-6 bg-blue-600'>
                      <h2
                        id='user-profile'
                        className='text-lg  lg:text-2xl leading-6 font-medium text-white'>
                        Family Members
                      </h2>
                      <p className='mt-3 max-w-2xl text-sm md:text-lg text-white'>
                        Edit memories access to family members on your network
                      </p>
                    </div>
                    <dd className='mt-1 text-sm md:text-lg  text-blue-900'>
                      <Table
                        columns={[
                          { id: 'name', label: 'Name' },
                          { id: 'email', label: 'Email' },
                          { id: 'edit', label: 'Edit' },
                        ]}
                        rows={family.map((family) => ({
                          name: (
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className='mt-5 lg:text-lg text-sm text-gray-900'>
                                  {family.name}
                                </div>
                              </div>
                            </div>
                          ),
                          email: (
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className='text-sm lg:text-lg text-gray-900'>
                                  {family.email}
                                </div>
                              </div>
                            </div>
                          ),
                          albuns: (
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className=''>{CameraIcon}</div>
                              </div>
                            </div>
                          ),
                        }))}
                      />
                    </dd>
                  </div>
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
