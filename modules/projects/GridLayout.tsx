import React, {useMemo, useState} from 'react'
import {urlFor} from '../../sanity'
import ImageGallery from 'react-image-gallery'
import Image from 'next/image'
import {CgClose} from 'react-icons/cg'

const GridLayout = ({images}: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [showGallery, setShowGallery] = useState<boolean>(false)
  const Images = useMemo(() => {
    return images?.map((item: any) => ({
      original: urlFor(item?.serviceImage).url(),
      thumbnail: urlFor(item?.serviceImage).url(),
    }))
  }, [images])

  return (
    <div className='showCaseProjects'>
      <div className='gallery'>
        {Images?.map((item: any, i: any) => (
          <div
            className='p_card'
            key={i}
            onClick={() => {
              setCurrentIndex(i)
              setShowGallery(true)
            }}
          >
            <Image
              src={urlFor(item?.original).url()}
              alt='Image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
      {showGallery && (
        <div className='previewItem'>
          <ImageGallery startIndex={currentIndex} items={Images} />
          <div className='closeIcon' onClick={() => setShowGallery(false)}>
            <CgClose />
          </div>
        </div>
      )}
    </div>
  )
}

export default GridLayout
