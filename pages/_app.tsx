import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider, useSession } from "next-auth/client";
import Layout from "@/components/organisms/layout";
import "@/styles/globals.css";
import "@/styles/tailwind-utils.css";
import "@/styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
