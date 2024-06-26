import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestimonialsCrousel  = ({testimonialsData}) => {
   
  
      return <>
      <Carousel
    
    additionalTransfrom={0}
    arrows={true}
    autoPlaySpeed={3000}
    centerMode={true}
    className="gap-[2px] lg:w-[95%] lg:mx-auto"
    containerClass="container-padding-bottom "
    dotListClass="custom-dot-class"
    draggable
    focusOnSelect
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={true}
    customRightArrow={<CustomRightArrow />}
    customLeftArrow={<CustomLeftArrow />}
    customDot={<CustomDot />}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1000
        },
        items: 2,
        slidesToSlide : 1,
  
      },
      mobile: {
        breakpoint: {
          max: 500,
          min: 0
        },
        items: 0.1,
        slidesToSlide : 1,
        
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 501
        },
        items: 3,
        slidesToSlide : 1,
        
      }
    }}
    rewind={false}
    rewindWithAnimation={true}
    rtl={false}
    shouldResetAutoplay
    sliderClass=""
    slidesToSlide={1}
    swipeable
    showDots={true}
    
  >
    
    
    {
        testimonialsData.map((data, index) => {
          return <> 
          <TestimonialsCard cardData = {data} key={index}  />
          </>
      })
    }
     
   
  
  </Carousel>
      </>
  }

  const TestimonialsCard = ({cardData}) => {
    return <> 
    <div className='bg-white w-full md:w-full md:rounded-sm mx-auto text-black h-[270px] shadow-inner drop-shadow-md'>
        <div className='inner-container  px-5 py-9   md:px-8 text-left space-y-[1rem] '>
            <div>
                <h1 className='text-[18px] font-[500] md:text-[22px]'>{cardData?.heading}</h1>
            </div>
            <div>
                <p className='text-[12px] text-[363636] font-poppins font-[400] md:text-[14px]'>{cardData?.description}.</p>
            </div>
            <div className='pt-[0.8rem] space-y-[1rem] md:space-y-[1.2rem]'>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="99" height="20" viewBox="0 0 99 20" fill="none">
                    <path d="M9.38074 16.0025L13.742 18.8814C14.3044 19.2502 14.9967 18.7014 14.8323 18.0267L13.5689 12.8628C13.5347 12.7197 13.5402 12.5694 13.5846 12.4294C13.629 12.2893 13.7105 12.1651 13.8198 12.0711L17.7311 8.67952C18.2416 8.2387 17.982 7.34806 17.3157 7.30308L12.2103 6.96122C12.071 6.95279 11.9371 6.90236 11.8249 6.81609C11.7128 6.72981 11.6272 6.61143 11.5787 6.47542L9.67495 1.49145C9.62456 1.34742 9.53276 1.223 9.41201 1.13508C9.29126 1.04716 9.14742 1 9 1C8.85258 1 8.70874 1.04716 8.58799 1.13508C8.46724 1.223 8.37544 1.34742 8.32505 1.49145L6.42135 6.47542C6.37283 6.61143 6.28725 6.72981 6.17507 6.81609C6.06289 6.90236 5.92896 6.95279 5.78966 6.96122L0.684275 7.30308C0.0179787 7.34806 -0.241617 8.2387 0.268921 8.67952L4.18017 12.0711C4.28949 12.1651 4.37105 12.2893 4.41544 12.4294C4.45984 12.5694 4.46527 12.7197 4.43111 12.8628L3.26293 17.6489C3.06391 18.4585 3.89461 19.1153 4.56091 18.6744L8.61926 16.0025C8.73306 15.9273 8.86514 15.8873 9 15.8873C9.13486 15.8873 9.26694 15.9273 9.38074 16.0025Z" fill="#E89689"/>
                    <path d="M29.3807 16.0025L33.742 18.8814C34.3044 19.2502 34.9967 18.7014 34.8323 18.0267L33.5689 12.8628C33.5347 12.7197 33.5402 12.5694 33.5846 12.4294C33.629 12.2893 33.7105 12.1651 33.8198 12.0711L37.7311 8.67952C38.2416 8.2387 37.982 7.34806 37.3157 7.30308L32.2103 6.96122C32.071 6.95279 31.9371 6.90236 31.8249 6.81609C31.7128 6.72981 31.6272 6.61143 31.5787 6.47542L29.6749 1.49145C29.6246 1.34742 29.5328 1.223 29.412 1.13508C29.2913 1.04716 29.1474 1 29 1C28.8526 1 28.7087 1.04716 28.588 1.13508C28.4672 1.223 28.3754 1.34742 28.3251 1.49145L26.4213 6.47542C26.3728 6.61143 26.2872 6.72981 26.1751 6.81609C26.0629 6.90236 25.929 6.95279 25.7897 6.96122L20.6843 7.30308C20.018 7.34806 19.7584 8.2387 20.2689 8.67952L24.1802 12.0711C24.2895 12.1651 24.371 12.2893 24.4154 12.4294C24.4598 12.5694 24.4653 12.7197 24.4311 12.8628L23.2629 17.6489C23.0639 18.4585 23.8946 19.1153 24.5609 18.6744L28.6193 16.0025C28.7331 15.9273 28.8651 15.8873 29 15.8873C29.1349 15.8873 29.2669 15.9273 29.3807 16.0025Z" fill="#E89689"/>
                    <path d="M49.3807 16.0025L53.742 18.8814C54.3044 19.2502 54.9967 18.7014 54.8323 18.0267L53.5689 12.8628C53.5347 12.7197 53.5402 12.5694 53.5846 12.4294C53.629 12.2893 53.7105 12.1651 53.8198 12.0711L57.7311 8.67952C58.2416 8.2387 57.982 7.34806 57.3157 7.30308L52.2103 6.96122C52.071 6.95279 51.9371 6.90236 51.8249 6.81609C51.7128 6.72981 51.6272 6.61143 51.5787 6.47542L49.6749 1.49145C49.6246 1.34742 49.5328 1.223 49.412 1.13508C49.2913 1.04716 49.1474 1 49 1C48.8526 1 48.7087 1.04716 48.588 1.13508C48.4672 1.223 48.3754 1.34742 48.3251 1.49145L46.4213 6.47542C46.3728 6.61143 46.2872 6.72981 46.1751 6.81609C46.0629 6.90236 45.929 6.95279 45.7897 6.96122L40.6843 7.30308C40.018 7.34806 39.7584 8.2387 40.2689 8.67952L44.1802 12.0711C44.2895 12.1651 44.371 12.2893 44.4154 12.4294C44.4598 12.5694 44.4653 12.7197 44.4311 12.8628L43.2629 17.6489C43.0639 18.4585 43.8946 19.1153 44.5609 18.6744L48.6193 16.0025C48.7331 15.9273 48.8651 15.8873 49 15.8873C49.1349 15.8873 49.2669 15.9273 49.3807 16.0025Z" fill="#E89689"/>
                    <path d="M69.3807 16.0025L73.742 18.8814C74.3044 19.2502 74.9967 18.7014 74.8323 18.0267L73.5689 12.8628C73.5347 12.7197 73.5402 12.5694 73.5846 12.4294C73.629 12.2893 73.7105 12.1651 73.8198 12.0711L77.7311 8.67952C78.2416 8.2387 77.982 7.34806 77.3157 7.30308L72.2103 6.96122C72.071 6.95279 71.9371 6.90236 71.8249 6.81609C71.7128 6.72981 71.6272 6.61143 71.5787 6.47542L69.6749 1.49145C69.6246 1.34742 69.5328 1.223 69.412 1.13508C69.2913 1.04716 69.1474 1 69 1C68.8526 1 68.7087 1.04716 68.588 1.13508C68.4672 1.223 68.3754 1.34742 68.3251 1.49145L66.4213 6.47542C66.3728 6.61143 66.2872 6.72981 66.1751 6.81609C66.0629 6.90236 65.929 6.95279 65.7897 6.96122L60.6843 7.30308C60.018 7.34806 59.7584 8.2387 60.2689 8.67952L64.1802 12.0711C64.2895 12.1651 64.371 12.2893 64.4154 12.4294C64.4598 12.5694 64.4653 12.7197 64.4311 12.8628L63.2629 17.6489C63.0639 18.4585 63.8946 19.1153 64.5609 18.6744L68.6193 16.0025C68.7331 15.9273 68.8651 15.8873 69 15.8873C69.1349 15.8873 69.2669 15.9273 69.3807 16.0025Z" fill="#E89689"/>
                    <path d="M89.3807 16.0025L93.742 18.8814C94.3044 19.2502 94.9967 18.7014 94.8323 18.0267L93.5689 12.8628C93.5347 12.7197 93.5402 12.5694 93.5846 12.4294C93.629 12.2893 93.7105 12.1651 93.8198 12.0711L97.7311 8.67952C98.2416 8.2387 97.982 7.34806 97.3157 7.30308L92.2103 6.96122C92.071 6.95279 91.9371 6.90236 91.8249 6.81609C91.7128 6.72981 91.6272 6.61143 91.5787 6.47542L89.6749 1.49145C89.6246 1.34742 89.5328 1.223 89.412 1.13508C89.2913 1.04716 89.1474 1 89 1C88.8526 1 88.7087 1.04716 88.588 1.13508C88.4672 1.223 88.3754 1.34742 88.3251 1.49145L86.4213 6.47542C86.3728 6.61143 86.2872 6.72981 86.1751 6.81609C86.0629 6.90236 85.929 6.95279 85.7897 6.96122L80.6843 7.30308C80.018 7.34806 79.7584 8.2387 80.2689 8.67952L84.1802 12.0711C84.2895 12.1651 84.371 12.2893 84.4154 12.4294C84.4598 12.5694 84.4653 12.7197 84.4311 12.8628L83.2629 17.6489C83.0639 18.4585 83.8946 19.1153 84.5609 18.6744L88.6193 16.0025C88.7331 15.9273 88.8651 15.8873 89 15.8873C89.1349 15.8873 89.2669 15.9273 89.3807 16.0025Z" stroke="#E89689" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='flex justify-start items-center gap-[1rem] '>
                <div className=' box-content w-fit'>
                    <img src={cardData?.profile_photo} alt="" className='h-fit w-fit object-cover  '  />
                </div>
                <div>
                    <h2 className='md:text-[18px]'>{cardData?.user_name}</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
}


// custom right arrow
const CustomRightArrow = ({ onClick}) => {
    // onMove means if dragging or swiping in progress.
    return <button className='h-[3rem] w-[3rem] absolute top-2/12 left-0 bg-white  rounded-full flex items-center justify-center ' onClick={() => onClick()}>
      <MdChevronLeft className='text-[1.5rem] text-[#333]'/>
    </button>;
  };
  
  const CustomLeftArrow = ({ onClick}) => {
    // onMove means if dragging or swiping in progress.
    return <button className='h-[3rem] w-[3rem] absolute top-2/12 right-0 bg-white  rounded-full flex items-center justify-center ' onClick={() => onClick()}>
      <MdChevronRight className='text-[1.5rem] text-[#333]'/>
    </button>;
  };
  
  // custom dots 
  const CustomDot = ({ onClick, active }) => {
    
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      
      <button
        className={`w-3 h-3 rounded-full mx-2 ${active ? "active border-[0.01rem] border-nav-pink h-5 w-5 bg-transparent " : null} bg-nav-pink`}
        onClick={() => onClick()} />
     
    );
  };

  export default TestimonialsCrousel;

