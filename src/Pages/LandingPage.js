import React from 'react'
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

const LandingPage = () => {
    return <>
        <div id='LandingHomePage' className=''>
            <NewsletterPopup />
            <LandingComponent />
            <ShopCategories />
            <BestSellerProduct />
            <FeaturedCollection />
            <ProductShopNow />
            <NewArrivalsProducts />
            <DiscountComp />
            <WhyTrustUs />
            <LastestNews />
        </div>
    
    </>
}
export default LandingPage;