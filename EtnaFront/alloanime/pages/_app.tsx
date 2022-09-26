import 'materialize-css/dist/css/materialize.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const M = require('materialize-css')
    M.AutoInit()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
