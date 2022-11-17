import React from 'react';
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/react';
import { Table } from '../components/utilities/table';
import { CameraIcon } from '@radix-ui/react-icons';

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

  const updateUserName = await prisma.user.update({
    where: {
      email: user.email,
    },
    update: { name: user.name },
  });

  const upsertUserPhone = await prisma.phone.upsert({
    where: {
      email: user.email,
    },
    update: {},
    create: {
      phone: user.phone,
    },
  });

  const upsertUserAbout = await prisma.about.upsert({
    where: {
      email: user.email,
    },
    update: {},
    create: {
      about: user.about,
    },
  });
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
                      <div>
                        <label
                          htmlFor='about'
                          className='block text-sm md:text-lg font-medium text-gray-700'>
                          Name
                        </label>
                        <form
                          method='post'
                          className='mt-5 sm:flex sm:items-center'>
                          <div className='mt-1'>
                            <input
                              type='name'
                              phone='name'
                              id='name'
                              className='border block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm md:text-lg'
                              placeholder={user.name}
                            />
                          </div>

                          <div>
                            <button
                              type='button'
                              className='md:ml-2  inline-flex items-center rounded border border-blue-300 bg-blue px-2.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                              onClick={() => {
                                upsertUserName;
                              }}>
                              Add/Edit
                            </button>
                          </div>
                        </form>
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
                              className='mt-0 block rounded-md border-blue-300 py-2 pl-3 pr-10 focus:border-blue-700 focus:outline-none focus:ring-blue-500 text-sm lg:text-lg'
                              defaultValue='Family Plan'>
                              <option>Free</option>
                              <option>One Member</option>
                              <option>Family Plan</option>
                            </select>
                          </div>
                        </dd>
                      </div>

                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm md:text-lg font-medium text-gray-700'>
                          Phone
                        </label>
                        <form
                          method='post'
                          className='mt-5 sm:flex sm:items-center'>
                          <div className='mt-1'>
                            <input
                              type='phone'
                              phone='phone'
                              id='phone'
                              className='border block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm md:text-lg'
                              placeholder={user.phone}
                            />
                          </div>

                          <div>
                            <button
                              type='button'
                              className='md:ml-2  inline-flex items-center rounded border border-blue-300 bg-blue px-2.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                              onClick={() => {
                                upsertUserPhone;
                              }}>
                              Add/Edit
                            </button>
                          </div>
                        </form>
                      </div>

                      <div>
                        <label
                          htmlFor='about'
                          className='block text-sm md:text-lg font-medium text-gray-700'>
                          About
                        </label>
                        <form
                          method='post'
                          className='mt-5 sm:flex sm:items-center'>
                          <div className='mt-1'>
                            <input
                              type='about'
                              phone='about'
                              id='about'
                              className='border block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm md:text-lg'
                              placeholder={user.about}
                            />
                          </div>

                          <div>
                            <button
                              type='button'
                              className='md:ml-2  inline-flex items-center rounded border border-blue-300 bg-blue px-2.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                              onClick={() => {
                                upsertUserAbout;
                              }}>
                              Add/Edit
                            </button>
                          </div>
                        </form>
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
                          { id: 'phone', label: 'Email' },
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
        <h1 className='ml-10 mb-10  sm:text-lg lg:text-4xl font-extrabold tracking-tight text-white  '>
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
