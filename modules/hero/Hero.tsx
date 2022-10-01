import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay, EffectFade} from 'swiper'
import Link from 'next/link'
import {urlFor} from '../../sanity'

const Hero = ({data}: any) => {
  return (
    <section className='hero_section'>
      <div className='hero_section_left'>
        <div className='content_wrapper'>
          <div className='content'>
            <h1 className='heading'>{data?.mainHeading}</h1>
            <p>{data?.bannerDescription}</p>
            <div className='buttons_wrapper'>
              <button className='btn_brand'>Contact us</button>
              <Link href='/projects' passHref>
                <button className='btn_brand_outline'>
                  Visit our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='hero_section_right'>
        <Swiper
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {data?.images?.map((item: any) => (
            <SwiperSlide key={item?._key}>
              <div className='image_container'>
                <Image
                  src={urlFor(item?.asset).url()}
                  alt='Image'
                  layout='fill'
                  objectFit='cover'
                  priority={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero
