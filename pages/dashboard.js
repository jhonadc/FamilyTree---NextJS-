import React from 'react';

import { useSession } from 'next-auth/react';

import {
  CheckIcon,
  PaperClipIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid';

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
};

const family = [
  { name: 'Agda', href: '#' },
  { name: 'Iracema', href: '#' },
];
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
};
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
];
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body:
      'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body:
      'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const { data: session } = useSession();
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
                          Jhonathan Campos
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email address
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          ricardocooper@example.com
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Plan
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>Free</dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Phone
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          +1 555-555-5555
                        </dd>
                      </div>
                      <div className='sm:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500'>
                          About
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                          anim incididunt cillum culpa consequat. Excepteur qui
                          ipsum aliquip consequat sint. Sit id mollit nulla
                          mollit nostrud in ea officia proident. Irure nostrud
                          pariatur mollit ad adipisicing reprehenderit deserunt
                          qui eu.
                        </dd>
                      </div>
                      <div className='sm:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500'>
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
