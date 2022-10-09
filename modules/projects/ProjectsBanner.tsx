import Image from 'next/image'
import {urlFor} from '../../sanity'

const ProjectsBanner = ({banner, title}: any) => {
  return (
    <div className='p_banner'>
      <div className='p_banner_image'>
        <Image
          src={urlFor(banner?.serviceImage?.asset).url()}
          alt='Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='banner_content'>
        <h1 className='section_heading'>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
      </div>
    </div>
  )
}

export default ProjectsBanner
