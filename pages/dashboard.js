import React from 'react';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { Table } from '../components/utilities/table';

import prisma from '../lib/prisma';

const family = [
  { name: 'Agda Lima Lira', email: 'fakeagda@gmail.com', href: '#' },
  { name: 'Iracema Lira Lima', email: 'fakeiracema@gmail.com', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
          <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2'>
            <div className='space-y-6 lg:col-start-1 lg:col-span-2'>
              <section aria-labelledby='applicant-information-title'>
                <div className='bg-white shadow sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6 bg-blue-600'>
                    <h2
                      id='applicant-information-title'
                      className='text-xl leading-6 font-medium text-white'>
                      Profile
                    </h2>
                    <p className='mt-1 max-w-2xl text-lg text-white'>
                      Personal details
                    </p>
                  </div>
                  <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Name
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {user.name}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email address
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {user.email}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Plan
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>USERPLAN</dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Phone
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          PHONENUMBER
                        </dd>
                      </div>
                      <div className='sm:col-span-2 lg:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500 text-justify'>
                          About
                        </dt>
                        <dd className='mt-1 text-lg text-gray-900 justify'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et libero in felis sagittis gravida.
                          Vestibulum tristique ac dolor at auctor. Pellentesque
                          habitant morbi tristique senectus et netus et
                          malesuada fames ac turpis egestas. Suspendisse
                          fermentum molestie lorem quis fermentum.
                        </dd>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='invisible inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                          Edit Profile
                        </button>
                      </div>
                      <div className='sm:col-span-2 lg:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500 mb-5'>
                          Family Members
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          <Table
                            columns={[
                              { id: 'name', label: 'Name' },
                              { id: 'email', label: 'Email' },
                              { id: 'albums', label: 'Albuns' },
                            ]}
                            rows={family.map((family) => ({
                              name: (
                                <div className='flex items-center'>
                                  <div className='ml-4'>
                                    <div className='font-medium text-gray-900'>
                                      {family.name}
                                    </div>
                                  </div>
                                </div>
                              ),
                              email: (
                                <div className='flex items-center'>
                                  <div className='ml-4'>
                                    <div className='font-medium text-gray-900'>
                                      {family.email}
                                    </div>
                                  </div>
                                </div>
                              ),
                              albuns: (
                                <div className='ml-4 flex-shrink-0'>
                                  <a
                                    href={family.href}
                                    className='font-medium text-blue-600 hover:text-blue-500'>
                                    Available Albuns
                                  </a>
                                </div>
                              ),
                            }))}
                          />
                        </dd>
                      </div>
                    </dl>
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
      <>
        <h1 className='text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
          You are not signed in.
        </h1>
      </>
    );
  }
}
