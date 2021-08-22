import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider, useSession } from 'next-auth/client'
import { RecoilRoot, useRecoilState } from 'recoil'
import { isLoadingState } from '@/recoil/atoms'
import Layout from '@/components/organisms/layout'
import LoadingScreen from '@/components/atoms/loading'
import '@/styles/globals.css'
import '@/styles/tailwind-utils.css'
import '@/styles/tailwind.css'

function AppInit() {
  const [session, loading] = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState)


  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true)
        if (!session) {
          if (router.pathname !== '/' && router.pathname !== '/signup') {
            router.push('/')
          }
        } else {
          if (router.pathname === '/signup') {
            router.push('/')
          }
        }
      } catch (error){
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    })()
  },[session, router, setIsLoading])
  
  return null
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <LoadingScreen />
        <AppInit />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </Provider>
  )
}

export default MyApp
