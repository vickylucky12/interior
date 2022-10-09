import type {AppProps} from 'next/app'
import Layout from '../shared/components/Layout'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'
import "react-image-gallery/styles/scss/image-gallery.scss";
import '../styles/index.scss'


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
