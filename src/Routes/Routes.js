// creating the routes for project
import React from 'react'
import { redirect } from 'react-router-dom';

const LandingPage = React.lazy(() => import('../Pages/LandingPage'));
const ContactPage = React.lazy(()=> import('../Pages/Contactpage'))
const AboutUsPage = React.lazy(()=> import('../Pages/AboutPage'));
const LoginPage = React.lazy(()=> import("../Pages/Login"));
const ProductCollection = React.lazy(()=> import('../Pages/ProductCollection'));
const PdpProducts = React.lazy(()=> import('../Pages/PdpofProducts'));
const ProductCartPage = React.lazy(()=> import('../Pages/productCartPage'));
const MyAccount = React.lazy(()=> import('../Pages/MyAccontUser'));
const BlogListingPage = React.lazy(()=> import('../Pages/BlogListingPage'));
const BlogDescriptionPage = React.lazy(()=> import('../Pages/BlogPageDescription'));
const ProductCheckout = React.lazy(()=> import('../Pages/ProductCheckout'));
const Signupcomp = React.lazy(()=> import('../Components/SignUp/Signup'));
// const ProtectedRoutes = React.lazy(()=> import('../ProtectedRoutes/ProtectedRoutes'));
const TimeLineProducts = React.lazy(()=> import('../Pages/TimeLineProducts'));

const USER_TOKEN = sessionStorage.getItem("userLoginToken");

const pagesRoutes = [
    { path: '/', name: 'LandingPage', element: <LandingPage />, exact: true  },
    { path: '/contact-page', name: 'contactPage', element: <ContactPage /> , exact: true  },
    { path : '/about-us', name:"aboutUsPage", element:<AboutUsPage />, exact : true },
    { path : '/login', name:"Login", element:<LoginPage />, exact : true },
    { path : '/collection', name:"ProductCollection", element:<ProductCollection />, exact : true },
    { path : '/pdp-product/:productId', name:"Product Pdp Page", element:<PdpProducts />, exact : true },
    { path : '/cartpage', name:"ProductCartPage", element:<ProductCartPage />, exact : true },
    { path : '/myaccount', name:"UserAccount", element: USER_TOKEN ? <MyAccount /> : <LoginPage /> , exact : true },
    { path : '/blog', name:"BlogListingPage", element:<BlogListingPage />, exact : true },
    { path : '/blogdesc/:id', name:"BlogListingPage", element:<BlogDescriptionPage />, exact : true },
    { path : '/checkout', name:"ProductCheckout", element:<ProductCheckout />, exact : true },
    { path : '/signup', name:"SignUpForm", element:<Signupcomp />, exact : true },
    { path : '/delivery-status', name:"DeliveryStatus", element:<TimeLineProducts />, exact : true },
    { path : '*', name:"Error Page", element:<LoginPage/> },


]

export default pagesRoutes;
