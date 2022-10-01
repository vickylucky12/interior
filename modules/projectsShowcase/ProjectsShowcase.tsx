import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {urlFor} from '../../sanity'

const ProjectsShowcase = ({data, services}: any) => {
  const router = useRouter()

  const findSlug = (id: string) => {
    const slugObj = services?.find((item: any) => item?._id === id)
    return slugObj?.slug?.current
  }

  return (
    <div className='p_showcase'>
      <div className='services_heading'>
        <h1>We Build More Projects Successfully</h1>
      </div>
      <div className='p_wrapper'>
        {data?.map((item: any) => (
          <div
            className='p_image'
            key={item?._id}
            onClick={() => {
              const slug = findSlug(item?.categories[0]?._ref)
              router.push(`/${slug}`)
            }}
          >
            <Image
              src={urlFor(item?.serviceImage).url()}
              alt='Image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
      <div className='viewMoreBtn'>
        <Link href='/projects' passHref>
          <button className='btn_brand'>View More</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsShowcase
