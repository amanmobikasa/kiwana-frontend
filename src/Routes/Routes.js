// creating the routes for project
import React from 'react'
const LandingPage = React.lazy(() => import('../Pages/LandingPage'));
const ContactPage = React.lazy(()=> import('../Pages/Contactpage'))
const AboutUsPage = React.lazy(()=> import('../Pages/AboutPage'));
const LoginPage = React.lazy(()=> import("../Pages/Login"));
const ProductCollection = React.lazy(()=> import('../Pages/ProductCollection'));
const pagesRoutes = [
    { path: '/', name: 'LandingPage', element: <LandingPage />, exact: true  },
    { path: '/contact-page', name: 'contactPage', element: <ContactPage /> , exact: true  },
    { path : '/about-us', name:"aboutUsPage", element:<AboutUsPage />, exact : true },
    { path : '/login', name:"Login", element:<LoginPage />, exact : true },
    { path : '/collection', name:"ProductCollection", element:<ProductCollection />, exact : true },
]

export default pagesRoutes;
