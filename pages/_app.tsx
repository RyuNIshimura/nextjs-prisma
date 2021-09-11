import React from "react";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import Layout from "@/components/organisms/layout";
import "@/styles/globals.css";
import "@/styles/tailwind-utils.css";
import "@/styles/tailwind.css";
import { APP_DESCRIPTION, APP_DOMAIN, APP_NAME } from "@/lib/constants";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content={`${APP_DOMAIN}/ogp.png`} />
        <meta name="twitter:image" content={`${APP_DOMAIN}/ogp.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
