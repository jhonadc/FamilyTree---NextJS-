import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Dropdown from './dropdown';

export default function Navright() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Link href='/albums'>
          <button className='ml-8 mr-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-indigo-700'>
            MEMORIES
          </button>
        </Link>
        <br />
        <Dropdown />
      </>
    );
  } else {
    return (
      <>
        <button
          className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          onClick={() => signIn()}>
          Enter
        </button>
      </>
    );
  }
}
