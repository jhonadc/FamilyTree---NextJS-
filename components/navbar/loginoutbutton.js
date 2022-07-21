import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Loginoutbtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Link href='/register'>
          <button
            onClick={() => signOut()}
            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo bg-white-600 hover:bg-indigo-700 hover:text-white'>
            Sign out
          </button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link href='/register'>
          <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-white-600 hover:text-indigo'>
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
