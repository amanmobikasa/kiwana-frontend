import React, { useEffect, useState } from "react";
import logo from "../../Assest/images/icon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import MegaMenuComp from "./MegaMenu";
import { Navsidebar } from "./Sidebar";
import { globalSearchHook } from "../../Customhooks/globalSearchHook";
import { SearchList } from "./ListGroup";
import {CartSideBar} from "../../common/cartSidebar";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {

  const [globalSearch, setGlobalSearch] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSidebar , setShowSidebar] = useState(false); 
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [showSearchList, setShowSearchList] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [loginDetailsState, setLoginDetailsState] = useState(null);

  const handleGlobalSearch = (event) => {
    try {
      const { name, value } = event.target;
      if(name === "searchQuerry"){
        setGlobalSearch(value);
        const searchResult =  globalSearchHook(value); // sending the search querry 
        if(searchResult.length > 0){
          setSearchResultArray(searchResult);
          setShowSearchList(true); // show the searchList;
        }
        if(value === "" || searchResultArray.length === 0){
          setShowSearchList(false); // hide the searchlist when value is empty
        }
      }

      
    } catch (error) {
      if(error){
        console.error("Global Search Error : ",error)
      }
    }
  } 

  // console.log("searchResultArray : ",searchResultArray) // searching the products using the search custom hook.
  
  const handleCartSideBar = () => {
    setShowCartSidebar(true);
    console.log(showCartSidebar)
  }

  useEffect(()=>{
    const loginDetails = JSON.parse(sessionStorage.getItem("userLogin"));
    // console.log("payment", loginDetails);
    setLoginDetailsState(loginDetails);
  },[]);
  
  console.log("payment", loginDetailsState);


  return (
    <>
   { showMegaMenu ?  <MegaMenuComp setShowMegaMenu={setShowMegaMenu} /> : null}

   { showSidebar ? <Navsidebar setShowSidebar={setShowSidebar} /> : null }

    { showSearchList ? <SearchList searchResultArray = {searchResultArray} setShowSearchList={setShowSearchList}  />  : null}
    
    { showCartSidebar ? <CartSideBar setShowCartSidebar={setShowCartSidebar} showCartSidebar={showCartSidebar}  /> : null }
   
      <nav className="bg-[#FCEBE8] w-full relative overflow-auto h-fit">
        <div className="md:px-[3rem] lg:px-19 px-6  py-4 lg:py-7  flex items-center lg:justify-between justify-between">
        {/* for hamburger */}
        <div onClick={()=> setShowSidebar(true)}  className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
            <path d="M0 1H28M0 9.24242H10.2308H20.4615M0 17H12.2051" stroke="#363636" stroke-width="1.5"/>
          </svg>
        </div>
          <div className="w-fit h-fit object-cover">
            <img src={logo} alt="logo" className="h-auto w-auto " />
          </div>
          <ul className="lg:flex items-center gap-[30px] lg:gap-[33px]  text-[16px] lg:text-[16px] lg:font-[600] text-black hidden">
            <li className="">
              <a href="#" className="font-[600] underline">
                HOME
              </a>
            </li>
            <li  onMouseEnter={()=> setShowMegaMenu(true)} onfo className="">
              <a href="#" className="hover:underline lg:flex items-center">
                SHOP
                <span className="hidden lg:block">
                  <MdKeyboardArrowDown className="text-[18px]" />
                </span>
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline">
                BESTSELLER
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline">
                PAGES
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline">
                BLOGS
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="relative hidden lg:block">
            <input
              name="searchQuerry"
              value={globalSearch}
              onChange={handleGlobalSearch}
              type="text"
              className="w-[330px] text-[#333] py-3 bg-transparent border-nav-pink pl-11 placeholder:text-[#36363680]"
              placeholder="Search"
            />
            <button className="absolute left-[1rem] top-[50%] translate-y-[-50%] ">
              <svg
                className="text-[#363636]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.8305 17.1543L14.3518 13.6756C15.4337 12.4443 16.0937 10.8193 16.0937 9.03997C16.0937 5.15184 12.9418 1.99997 9.05367 1.99997C5.16555 1.99997 2.01367 5.15184 2.01367 9.03997C2.01367 12.9281 5.16555 16.08 9.05367 16.08C10.8324 16.08 12.4574 15.42 13.6968 14.3318L13.6887 14.3387L17.1674 17.8175C17.2524 17.9025 17.3693 17.955 17.4987 17.955C17.7574 17.955 17.9674 17.745 17.9674 17.4862C17.9674 17.3568 17.9149 17.2393 17.8299 17.155L17.8305 17.1543ZM2.96867 9.04809C2.96867 5.68247 5.6968 2.95434 9.06242 2.95434C12.428 2.95434 15.1562 5.68247 15.1562 9.04809C15.1562 12.4137 12.428 15.1418 9.06242 15.1418C5.69867 15.1381 2.97242 12.4112 2.96867 9.04809Z"
                  fill="#363636"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center md:gap-[2rem] gap-5 pt-2  pr-3">
            <div className="relative lg:block hidden">
            {/* render the image here */}
            { loginDetailsState !== null ? <div className="h-[2rem] w-[2rem] rounded-full ">
             <NavLink to={"/myaccount"}><img src={loginDetailsState?.imageUrl} className="rounded-full object-cover" alt="" /></NavLink>
            </div> : 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M22.4464 21.2951C20.7489 18.4094 18.0443 16.2709 14.826 15.3451L14.7341 15.3224C17.2401 14.03 18.9236 11.4592 18.9236 8.49561C18.9236 4.26761 15.4954 0.839355 11.2674 0.839355C7.03938 0.839355 3.61112 4.26761 3.61112 8.49561C3.61112 11.4592 5.29463 14.0291 7.75775 15.3022L7.80062 15.3224C4.4905 16.27 1.78588 18.4094 0.121625 21.2339L0.0883751 21.2942C0.0332501 21.3887 0 21.5016 0 21.6232C0 21.9855 0.294 22.2795 0.65625 22.2795C0.89775 22.2795 1.10863 22.1491 1.22238 21.9549L1.22412 21.9514C3.26725 18.4619 6.99737 16.1554 11.2665 16.1554C15.5356 16.1554 19.2666 18.4619 21.2791 21.8971L21.3089 21.9522C21.4244 22.1491 21.6353 22.2795 21.8768 22.2795C22.239 22.2795 22.533 21.9855 22.533 21.6232C22.533 21.5025 22.5006 21.3887 22.4429 21.2916L22.4446 21.2951H22.4464ZM4.92362 8.49998C4.92362 4.99648 7.76387 2.15623 11.2674 2.15623C14.7709 2.15623 17.6111 4.99648 17.6111 8.49998C17.6111 12.0035 14.7709 14.8437 11.2674 14.8437C7.76562 14.8394 4.928 12.0017 4.92362 8.49998Z"
                  fill="#363636"
                />
              </svg>
            }
                
            </div>
            <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 22 22" fill="none">
            <path d="M20.8284 19.9964L16.4674 15.6357C17.8236 14.0923 18.651 12.0553 18.651 9.82482C18.651 4.95096 14.6998 1 9.82551 1C4.95127 1 1 4.95096 1 9.82482C1 14.6987 4.95127 18.6496 9.82551 18.6496C12.0554 18.6496 14.0925 17.8223 15.6462 16.4583L15.6361 16.4669L19.9971 20.8276C20.1037 20.9342 20.2502 21 20.4124 21C20.7367 21 21 20.7368 21 20.4124C21 20.2502 20.9342 20.1029 20.8276 19.9972L20.8284 19.9964ZM2.19721 9.835C2.19721 5.61611 5.61725 2.19633 9.83648 2.19633C14.0557 2.19633 17.4757 5.61611 17.4757 9.835C17.4757 14.0539 14.0557 17.4737 9.83648 17.4737C5.6196 17.469 2.20191 14.0508 2.19721 9.835Z" fill="#363636" stroke="#363636" stroke-width="0.2"/>
            </svg>
              <div className="absolute -top-3 hidden lg:visible -right-3 lg:flex justify-center items-center h-5 w-5 rounded-full bg-nav-pink">
                <span className="text-white text-[8px]">3</span>
              </div>
            </div>
            <div onClick={handleCartSideBar} className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 23 20"
                fill="none"
              >
                <path
                  d="M20.8926 0.59375H1.64258C0.797328 0.594625 0.112203 1.27975 0.111328 2.125V17.875C0.112203 18.7202 0.797328 19.4054 1.64258 19.4062H20.8926C21.7378 19.4054 22.423 18.7202 22.4238 17.875V2.125C22.423 1.27975 21.7378 0.594625 20.8926 0.59375ZM1.64258 1.90625H20.8926C21.0133 1.90625 21.1113 2.00425 21.1113 2.125V4.09375H1.42383V2.125C1.42383 2.00425 1.52183 1.90625 1.64258 1.90625ZM20.8926 18.0938H1.64258C1.52183 18.0938 1.42383 17.9958 1.42383 17.875V5.40625H21.1113V17.875C21.1113 17.9958 21.0133 18.0938 20.8926 18.0938ZM16.2988 8.25C16.2988 11.029 14.0466 13.2812 11.2676 13.2812C8.48858 13.2812 6.23633 11.029 6.23633 8.25C6.23633 7.88775 6.53033 7.59375 6.89258 7.59375C7.25483 7.59375 7.54883 7.88775 7.54883 8.25C7.54883 10.3036 9.21395 11.9688 11.2676 11.9688C13.3212 11.9688 14.9863 10.3036 14.9863 8.25C14.9863 7.88775 15.2803 7.59375 15.6426 7.59375C16.0048 7.59375 16.2988 7.88775 16.2988 8.25Z"
                  fill="#363636"
                />  
              </svg>
              <div className="absolute -top-3 -right-3 flex justify-center items-center h-5 w-5 rounded-full bg-nav-pink">
                <span className="text-white text-[8px]">2</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComp;
