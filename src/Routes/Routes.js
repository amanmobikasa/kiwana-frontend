// creating the routes for project
import React from 'react'
// import MyAccount from '../Pages/MyAccontUser';
// import ProductCartPage from '../Pages/productCartPage';
// import PdpProducts from '../Pages/PdpofProducts';
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

const pagesRoutes = [
    { path: '/', name: 'LandingPage', element: <LandingPage />, exact: true  },
    { path: '/contact-page', name: 'contactPage', element: <ContactPage /> , exact: true  },
    { path : '/about-us', name:"aboutUsPage", element:<AboutUsPage />, exact : true },
    { path : '/login', name:"Login", element:<LoginPage />, exact : true },
    { path : '/collection', name:"ProductCollection", element:<ProductCollection />, exact : true },
    { path : '/pdp-product/:productId', name:"Product Pdp Page", element:<PdpProducts />, exact : true },
    { path : '/cartpage', name:"ProductCartPage", element:<ProductCartPage />, exact : true },
    { path : '/myaccount', name:"UserAccount", element:<MyAccount />, exact : true },
    { path : '/blog', name:"BlogListingPage", element:<BlogListingPage />, exact : true },
    { path : '/blogdesc/:id', name:"BlogListingPage", element:<BlogDescriptionPage />, exact : true },



]

export default pagesRoutes;
