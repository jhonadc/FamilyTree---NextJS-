import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Script from 'next/script';
import * as gtag from "../lib/gtag";
import { useRouter } from 'next/router';
import { useEffect } from "react";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
