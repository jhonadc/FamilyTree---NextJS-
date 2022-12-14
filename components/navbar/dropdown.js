/* eslint-disable @next/next/no-html-link-for-pages */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const { data: session } = useSession();
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center ml-8 mr-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border rounded-md shadow-sm text-base font-medium text-black bg-white-600 hover:text-white hover:bg-blue-500'>
          Options
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-blue ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
          <div className='bg-blue-400 px-4 py-3'>
            <p className='text-sm'>Signed in as</p>
            <p className=' text-sm text-gray-100 '>{session.user.email}</p>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/dashboard'
                  className={classNames(
                    active ? 'bg-blue-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  Dashboard
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-blue-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-blue-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  License
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <form method='POST' action='#'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signOut()}
                    type='submit'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}>
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
