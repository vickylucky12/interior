import type {AppProps} from 'next/app'
import '../styles/index.scss'
import Layout from '../shared/components/Layout'
import Script from 'next/script'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'
import {useState} from 'react'

function MyApp({Component, pageProps}: AppProps) {
  const [webInfo, setWebInfo] = useState<any>('')
  return (
    <>
      <Layout webInfo={webInfo}>
        <Component {...pageProps} setWebInfo={setWebInfo} />
        <Script src='https://cdn.jsdelivr.net/gh/frankeno/xsalert@main/src/xsalert.js' />
      </Layout>
    </>
  )
}

export default MyApp
