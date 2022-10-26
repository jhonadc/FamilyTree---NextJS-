import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
];

export default function Centralmenu() {
  return (
    <div>
      <Popover.Group as='nav' className='hidden md:flex space-x-10'>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              key={item.name}
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              {item.name}
            </a>
          </Link>
        ))}
      </Popover.Group>
    </div>
  );
}
