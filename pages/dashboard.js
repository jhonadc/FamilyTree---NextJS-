import React from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { ThumbUpIcon } from '@heroicons/react/solid';
import toast, { Toaster } from 'react-hot-toast';
import prisma from '@prisma/client';
import Link from 'next/link';
import Form from 'react-hook-form';

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  plan: 'Free',
  about:
    'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui',
  phone: '+1 555-555-5555',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
};

const family = [
  { name: 'Agda xxxxx yyyyyyyyy', href: '#' },
  { name: 'Iracema xxxx yyyyyyyyy', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const create = async (data) => {
    fetch('http://localhost:3000/api/user/createuser', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const read = async (data) => {
    fetch('http://localhost:3000/api/user/getdata', {
      body: JSON.stringify(data),
      method: 'READ',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const onSubmit = async (data) => {
    toast.promise(
      create(date),
      {
        loading: 'Data loading',
        success: 'Data Submitted',
        error: 'Something went wront',
      },
      {
        duration: 3000,
      }
    );
  };

  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        <div>
          {' '}
          <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2'>
            <div className='space-y-6 lg:col-start-1 lg:col-span-2'>
              {/* Description list*/}
              <section aria-labelledby='applicant-information-title'>
                <div className='bg-white shadow sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6 bg-gray-200'>
                    <h2
                      id='applicant-information-title'
                      className='text-lg leading-6 font-medium text-gray-900'>
                      Profile
                    </h2>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
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
                          {session.user.name}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email address
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {session.user.email}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Plan
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {user.plan}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Phone
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {user.phone}
                        </dd>
                      </div>
                      <div className='sm:col-span-2 lg:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500 text-justify'>
                          About
                        </dt>
                        <Form className='mt-1 text-sm text-gray-900 justify'>
                          {user.about}
                        </Form>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                          Edit Profile
                        </button>
                      </div>
                      <div className='sm:col-span-2 lg:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500 mb-5'>
                          Family Members
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          <ul
                            role='list'
                            className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                            {family.map((family) => (
                              <li
                                key={family.name}
                                className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                                <div className='w-0 flex-1 flex items-center'>
                                  <ThumbUpIcon
                                    className='flex-shrink-0 h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-2 flex-1 w-0 truncate'>
                                    {family.name}
                                  </span>
                                </div>
                                <div className='ml-4 flex-shrink-0'>
                                  <a
                                    href={family.href}
                                    className='font-medium text-blue-600 hover:text-blue-500'>
                                    Available Albuns
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
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
