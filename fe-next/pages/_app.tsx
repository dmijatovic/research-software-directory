import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


function MyApp({
  Component,
  pageProps:{ session, ...pageProps }
}: AppProps) {
  return(
    <>
      <Head>
        <title>App title</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
export default MyApp
