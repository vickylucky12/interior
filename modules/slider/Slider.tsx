// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
// import required modules
import {Autoplay, Pagination} from 'swiper'

const Slider = ({data}: any) => {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item?._key}>
            <div className='image_container'>
              <div className='content_wrapper'>
                <p>{`${item?.testimonialText}`}</p>
                <h3>{item?.personName}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
