import React from 'react'
import Image from 'next/image'
import {urlFor} from '../../sanity'
import {useRouter} from 'next/router'

const Services = ({data, title}: any) => {
  const router = useRouter()
  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className='services_heading'>
          <h1 className='section_heading '>What We Do?</h1>
          <p>{title}</p>
        </div>
        <div className='service_section'>
          {data?.map((service: any) => (
            <div
              className='service_section_card'
              key={service?._key}
              onClick={() => router.push(service?.slug?.current)}
            >
              <div className='service_section_image'>
                <Image
                  objectFit='cover'
                  src={urlFor(service?.serviceImage).url()}
                  alt='image'
                  layout='fill'
                  priority={true}
                />
              </div>
              <div className='service_section_content'>
                <h3>{service?.serviceHeading}</h3>
                <p>{service?.serviceDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
