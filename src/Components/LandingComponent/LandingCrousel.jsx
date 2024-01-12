import React, { useEffect } from 'react';
import {LandingComponent, MarqueBanner} from './LandingComponent';
import bgImageDesktop from '../../Assest/images/homepageLaptop.png';
import { Carousel } from 'flowbite-react';
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  


const LandingCarousel = () => {


  return <>
    <div className='h-full w-full relative '>
        <Carousel pauseOnHover={true}  slideInterval={5000} className="custom_crousel rounded-none [&>*:nth-child(2)]:top-1/2 [&>*:nth-child(2)]:absolute [&>*:nth-child(2)]:left-16 [&>*:nth-child(2)]:flex-col [&>*:nth-child(2)]:space-y-4 [&>*:nth-child(2)]:space-x-0 [&>*:nth-child(3)]:hidden [&>*:nth-child(4)]:hidden [&>*:nth-child(1)]:rounded-none" leftControl={false} rightControl={false}>  
            {
                LandingCarousel_api.map((item, index)=>{
                    return <>
                        <LandingComponent key={index} crouselData={item} />
                    </>
                })
            }
        </Carousel>
        <MarqueBanner/>
      </div>

  </>
};


const LandingCarousel_api = [
    {
        id : 1,
        bg_image_desktop : bgImageDesktop,
        sub_title : "Fabulous Moments Every Day",
        heading_1 : "Clean",
        heading_part1 : "Beauty",
        heading_2 : "Visible",
        heading_part2 : "Result",
        button_text : "Shop Now",
        button_link : "/"
    },
    {
        id : 2,
        bg_image_desktop : bgImageDesktop,
        sub_title : "Fabulous Moments Every Day",
        heading_1 : "Clean",
        heading_part1 : "Beauty",
        heading_2 : "Visible",
        heading_part2 : "Result",
        button_text : "Shop Now",
        button_link : "/"
    },
    {
        id : 3,
        bg_image_desktop : bgImageDesktop,
        sub_title : "Fabulous Moments Every Day",
        heading_1 : "Clean",
        heading_part1 : "Beauty",
        heading_2 : "Visible",
        heading_part2 : "Result",
        button_text : "Shop Now",
        button_link : "/"
    },
]

export default LandingCarousel;
