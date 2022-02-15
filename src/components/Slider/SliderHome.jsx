import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function SliderHome() {
  return (
    <div className='slider-home-container'>
        <Swiper>
            <SwiperSlide>
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='slide1' />
                
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SliderHome