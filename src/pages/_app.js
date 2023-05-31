// import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session, provider}) {
  return( 
    <SessionProvider session={session} provider={provider}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
