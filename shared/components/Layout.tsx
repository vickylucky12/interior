import {NextPage} from 'next'
import Footer from '../../modules/footer/Footer'
import Header from '../../modules/header/Header'

interface I_Layout {
  children: React.ReactNode
}

const Layout = ({children}: I_Layout) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout
