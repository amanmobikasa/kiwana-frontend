import { Button } from 'flowbite-react';
import './App.css';
import FooterComp from './Components/footer';
import SubscribeBox from './Components/SubscribeBox';
import BannerAlert from './Components/Banner';
import NavbarComp from './Components/Navbar/Navbar';
import LandingHome from './Components/LandingHome/LandingHome';
import BestSellerProducts from './Components/BestsellerProduct/BestSellerProduct';
import ProductShopNow from './Components/productShopNow/ProductShopNow';
import DiscountComp from './Components/DiscountComp/DiscountComp';
import WhyTrustUs from './Components/whyTrustUs/whyTrustus';
import Testimonials from './Components/Testimonials/Testimonials';
import LastestNews from './Components/LatestNews/LatestNews';
import {NewArrivalsProducts} from './Components/NewArrivals/NewArrivals';
import { FeaturedCollection } from './Components/FeaturedCollection/FeaturedCollectons';
import { ShopCategory } from './Components/ShopCategories/ShopCategories';
import { NewsletterPopup } from './Components/NewsletterPopup/NewsletterPopup';
import { Navsidebar } from './Components/Navbar/Sidebar';
import LandingComponent from './Components/LandingComponent/LandingComponent';

function App() {
  return <>
 
  <NewsletterPopup/>
  
  <NavbarComp />
  {/* <Navsidebar/> */}
  
  <BannerAlert />
  {/* <LandingHome/> */}
  <LandingComponent />
  <ShopCategory />
  <BestSellerProducts />
  <FeaturedCollection />
  <ProductShopNow />
  <NewArrivalsProducts/>
  <DiscountComp/>
  <WhyTrustUs />
  <LastestNews/>
  <SubscribeBox />
  <FooterComp/>

  {/* 

 
  <Testimonials/>
 
  
  
   */}

  
  

  </>
}

export default App;
