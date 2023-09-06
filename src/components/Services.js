import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'

const Services = () => {
  return (
    <div className="services">
        <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
            <div className="item1">
                <img src={img1} alt="" />
                <p className='legend'>Image 1</p>
            </div>
            <div className="item2">
                <img src={img2} alt="" />
                <p className='legend'>Image 2</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services