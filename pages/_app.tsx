import '@/styles/globals.css'
import '@/styles/tailwind-utils.css'
import '@/styles/tailwind.css'

import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import Layout from '@/components/organisms/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
