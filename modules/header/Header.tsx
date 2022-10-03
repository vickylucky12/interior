import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import {sanityClient, urlFor} from '../../sanity'

const Header = () => {
  const [headerInfo, setHeaderInfo] = useState<any>(null)
  const headerRef = useRef<any>()
  const menuRef = useRef<any>()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const handleClickOutSideOfNav = (event: any) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      headerRef.current.classList.remove('show')
      setIsOpenMenu(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSideOfNav)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSideOfNav)
    }
  }, [])

  const handleMenuBarClick = () => {
    if (headerRef?.current) {
      headerRef.current.classList.toggle('show')
      setIsOpenMenu((prev: boolean) => !prev)
    }
  }
  const closeNavbar = () => {
    if (headerRef?.current) {
      setIsOpenMenu(false)
      headerRef.current.classList.remove('show')
    }
  }

  const getHeaderInfo = async () => {
    try {
      const pageInfoQuery = `*[_type == "basicInfo"]`
      const pageInfo = await sanityClient.fetch(pageInfoQuery)
      const {webInfo} = pageInfo[0]
      setHeaderInfo(webInfo)
    } catch (error) {
      console.log(error)
    }
  }
  getHeaderInfo()

  return (
    <nav className='header'>
      <div className='container'>
        <div className='wrapper'>
          <div className='wrapper_left'>
            {headerInfo?.logo && (
              <Link href='/' passHref>
                <Image
                  src={urlFor(headerInfo?.logo?.asset).url()}
                  alt={headerInfo?.websiteName}
                  layout='fill'
                  priority={true}
                />
              </Link>
            )}
          </div>
          <div ref={headerRef} className='wrapper_right'>
            <Link href='/#about' scroll={false} passHref>
              <p onClick={closeNavbar} className='nav_item'>
                About us
              </p>
            </Link>
            <Link href='/#services' passHref>
              <p onClick={closeNavbar} className='nav_item'>
                Whats We Do?
              </p>
            </Link>
            <Link href='/projects' passHref>
              <p onClick={closeNavbar} className='nav_item'>
                Projects
              </p>
            </Link>
            <Link href='/#contact' passHref>
              <p onClick={closeNavbar} className='nav_item'>
                Contact Us
              </p>
            </Link>
          </div>
          <div ref={menuRef} className='menu_icon' onClick={handleMenuBarClick}>
            {isOpenMenu ? <CgClose /> : <BiMenuAltRight />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
