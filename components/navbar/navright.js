import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../utilities/button';
import Dropdown from './dropdown';

export default function Navright() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Link href='/gallery'>
          <Button variant='primary'>Memories</Button>
        </Link>
        <br />
        <Dropdown />
      </>
    );
  } else {
    return (
      <>
        <Button variant='primary' onClick={() => signIn()}>
          Enter
        </Button>
      </>
    );
  }
}
