import Link from 'next/link'

const Header = ({headerInfo}: any) => {
  return (
    <nav className='header'>
      <div className='container'>
        <div className='wrapper'>
          <div className='header_left'>
            <Link href='/'>
              <div className='nav_item'>Home</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Whats We Do?</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Projects</div>
            </Link>
          </div>
          <div className='header_middle '>bn interior</div>
          <div className='header_right'>
            <Link href='/'>
              <div className='nav_item'>Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
