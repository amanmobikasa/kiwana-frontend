import React, { Suspense } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pagesRoutes from './Routes/Routes';
import NavbarComp from './Components/Navbar/Navbar';
import BannerAlert from './Components/Banner';
// import { NewsletterPopup } from './Components/NewsletterPopup/NewsletterPopup';
import FooterComp from './Components/footer';
import SubscribeBox from './Components/SubscribeBox';
import LandingPage from './Pages/LandingPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return <>
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <ToastContainer 
    />
    <BannerAlert />
    <NavbarComp />
    <Routes>
    {pagesRoutes.map((route, index) => (
            <Route
              key={index}
              exact={route?.exact}
              path={route.path}
              element={route.element}
            />
    ))}
    </Routes>
    <SubscribeBox />
    <FooterComp />
    </Suspense>
  </BrowserRouter>
 
  </>
}

export default App;
