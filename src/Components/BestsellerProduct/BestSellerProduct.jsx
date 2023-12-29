import React from 'react'
import productOne from '../../Assest/images/product_1.png';
import limited_offer from '../../Assest/images/limited_offer.png'
const BestSellerProducts = () => {
    return <>
    <section className='bg-[#FCEBE8] w-auto h-fit lg:h-auto relative py-[3rem] lg:flex '>
        <div className='relative h-fit w-full lg:w-6/12  bg-red-500'>
            <img src={productOne} alt='product_one' className='w-full lg:w-full lg:h-[40rem] lg:object-cover h-auto'/>
            <div className='limited-offer absolute -top-14 left-8 md:-top-14 md:left-18'>
            <div className='relative w-fit h-fit'>
                <img src={limited_offer} alt='limited_offer'  className='h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] relative z-0'/>
                <h5 className='uppercase text-white -rotate-45 absolute top-6 md:top-10 md:w-[6rem] md:mx-auto text-[0.90rem] md:text-[1rem]  left-8 md:left-11 z-10 '>limited <span className='text-center'>offer</span></h5>
            </div>
                
            </div>
        </div>
        <div id='special_offer_card' className=' lg:w-7/12 lg:absolute lg:right-0 lg:top-[6rem] bg-pink-500'>
            <SpecialOfferCard />
        </div>
    </section>
    </>
}

const SpecialOfferCard = () =>{
    return <>
        <div className='bg-white w-11/12 md:w-10/12 lg:w-full h-[35rem] mx-auto -mt-[4rem] md:-mt-[7rem] lg:mt-0 shadow-lg drop-shadow-md relative'>
            <div className='px-[30px] py-[44px] lg:px-[50px] lg:space-y-5'>
                <div className='special_offer flex justify-start gap-4 items-center'>
                    <p className='text-black text-[12px] font-[400] tracking-wider uppercase md:text-[16px]'>Special Offer</p>
                    <button className='px-2 py-1 text-sm  bg-[#E89689] text-white md:px-3 md:py-1 md:text-lg'>-20%</button>
                </div>
                <div className='title text-start mt-[19px] lg:mt-[10px] lg:space-y-3'>
                    <h1 className='text-[25px] md:text-[30px] lg:text-[35px]  font-playfair text-black font-[500] overflow-hidden'>Ultra Brightening Face Serum</h1>
                    <p className='text-[18px] md:text-[22px]  font-[400] '>$272 <strike className="text-gray-300 ml-2 text-[14px] md:text-[18px]">$340</strike> </p>
                </div>
                {/* rating for it */}
                <div className='flex items-center justify-start gap-3 mt-[30px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='' width="101" height="20" viewBox="0 0 101 20" fill="none">
                            <path className='text-2xl' d="M9.62914 16.2596L14.1058 19.1519C14.6832 19.5225 15.3938 18.9712 15.225 18.2933L13.9282 13.1051C13.8931 12.9613 13.8987 12.8104 13.9443 12.6696C13.9898 12.5289 14.0736 12.4042 14.1858 12.3097L18.2006 8.90221C18.7246 8.45932 18.4582 7.5645 17.7742 7.51931L12.5337 7.17584C12.3907 7.16738 12.2532 7.11671 12.138 7.03003C12.0229 6.94335 11.9351 6.82442 11.8853 6.68776L9.93114 1.6804C9.87941 1.53569 9.78518 1.41069 9.66123 1.32236C9.53729 1.23403 9.38963 1.18665 9.23831 1.18665C9.087 1.18665 8.93934 1.23403 8.8154 1.32236C8.69145 1.41069 8.59722 1.53569 8.54549 1.6804L6.59138 6.68776C6.54158 6.82442 6.45373 6.94335 6.33858 7.03003C6.22343 7.11671 6.08596 7.16738 5.94297 7.17584L0.702394 7.51931C0.0184547 7.5645 -0.248015 8.45932 0.276042 8.90221L4.29086 12.3097C4.40307 12.4042 4.48679 12.5289 4.53236 12.6696C4.57793 12.8104 4.58351 12.9613 4.54844 13.1051L3.34933 17.9137C3.14504 18.7271 3.99774 19.3869 4.68168 18.944L8.84749 16.2596C8.96431 16.184 9.09988 16.1439 9.23831 16.1439C9.37675 16.1439 9.51232 16.184 9.62914 16.2596Z" fill="#E89689"/>
                            <path d="M30.1594 16.2596L34.6361 19.1519C35.2135 19.5225 35.924 18.9712 35.7553 18.2933L34.4585 13.1051C34.4234 12.9613 34.429 12.8104 34.4745 12.6696C34.5201 12.5289 34.6038 12.4042 34.716 12.3097L38.7309 8.90221C39.2549 8.45932 38.9884 7.5645 38.3045 7.51931L33.0639 7.17584C32.9209 7.16738 32.7835 7.11671 32.6683 7.03003C32.5532 6.94335 32.4653 6.82442 32.4155 6.68776L30.4614 1.6804C30.4097 1.53569 30.3155 1.41069 30.1915 1.32236C30.0676 1.23403 29.9199 1.18665 29.7686 1.18665C29.6173 1.18665 29.4696 1.23403 29.3457 1.32236C29.2217 1.41069 29.1275 1.53569 29.0758 1.6804L27.1217 6.68776C27.0719 6.82442 26.984 6.94335 26.8689 7.03003C26.7537 7.11671 26.6162 7.16738 26.4732 7.17584L21.2327 7.51931C20.5487 7.5645 20.2823 8.45932 20.8063 8.90221L24.8211 12.3097C24.9333 12.4042 25.0171 12.5289 25.0626 12.6696C25.1082 12.8104 25.1138 12.9613 25.0787 13.1051L23.8796 17.9137C23.6753 18.7271 24.528 19.3869 25.212 18.944L29.3778 16.2596C29.4946 16.184 29.6302 16.1439 29.7686 16.1439C29.907 16.1439 30.0426 16.184 30.1594 16.2596Z" fill="#E89689"/>
                            <path d="M50.6877 16.2596L55.1644 19.1519C55.7418 19.5225 56.4524 18.9712 56.2836 18.2933L54.9868 13.1051C54.9517 12.9613 54.9573 12.8104 55.0029 12.6696C55.0484 12.5289 55.1322 12.4042 55.2444 12.3097L59.2592 8.90221C59.7832 8.45932 59.5168 7.5645 58.8328 7.51931L53.5923 7.17584C53.4493 7.16738 53.3118 7.11671 53.1966 7.03003C53.0815 6.94335 52.9936 6.82442 52.9438 6.68776L50.9897 1.6804C50.938 1.53569 50.8438 1.41069 50.7198 1.32236C50.5959 1.23403 50.4482 1.18665 50.2969 1.18665C50.1456 1.18665 49.9979 1.23403 49.874 1.32236C49.75 1.41069 49.6558 1.53569 49.6041 1.6804L47.65 6.68776C47.6002 6.82442 47.5123 6.94335 47.3972 7.03003C47.282 7.11671 47.1446 7.16738 47.0016 7.17584L41.761 7.51931C41.077 7.5645 40.8106 8.45932 41.3346 8.90221L45.3495 12.3097C45.4617 12.4042 45.5454 12.5289 45.591 12.6696C45.6365 12.8104 45.6421 12.9613 45.607 13.1051L44.4079 17.9137C44.2036 18.7271 45.0563 19.3869 45.7403 18.944L49.9061 16.2596C50.0229 16.184 50.1585 16.1439 50.2969 16.1439C50.4353 16.1439 50.5709 16.184 50.6877 16.2596Z" fill="#E89689"/>
                            <path d="M71.218 16.2596L75.6947 19.1519C76.2721 19.5225 76.9826 18.9712 76.8139 18.2933L75.5171 13.1051C75.482 12.9613 75.4876 12.8104 75.5331 12.6696C75.5787 12.5289 75.6624 12.4042 75.7746 12.3097L79.7895 8.90221C80.3135 8.45932 80.047 7.5645 79.3631 7.51931L74.1225 7.17584C73.9795 7.16738 73.8421 7.11671 73.7269 7.03003C73.6118 6.94335 73.5239 6.82442 73.4741 6.68776L71.52 1.6804C71.4683 1.53569 71.374 1.41069 71.2501 1.32236C71.1262 1.23403 70.9785 1.18665 70.8272 1.18665C70.6759 1.18665 70.5282 1.23403 70.4043 1.32236C70.2803 1.41069 70.1861 1.53569 70.1344 1.6804L68.1802 6.68776C68.1304 6.82442 68.0426 6.94335 67.9274 7.03003C67.8123 7.11671 67.6748 7.16738 67.5318 7.17584L62.2913 7.51931C61.6073 7.5645 61.3409 8.45932 61.8649 8.90221L65.8797 12.3097C65.9919 12.4042 66.0757 12.5289 66.1212 12.6696C66.1668 12.8104 66.1724 12.9613 66.1373 13.1051L64.9382 17.9137C64.7339 18.7271 65.5866 19.3869 66.2705 18.944L70.4364 16.2596C70.5532 16.184 70.6887 16.1439 70.8272 16.1439C70.9656 16.1439 71.1012 16.184 71.218 16.2596Z" fill="#E89689"/>
                            <path d="M91.7473 16.2596L96.224 19.1519C96.8013 19.5225 97.5119 18.9712 97.3432 18.2933L96.0464 13.1051C96.0113 12.9613 96.0169 12.8104 96.0624 12.6696C96.108 12.5289 96.1917 12.4042 96.3039 12.3097L100.319 8.90221C100.843 8.45932 100.576 7.5645 99.8924 7.51931L94.6518 7.17584C94.5088 7.16738 94.3714 7.11671 94.2562 7.03003C94.1411 6.94335 94.0532 6.82442 94.0034 6.68776L92.0493 1.6804C91.9976 1.53569 91.9033 1.41069 91.7794 1.32236C91.6555 1.23403 91.5078 1.18665 91.3565 1.18665C91.2052 1.18665 91.0575 1.23403 90.9336 1.32236C90.8096 1.41069 90.7154 1.53569 90.6637 1.6804L88.7095 6.68776C88.6597 6.82442 88.5719 6.94335 88.4567 7.03003C88.3416 7.11671 88.2041 7.16738 88.0611 7.17584L82.8206 7.51931C82.1366 7.5645 81.8701 8.45932 82.3942 8.90221L86.409 12.3097C86.5212 12.4042 86.605 12.5289 86.6505 12.6696C86.6961 12.8104 86.7017 12.9613 86.6666 13.1051L85.4675 17.9137C85.2632 18.7271 86.1159 19.3869 86.7998 18.944L90.9657 16.2596C91.0825 16.184 91.218 16.1439 91.3565 16.1439C91.4949 16.1439 91.6305 16.184 91.7473 16.2596Z" stroke="#E89689" stroke-width="0.828804" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-black text-[14px] md:text-[18px] font-[300] mt-1">(212)</p>
                </div>
                {/* radio buttons */}
                <div className={`radio_buttons flex flex-col  space-y-4 flex-wrap h-[7rem] lg:h-[5rem]  mt-[1.5rem]   justify-start items-start`}>
                {
                    products_choice_radio.map((data, i)=>{
                        return <>
                        <label key={i} className='space-x-2 md:space-x-3 ' htmlFor={data.name} >
                            <input type='radio' value="" name={data.name} className='bg-[#FCEBE8] border-nav-pink'/>
                            <span className='font-poppins text-black text-[12px] md:text-[16px]  font-[400]'>{data.label}</span>
                        </label>
                        </>
                    })
                }  
                </div>
                {/* timer */}
                <div className='flex items-center justify-center lg:justify-start mt-4 text-center '>
                    <p className='text-4xl md:text-6xl font-[400] text-gray-400 text-[48px] leading-8'>
                        <p className='space-x-0'><span>01</span> : <span>02</span> : <span>12</span> : <span>09</span></p>
                        <p className='text-[13px] md:text-[16px] font-[300] tracking-wider flex space-x-9 md:space-x-12'>
                            <span>DAYS</span>
                            <span>HOURS</span>
                            <span>MINUTES</span>
                            <span>SECONDS</span>
                        </p>
                    </p>
                </div>
                <div className='mt-[1rem] lg:w-6/12'>
                    <button className='bg-[#E89689] text-white tracking-wider font-[400] text-[14px] md:text-[18px] md:tracking-widest uppercase w-full py-3 hover:bg-white hover:text-nav-pink hover:border-nav-pink border-[0.02rem] '>BUY NOW</button>
                </div>
            </div>
        </div>
    </>
} 

const products_choice_radio = [
    {
        id : 1,
        label : "Saffron",
        name : "saffron",
    },
    {
        id : 2,
        label : "Vitamin C",
        name : "vitamin c",
    },
    {
        id : 3,
        label : "Ferulic Acid",
        name : "ferulic acid",
    },
    {
        id : 4,
        label : "Hyaluronic Acid",
        name : "hyaluronic acid",
    },
    {
        id : 5,
        label : "Vitamin E",
        name : "vitamin e",
    },
]

export default BestSellerProducts;