import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import { GoogleAnalytics } from "nextjs-google-analytics";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <GoogleAnalytics trackPageViews />
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>
  );
}
