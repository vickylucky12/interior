import Image from 'next/image'
import React from 'react'
import {urlFor} from '../../sanity'

const Showcase = ({data}: any) => {

  return (
    <div className='showcase'>
      <div className='container'>
        <div className='showcase_wrapper'>
          <div className='showcase_wrapper_image'>
            <Image
              src={urlFor(data?.viewPortImage?.asset).url()}
              alt='Image'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          <div className='showcase_wrapper_section'>
            <div className='showcase_wrapper_section_left'>1</div>
            <div className='showcase_wrapper_section_right'>
              <h4>{data?.viewPortFirstHeading}</h4>
              <p>{data?.viewPortFirstDescription}</p>
            </div>
          </div>
          <div className='showcase_wrapper_section'>
            <div className='showcase_wrapper_section_left'>2</div>
            <div className='showcase_wrapper_section_right'>
              <h4>{data?.viewPortSecondHeading}</h4>
              <p>{data?.viewPortSecondDescription}</p>
            </div>
          </div>
          <div className='showcase_wrapper_section'>
            <div className='showcase_wrapper_section_left'>3</div>
            <div className='showcase_wrapper_section_right'>
              <h4>{data?.viewPortThirdHeading}</h4>
              <p>{data?.viewPortThirdDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
