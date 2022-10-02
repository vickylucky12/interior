import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {urlFor} from '../../sanity'

const About = ({data}: any) => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='services_heading'>
          <h1 className='section_heading '>About us</h1>
        </div>
        <div className='about_wrapper'>
          <div className='about_wrapper_left'>
            <Image
              src={urlFor(data?.aboutImage).url()}
              alt='Image'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          <div className='about_wrapper_right'>
            <h2>{data?.aboutHeading}</h2>
            <p>{data?.aboutDescription}</p>
            <div className='contact_btn'>
              <button className='btn_brand_outline'>Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
