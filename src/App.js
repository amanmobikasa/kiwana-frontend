import { Button } from 'flowbite-react';
import './App.css';
import FooterComp from './Components/footer';
import SubscribeBox from './Components/SubscribeBox';
import BannerAlert from './Components/Banner';
import NavbarComp from './Components/Navbar/Navbar';

function App() {
  return <>
  <NavbarComp />
  <BannerAlert />
  <SubscribeBox />
  <FooterComp/>

  </>
}

export default App;
