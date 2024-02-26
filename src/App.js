import React, { Suspense, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pagesRoutes from './Routes/Routes';
import NavbarComp from './Components/Navbar/Navbar';
import BannerAlert from './Components/Banner';
import FooterComp from './Components/footer';
import SubscribeBox from './Components/SubscribeBox';
import LandingPage from './Pages/LandingPage';
import { ToastContainer } from 'react-toastify';
import { gapi } from 'gapi-script'
import LoginPage from './Pages/Login';
import MyAccount from './Pages/MyAccontUser';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';




const CLIENT_ID = "826747554533-t0h1gs01tcprer0jt1gl38gqsvso36nf.apps.googleusercontent.com" // for google
// const APP_ID = "1066542067897062"; // for fb Oauth

function App() {
  
  useEffect(()=>{
    function start(){
      gapi.auth2.init({
        clientId: CLIENT_ID,
      })
    }
    gapi.load('client:auth2', start)
  })

  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     window.FB.init({
  //       appId      : APP_ID,
  //       cookie     : true,
  //       xfbml      : true,
  //       version    : 'v19.0'
  //     });
        
  //     window.FB.AppEvents.logPageView();   
        
  //   };
  
  //   (function(d, s, id){
  //      var js, fjs = d.getElementsByTagName(s)[0];
  //      if (d.getElementById(id)) {return;}
  //      js = d.createElement(s); js.id = id;
  //      js.src = "https://connect.facebook.net/en_US/sdk.js";
  //      fjs.parentNode.insertBefore(js, fjs);
  //    }(document, 'script', 'facebook-jssdk'));
  // });


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


/*

x = [1,2,3,4,5];
rs = x.splice(1,3,5,7);
clg : res, x


rs : 
*/


