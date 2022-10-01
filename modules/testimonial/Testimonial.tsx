import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import Slider from '../slider/Slider'

const Testimonial = ({data}: any) => {
  return (
    <div className='testimonial'>
      <div className='testimonial_left'>
        <div className='icon'>
          <FaQuoteRight />
        </div>
        <h1>What our Clients Are Saying</h1>
      </div>
      <div className='testimonial_right'>
        <Slider data={data} />
      </div>
    </div>
  )
}

export default Testimonial
