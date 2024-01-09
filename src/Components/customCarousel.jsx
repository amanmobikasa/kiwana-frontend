
import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import play from '../Assest/images/play.png';
import { useDispatch } from 'react-redux';
import { pdpPopUpSlice } from '../Redux/reducer/pdppopupSlice';


const CustomCarousel = ({carouselData}) => {
  const [categoryItems, setCategoryItems] = useState(3);
  useEffect(()=>{
    if(carouselData[0].type === "category"){
      setCategoryItems(2)
    }
  
  },[carouselData])

    return <>
    <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={true}
  className="lg:gap-[2rem] gap-2"
  containerClass="container-padding-bottom "
  dotListClass=""
  draggable
  focusOnSelect
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1000
      },
      items: categoryItems ,
      slidesToSlide : 1,

    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0
      },
      items: 0.5,
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
    carouselData.map((data, index) => {
        return <> 
        <CarouselCards cardData = {data} key={index}  />
        </>
    })
  }
   
 

</Carousel>
    </>
}

const CarouselCards = ({cardData}) => {
  const dispatch = useDispatch(); 


  const handlePdpPopupClick = (event, pdpPopupData) => {
    if(pdpPopupData){
      dispatch(pdpPopUpSlice(pdpPopupData))
    }
  }

    return <>
    <div id={`card-${cardData.id}`} className='card-container w-full h-fit lg:space-y-3 '>
        <div className='h-full w-full lg:w-[95%] lg:h-fit   relative'>
          <div className='h-full w-full object-contain  lg:object-contain'>
              <img src={cardData.imgLink}  className='w-full h-full ' alt={cardData?.title}/>
          </div>
            {
                cardData.type === 'category' || cardData.type === 'videoCollection' ? null : 
            <div onClick={(event)=> handlePdpPopupClick(event, cardData.pdpPopup[0])} className={`absolute bottom-[1rem] right-[1rem] md:bottom-[2rem] md:right-[2rem] lg:bottom-5 lg:right-8  ${cardData?.type==="featured_products" ? "bg-nav-pink text-white" : "bg-white text-nav-pink"}  h-[1.5rem] w-[1.5rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[2.5rem] lg:w-[2.5rem] rounded-full flex justify-center items-center`}>
                <AiOutlinePlus className='text-lg lg:text-xl'/>
            </div>
            }
            {
                cardData.type === 'videoCollection' ?
            <div className={`absolute top-0 flex justify-center w-full h-full items-center`}>
                <img src={play} className='h-[4rem] w-[4rem]' alt=''/>
            </div> : null
            }
           { cardData.type === 'featured_products' ? <div id='heart' className='absolute top-[1rem] right-[1rem] h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'>
              <svg  className='h-[1rem] w-[1rem]' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M9.38934 17C8.44862 17 7.50889 16.6718 6.777 16.0145C1.21147 11.0171 -0.857127 7.01223 0.450032 3.77069C1.05288 2.27497 2.47332 0.406081 4.49168 0.0599155C6.78389 -0.332272 8.64563 1.29751 9.43466 2.13991C10.2188 1.30951 12.0657 -0.276245 14.3757 0.114942C17.0855 0.579163 18.2893 3.3855 18.4173 3.70366C19.7245 6.9422 17.6263 10.9701 12.0027 16.0155C11.2688 16.6718 10.3291 17 9.38934 17ZM5.2019 0.999364C5.02361 0.999364 4.84138 1.01437 4.65619 1.04539C2.52356 1.41256 1.47448 3.87073 1.36219 4.14987C0.232336 6.9492 2.21721 10.5849 7.42811 15.2642C8.52841 16.2506 10.2503 16.2506 11.3496 15.2642C16.5457 10.6019 18.6173 6.84015 17.5042 4.08184C17.1151 3.11737 15.9852 1.40456 14.2112 1.10141C11.8047 0.682213 9.8996 3.10337 9.81981 3.20642C9.63364 3.44653 9.23371 3.44653 9.04753 3.20642C8.8584 2.9633 7.26558 0.999364 5.2019 0.999364Z" fill="#EEBAB2"/>
              </svg>
            </div> : ""}
        </div>
        {
          cardData.type === "videoCollection" ? null :
        <div className='content-container flex justify-center text-center mt-3 lg:mt-0 lg:w-[95%]'>
            <div>
                <h1 className='capitalize text-[16px] font-[400] md:text-[20px] lg:text-[1.2rem]'>{cardData?.title}</h1>
                {cardData?.type === 'category' ? null :  <h1 className='text-gray-800 text-[16px] font-[500] md:text-[20px] lg:text-[20px]'>$  {cardData?.price}.00</h1>}
                
                { cardData?.type === 'category' ? null : <div className='flex items-center justify-center gap-3 w-full'>
                    <div id='featured-div' className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="9" viewBox="0 0 44 9" fill="none">
                            <path  d="M42.7158 2.96831L40.5192 2.64806L39.5374 0.657458C39.3615 0.302637 38.8518 0.298127 38.6744 0.657458L37.6927 2.64806L35.4961 2.96831C35.1022 3.02544 34.9443 3.51106 35.23 3.78921L36.8191 5.33779L36.4433 7.52535C36.3756 7.92077 36.7921 8.21695 37.1409 8.03202L39.1059 6.99913L41.071 8.03202C41.4198 8.21545 41.8362 7.92077 41.7686 7.52535L41.3927 5.33779L42.9819 3.78921C43.2676 3.51106 43.1097 3.02544 42.7158 2.96831ZM40.6184 5.0852L40.9747 7.16602L39.1059 6.18425L37.2371 7.16602L37.5934 5.0852L36.0809 3.61179L38.1708 3.30809L39.1059 1.41371L40.0411 3.30809L42.1309 3.61179L40.6184 5.0852Z" fill="#D3D3D3"/>
                            <path d="M34.0555 2.96831L31.8589 2.64806L30.8771 0.657458C30.7012 0.302637 30.1916 0.298127 30.0141 0.657458L29.0324 2.64806L26.8358 2.96831C26.4419 3.02544 26.284 3.51106 26.5697 3.78921L28.1589 5.33779L27.783 7.52535C27.7153 7.92077 28.1318 8.21695 28.4806 8.03202L30.4456 6.99913L32.4107 8.03202C32.7595 8.21545 33.176 7.92077 33.1083 7.52535L32.7324 5.33779L34.3216 3.78921C34.6073 3.51106 34.4494 3.02544 34.0555 2.96831ZM31.9581 5.0852L32.3145 7.16602L30.4456 6.18425L28.5768 7.16602L28.9331 5.0852L27.4206 3.61179L29.5105 3.30809L30.4456 1.41371L31.3808 3.30809L33.4706 3.61179L31.9581 5.0852Z" fill="#D3D3D3"/>
                            <path d="M30.0141 0.657458L29.0324 2.64806L26.8358 2.96831C26.4419 3.02544 26.284 3.51106 26.5697 3.78921L28.1589 5.33779L27.783 7.52535C27.7153 7.92077 28.1318 8.21695 28.4806 8.03202L30.4456 6.99913L32.4107 8.03202C32.7595 8.21545 33.176 7.92077 33.1083 7.52535L32.7324 5.33779L34.3216 3.78921C34.6073 3.51106 34.4494 3.02544 34.0555 2.96831L31.8589 2.64806L30.8771 0.657458C30.7012 0.302637 30.1916 0.298127 30.0141 0.657458Z" fill="#E89689"/>
                            <path d="M25.3953 2.96831L23.1988 2.64806L22.217 0.657458C22.0411 0.302637 21.5314 0.298127 21.354 0.657458L20.3722 2.64806L18.1756 2.96831C17.7817 3.02544 17.6239 3.51106 17.9095 3.78921L19.4987 5.33779L19.1228 7.52535C19.0552 7.92077 19.4716 8.21695 19.8204 8.03202L21.7855 6.99913L23.7505 8.03202C24.0993 8.21545 24.5158 7.92077 24.4481 7.52535L24.0723 5.33779L25.6615 3.78921C25.9471 3.51106 25.7893 3.02544 25.3953 2.96831ZM23.298 5.0852L23.6543 7.16602L21.7855 6.18425L19.9167 7.16602L20.273 5.0852L18.7605 3.61179L20.8503 3.30809L21.7855 1.41371L22.7207 3.30809L24.8105 3.61179L23.298 5.0852Z" fill="#D3D3D3"/>
                            <path d="M21.354 0.657458L20.3722 2.64806L18.1756 2.96831C17.7817 3.02544 17.6239 3.51106 17.9095 3.78921L19.4987 5.33779L19.1228 7.52535C19.0552 7.92077 19.4716 8.21695 19.8204 8.03202L21.7855 6.99913L23.7505 8.03202C24.0993 8.21545 24.5158 7.92077 24.4481 7.52535L24.0723 5.33779L25.6615 3.78921C25.9471 3.51106 25.7893 3.02544 25.3953 2.96831L23.1988 2.64806L22.217 0.657458C22.0411 0.302637 21.5314 0.298127 21.354 0.657458Z" fill="#E89689"/>
                            <path d="M16.7353 2.96831L14.5387 2.64806L13.557 0.657458C13.381 0.302637 12.8714 0.298127 12.694 0.657458L11.7122 2.64806L9.5156 2.96831C9.12169 3.02544 8.96382 3.51106 9.24948 3.78921L10.8387 5.33779L10.4628 7.52535C10.3951 7.92077 10.8116 8.21695 11.1604 8.03202L13.1255 6.99913L15.0905 8.03202C15.4393 8.21545 15.8558 7.92077 15.7881 7.52535L15.4122 5.33779L17.0014 3.78921C17.2871 3.51106 17.1292 3.02544 16.7353 2.96831ZM14.638 5.0852L14.9943 7.16602L13.1255 6.18425L11.2566 7.16602L11.613 5.0852L10.1005 3.61179L12.1903 3.30809L13.1255 1.41371L14.0606 3.30809L16.1505 3.61179L14.638 5.0852Z" fill="#D3D3D3"/>
                            <path d="M12.694 0.657458L11.7122 2.64806L9.5156 2.96831C9.12169 3.02544 8.96382 3.51106 9.24948 3.78921L10.8387 5.33779L10.4628 7.52535C10.3951 7.92077 10.8116 8.21695 11.1604 8.03202L13.1255 6.99913L15.0905 8.03202C15.4393 8.21545 15.8558 7.92077 15.7881 7.52535L15.4122 5.33779L17.0014 3.78921C17.2871 3.51106 17.1292 3.02544 16.7353 2.96831L14.5387 2.64806L13.557 0.657458C13.381 0.302637 12.8714 0.298127 12.694 0.657458Z" fill="#E89689"/>
                            <path d="M8.07515 2.96831L5.87857 2.64806L4.89679 0.657458C4.72089 0.302637 4.21121 0.298127 4.0338 0.657458L3.05203 2.64806L0.855442 2.96831C0.46153 3.02544 0.303665 3.51106 0.589326 3.78921L2.1785 5.33779L1.80263 7.52535C1.73498 7.92077 2.15144 8.21695 2.50025 8.03202L4.4653 6.99913L6.43034 8.03202C6.77915 8.21545 7.19561 7.92077 7.12796 7.52535L6.75209 5.33779L8.34126 3.78921C8.62693 3.51106 8.46906 3.02544 8.07515 2.96831ZM5.9778 5.0852L6.33412 7.16602L4.4653 6.18425L2.59647 7.16602L2.9528 5.0852L1.4403 3.61179L3.53013 3.30809L4.4653 1.41371L5.40046 3.30809L7.4903 3.61179L5.9778 5.0852Z" fill="#D3D3D3"/>
                            <path d="M4.0338 0.657458L3.05203 2.64806L0.855442 2.96831C0.46153 3.02544 0.303665 3.51106 0.589326 3.78921L2.1785 5.33779L1.80263 7.52535C1.73498 7.92077 2.15144 8.21695 2.50025 8.03202L4.4653 6.99913L6.43034 8.03202C6.77915 8.21545 7.19561 7.92077 7.12796 7.52535L6.75209 5.33779L8.34126 3.78921C8.62693 3.51106 8.46906 3.02544 8.07515 2.96831L5.87857 2.64806L4.89679 0.657458C4.72089 0.302637 4.21121 0.298127 4.0338 0.657458Z" fill="#E89689"/>
                        </svg>
                    </div>
                   <div>
                        <h2 className='text-[#999999] text-[14px] font-[500] md:text-[18px] lg:text-[12px]'>{cardData?.reviewsCount} reviews</h2>
                    </div>
                </div>}
                { cardData.type === 'category' &&
                <div className='flex justify-center w-full mt-7'>
                    <button className="px-6 py-3 bg-transparent text-[20px] font-[400] uppercase tracking-wider border-[0.01rem] border-nav-pink hover:text-white hover:bg-nav-pink">{cardData.buttonText}</button>
                </div>
                 }
                 
            </div>
        </div>
        }
    </div>

    </>
}

export  {CustomCarousel, CarouselCards};