import type {AppProps} from 'next/app'
import '../styles/index.scss'
import Layout from '../shared/components/Layout'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'
import {useState} from 'react'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
