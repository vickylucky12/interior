import {NextPage} from 'next'
import Footer from '../../modules/footer/Footer'
import Header from '../../modules/header/Header'

interface I_Layout {
  children: React.ReactNode
  webInfo: any
}

const Layout = ({children, webInfo}: I_Layout) => {
  return (
    <>
      <Header headerInfo={webInfo?.headerInfo} />
      {children}
      <Footer socialLinks={webInfo} />
    </>
  )
}

export default Layout
