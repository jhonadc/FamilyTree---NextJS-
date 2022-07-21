import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
{
  /*check this */
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
