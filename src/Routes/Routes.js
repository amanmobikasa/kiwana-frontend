// creating the routes for project
import React from 'react'
// import ProductCartPage from '../Pages/productCartPage';
// import PdpProducts from '../Pages/PdpofProducts';
const LandingPage = React.lazy(() => import('../Pages/LandingPage'));
const ContactPage = React.lazy(()=> import('../Pages/Contactpage'))
const AboutUsPage = React.lazy(()=> import('../Pages/AboutPage'));
const LoginPage = React.lazy(()=> import("../Pages/Login"));
const ProductCollection = React.lazy(()=> import('../Pages/ProductCollection'));
const PdpProducts = React.lazy(()=> import('../Pages/PdpofProducts'));
const ProductCartPage = React.lazy(()=> import('../Pages/productCartPage'));

const pagesRoutes = [
    { path: '/', name: 'LandingPage', element: <LandingPage />, exact: true  },
    { path: '/contact-page', name: 'contactPage', element: <ContactPage /> , exact: true  },
    { path : '/about-us', name:"aboutUsPage", element:<AboutUsPage />, exact : true },
    { path : '/login', name:"Login", element:<LoginPage />, exact : true },
    { path : '/collection', name:"ProductCollection", element:<ProductCollection />, exact : true },
    { path : 'collection/pdp-product/:productId', name:"Product Pdp Page", element:<PdpProducts />, exact : true },
    { path : '/cartpage', name:"ProductCartPage", element:<ProductCartPage />, exact : true },

]

export default pagesRoutes;
