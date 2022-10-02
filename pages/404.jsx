import Link from 'next/link'
import {CgArrowLongLeft} from 'react-icons/cg'

const PageNotFound = () => {
  return (
    <div className='notfound'>
      <div className='container'>
        <div className='notfound_content'>
          <h1>404 Notfound</h1>
          <h5>Holy Crap! It Looks like you lost in space come back to earth</h5>
          <Link href='/' passHref>
            <button className='btn_brand'>
              <CgArrowLongLeft className='icon' /> Back to Earth
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
