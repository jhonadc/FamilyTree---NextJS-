import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Script from 'next/script';
import * as gtag from "../lib/gtag";
import { useRouter } from 'next/router';
import { useEffect } from "react";

function App({ Component, pageProps }: typeof pageProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
    gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      };
  }, [router.events]);

 {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Q91LKR3HT0"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q91LKR3HT0', {
        page_path: window.location.pathname,
        });
        `,
        }}
      />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
      );
}
}

export default App
//changed to class based component and some code regarding session was removed.
//check below

/*export default function App({
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
*/
