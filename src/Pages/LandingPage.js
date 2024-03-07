import React, { useEffect } from 'react'
import { scrollTop } from '../common/scrollTop';


// importing lazy loading components.
const BannerAlert = React.lazy(() => import('../Components/Banner'));
const NavbarComp = React.lazy(() => import('../Components/Navbar/Navbar'));
const LandingComponent = React.lazy(() => import('../Components/LandingComponent/LandingComponent'));
const ShopCategories = React.lazy(() => import('../Components/ShopCategories/ShopCategories'));
const BestSellerProduct = React.lazy(() => import('../Components/BestsellerProduct/BestSellerProduct'));
const FeaturedCollection = React.lazy(() => import('../Components/FeaturedCollection/FeaturedCollectons'));
const ProductShopNow = React.lazy(() => import('../Components/productShopNow/ProductShopNow'));
const NewArrivalsProducts = React.lazy(() => import('../Components/NewArrivals/NewArrivals'));
const DiscountComp = React.lazy(() => import('../Components/DiscountComp/DiscountComp'));
const WhyTrustUs = React.lazy(() => import('../Components/whyTrustUs/whyTrustus'));
const LastestNews = React.lazy(() => import('../Components/LatestNews/LatestNews'));
const SubscribeBox = React.lazy(() => import('../Components/SubscribeBox'));
const FooterComp = React.lazy(() => import('../Components/footer'));
const Testimonials = React.lazy(() => import('../Components/Testimonials/Testimonials'));
const NewsletterPopup = React.lazy(() => import('../Components/NewsletterPopup/NewsletterPopup'));
const DiscountCompMobile = React.lazy(()=> import('../Components/DiscountComp/DiscountCompMobile'));
const LandingCarousel = React.lazy(()=> import('../Components/LandingComponent/LandingCrousel'));

const LandingPage = () => {

    useEffect(()=>{
        scrollTop(0, "smooth");
    },[])

    return <>
        <div id='LandingHomePage' className=''>
            <NewsletterPopup />
            {/* <LandingComponent /> */}
            <LandingCarousel />
            <ShopCategories />
            <div className='lg:-mt-[2.5rem]  lg:space-y-[2rem] space-y-[3rem]'>
                <div className='w-full h-fit text-center pt-5'>
                    <h1 className='lg:text-[43px] text-[30px] font-[500] font-playfair text-[#333] '>Bestseller Products</h1>
                </div>
                <div id='bestseller'>
                    <BestSellerProduct />
                </div>
            </div>
            <FeaturedCollection />
            <ProductShopNow />
            <NewArrivalsProducts />
            <div>
                <div className='hidden lg:block'>
                    <DiscountComp />
                </div>
                <div className='lg:hidden'>
                    <DiscountCompMobile />
                </div>

            </div>
            <WhyTrustUs />
            <Testimonials/>
            <LastestNews />
        </div>
    
    </>
}
export default LandingPage;