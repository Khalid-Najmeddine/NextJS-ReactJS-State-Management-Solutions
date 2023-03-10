import {Hydrate, QueryClient, QueryClientProvider} from "react-query"
import '../styles/globals.css'
import React from "react"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
