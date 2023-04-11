import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (

    <SessionProvider session={pageProps.session}>
      <Head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q91LKR3HT0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q91LKR3HT0');
        </script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
