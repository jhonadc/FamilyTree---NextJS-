/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Loginoutbtn from './loginoutbutton';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Navright from './navright';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <div>
      <Popover className='relative bg-white'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='/' className='inline'>
              <span className='sr-only'>Family Tree</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='/logo.png'
                alt='tree logo'
              />
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-end text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group
            as='nav'
            className='hidden md:flex space-x-20 mb-0 pb-0'>
            {navigation.map((item) => (
              <Link href={item.href}>
                <a
                  key={item.name}
                  className='antialiased text-base font-medium hover:text-gray-500 text-gray-900 sm:text-lg lg:text-xl'>
                  {item.name}
                </a>
              </Link>
            ))}
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Navright />
          </div>

          <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Popover.Panel
              focus
              className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='/logo.png'
                        alt='tree logo'
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 '>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='py-6 px-5'>
                  <div className='grid grid-cols-1 align-right mx-2'>
                    {navigation.map((item) => (
                      <Link href={item.href}>
                        <a
                          key={item.name}
                          className='text-base font-medium text-2xl text-gray-900 hover:text-blue-700'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>

                  <div className='mt-6'>
                    <>
                      <Navright />
                    </>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </div>
  );
}
