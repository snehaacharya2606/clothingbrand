'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const slides = [
  {
    image: '/assets/images/slide1.jpg',
    textClass: 'text-slide',
    caption: (
      <>
        <h3 className="caption1">Sale</h3>
        <h3 className="caption2">Extra<strong>30%</strong>off</h3>
        <h2 className="caption3">When you buy from 2 or more...</h2>
        <p className="icon-anchor icons caption6"><span className="hidden">hidden</span></p>
        <a href="#" className="btn-shop caption4">Shop Now</a>
      </>
    ),
  },
  {
    image: '/assets/images/slide2_1.jpg',
    textClass: 'text-slide text-slide2',
    caption: (
      <>
        <h3 className="caption1">Men’s</h3>
        <h3 className="caption2">looks</h3>
        <h2 className="caption3">Summer</h2>
        <h2 className="caption5">2015</h2>
        <h3 className="caption4"><a href="#" className="btn-shop">Shop Now</a></h3>
      </>
    ),
  },
  {
    image: '/assets/images/slide3_2.jpg',
    textClass: 'text-slide text-slide3',
    caption: (
      <>
        <h3 className="caption1">Mid-Season</h3>
        <h3 className="caption2">Must have for Women 2015</h3>
        <h3 className="caption4"><a href="#" className="btn-shop">Shop Womens</a></h3>
      </>
    ),
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  return (
    <div className="alo-block-slide">
      <div className="container-none flex-index">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          onSlideChange={(s) => setActive(s.realIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.image} className="item">
              <a href="#"><img src={slide.image} alt="magicslider" /></a>
              <div className={`bx-caption${i === active ? ' start play' : ''}`}>
                <div className="container">
                  <div className={slide.textClass}>{slide.caption}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
