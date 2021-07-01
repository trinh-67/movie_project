import React from 'react';
import LightLity from 'lity';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function CarouselHome() {

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
    };
      const images = [
        {
          name: 'Photo 1',
          url: './images/banner1.png',
          link: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ&ab_channel=CJEntertainmentVietnam'
        },
        {
          name: 'Photo 2',
          url: './images/banner2.png',
          link: 'https://www.youtube.com/watch?v=VAvF3VBxOac&feature=emb_logo'
        },
        {
          name: 'Photo 3',
          url: './images/banner3.png',
          link: 'https://www.youtube.com/watch?v=x3ggvoYbcLo&ab_channel=CGVCinemasVietnam'
        },
        {
          name: 'Photo 4',
          url: './images/banner4.png',
          link: 'https://www.youtube.com/watch?v=Vgb1uUmpQNU&feature=emb_logo&ab_channel=LotteCinemaVietNam'
        }
      ]
      return (
        <section className="slider-home">
            <Slider {...settings}>
              {images.map((photo, index) => {
                return (
                  <div key={index} className="inner-slider">
                    <div className="carousel-item-ow">
                    <a href={photo.link} data-lity>
                      <img src={photo.url} alt="anh_carousel" className="img-fluid w-100" />
                      <div className="playfilm">
                       <i className="fa fa-play video-play-slider" />
                      </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </section>
    
      )
}
