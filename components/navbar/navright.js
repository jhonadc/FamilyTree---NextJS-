import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Dropdown from './dropdown';

export default function Loginoutbtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className='grid gap-4 grid-cols-2'>
          <Link href='/'>
            <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-indigo-700'>
              {session.user.name}'s Memories'
            </button>
          </Link>
          <br />
          <Dropdown />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link href='/register'>
          <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo bg-white-600 hover:bg-indigo-700 hover:text-white'>
            Sign up
          </button>
        </Link>
        <button
          className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          onClick={() => signIn()}>
          Sign in
        </button>
      </>
    );
  }
}
