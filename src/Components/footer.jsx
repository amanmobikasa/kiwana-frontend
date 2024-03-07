import { Footer } from "flowbite-react";
import payment1 from '../Assest/images/payment1 (2).png'
import iconImg from "../Assest/images/icon.png";
import payment2 from '../Assest/images/payment2.png'
import payment3 from '../Assest/images/payment3.png'
import payment4 from '../Assest/images/payment4.png'
import payment5 from '../Assest/images/payment5.png'
import { NavLink } from "react-router-dom";


function FooterComp() {
  return (
    <Footer container className="shadow-none ">
      <div className="w-full">
        <div className="grid w-full justify-between lg:w-full lg:mx-auto lg:flex md:grid-cols-1 lg:py-[1rem] lg:gap-[4rem]">
          <div className="flex justify-center flex-col lg:justify-start lg:w-5/12 lg:mt-[1rem] px-8 lg:-space-y-5">
            <img
              src={iconImg}
              alt="icon"
              className="w-[160px] h-[37px] mx-auto lg:mx-0 lg:object-contain"
            />
            <p className="text-black  text-[12px] md:text-[14px] font-[400] py-[40px] w-[17.3rem] md:w-[22rem] lg:w-full mx-auto text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur. Molestie mauris velit
              congue sed cras leo porttitor.. Lorem ipsum dolor sit amet
              consectetur. Molestie mauris velit congue sed cras l...{" "}
              <a className="text-nav-pink underline underline-offset-4">Read More</a>
            </p>
          </div>
          <div className="grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[2rem] sm:mt-4 sm:grid-cols-3 sm:gap-4 lg:w-6/12">
            {footer_api_data.map((data, i) => {
              return (
                <>
                  <div
                    key={i}
                    className={`${data?.hidden ? "hidden lg:block " : ""} `}
                  >
                    <Footer.Title
                      className="font-[16px] md:text-[20px] text-nav-pink capitalize lg:text-[17px]"
                      title={`${data?.title}`}
                    />
                    <Footer.LinkGroup className="lg:gap-[0px] lg:mt-[1px] lg:space-y-0" col>
                      {data.sub_title.map((sub_title, i) => {
                        return (
                          <Footer.Link as={NavLink}
                            key={i}
                            to={`${sub_title?.link}`}
                            className={`${sub_title?.style} text-[12px] md:text-[16px] lg:text-[12px] `}
                          >
                            {sub_title.name}
                          </Footer.Link>
                        );
                      })}
                    </Footer.LinkGroup>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full lg:w-full  lg:mx-auto space-y-[1rem] lg:space-y-0 lg:flex  lg:justify-between ">
          {/* <Footer.Copyright href="#" by="Flowbite™" year={2022} /> */}
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center lg:w-3/12  ">
            <div className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path
                  d="M5.41077 16.052V8.73045H7.86732L8.23587 5.87628H5.41077V4.0543C5.41077 3.22821 5.63923 2.66524 6.82518 2.66524L8.3353 2.66462V0.111746C8.07415 0.0778082 7.1777 0 6.13433 0C3.95559 0 2.46399 1.32988 2.46399 3.77163V5.87628H0V8.73045H2.46399V16.052H5.41077Z"
                  fill="#E89689"
                />
              </svg>
            </div>
            <div className="icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_950_674)">
                  <path
                    d="M15.9147 15.9129L15.9187 15.9122V10.0762C15.9187 7.22112 15.3041 5.02183 11.9664 5.02183C10.3618 5.02183 9.28504 5.90234 8.84545 6.7371H8.79904V5.28837H5.63437V15.9122H8.92966V10.6517C8.92966 9.26659 9.19222 7.92725 10.9075 7.92725C12.5976 7.92725 12.6228 9.50793 12.6228 10.7405V15.9129H15.9147ZM0.268421 5.28903H3.56769V15.9129H0.268421V5.28903ZM1.91673 0C0.861838 0 0.00585938 0.855979 0.00585938 1.91087C0.00585938 2.96576 0.861838 3.83964 1.91673 3.83964C2.97162 3.83964 3.8276 2.96576 3.8276 1.91087C3.82724 1.40418 3.62581 0.91835 3.26753 0.560068C2.90925 0.201787 2.42341 0.000351256 1.91673 0Z"
                    fill="#E89689"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_950_674">
                    <rect
                      width="15.9129"
                      height="15.9129"
                      fill="white"
                      transform="translate(0.00585938)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.9552 0.757812H4.37764C2.25593 0.757812 0.588867 2.42487 0.588867 4.54659V12.1241C0.588867 14.2458 2.25593 15.9129 4.37764 15.9129H11.9552C14.0769 15.9129 15.744 14.2458 15.744 12.1241V4.54659C15.744 2.42487 14.0769 0.757812 11.9552 0.757812ZM14.2285 12.1241C14.2285 13.4123 13.2434 14.3974 11.9552 14.3974H4.37764C3.08946 14.3974 2.10438 13.4123 2.10438 12.1241V4.54659C2.10438 3.2584 3.08946 2.27332 4.37764 2.27332H11.9552C13.2434 2.27332 14.2285 3.2584 14.2285 4.54659V12.1241Z"
                  fill="#E89689"
                />
                <path
                  d="M8.16573 4.54688C6.04401 4.54688 4.37695 6.21394 4.37695 8.33565C4.37695 10.4574 6.04401 12.1244 8.16573 12.1244C10.2874 12.1244 11.9545 10.4574 11.9545 8.33565C11.9545 6.21394 10.2874 4.54688 8.16573 4.54688ZM8.16573 10.6089C6.87754 10.6089 5.89246 9.62383 5.89246 8.33565C5.89246 7.04747 6.87754 6.06238 8.16573 6.06238C9.45391 6.06238 10.439 7.04747 10.439 8.33565C10.439 9.62383 9.45391 10.6089 8.16573 10.6089Z"
                  fill="#E89689"
                />
                <path
                  d="M11.955 5.30457C12.3735 5.30457 12.7128 4.96531 12.7128 4.54682C12.7128 4.12832 12.3735 3.78906 11.955 3.78906C11.5365 3.78906 11.1973 4.12832 11.1973 4.54682C11.1973 4.96531 11.5365 5.30457 11.955 5.30457Z"
                  fill="#E89689"
                />
              </svg>
            </div>
            <div className="icon4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M20.0001 1.88384C19.2718 2.20332 18.4957 2.41508 17.6866 2.5179C18.519 2.02093 19.1543 1.23998 19.4529 0.298672C18.6769 0.761369 17.82 1.08819 16.9069 1.27058C16.17 0.485954 15.1197 0 13.974 0C11.7511 0 9.96153 1.80427 9.96153 4.01616C9.96153 4.33442 9.98846 4.64043 10.0546 4.93176C6.71653 4.76896 3.76286 3.16911 1.77865 0.731991C1.43224 1.33301 1.22904 2.02093 1.22904 2.76149C1.22904 4.15203 1.94512 5.38466 3.01251 6.09829C2.36742 6.08605 1.73458 5.89877 1.19844 5.60377V5.64784C1.19844 7.599 2.5902 9.21966 4.41529 9.593C4.08846 9.68236 3.73226 9.7252 3.36259 9.7252C3.10554 9.7252 2.84603 9.71051 2.60244 9.65665C3.12267 11.2467 4.5989 12.4157 6.35421 12.4536C4.98815 13.5223 3.25365 14.1661 1.37593 14.1661C1.04666 14.1661 0.730848 14.1514 0.415039 14.111C2.19361 15.258 4.30145 15.9129 6.57454 15.9129C13.963 15.9129 18.0024 9.79253 18.0024 4.48742C18.0024 4.30994 17.9963 4.13857 17.9877 3.96842C18.7846 3.4029 19.4542 2.69662 20.0001 1.88384Z"
                  fill="#E89689"
                />
              </svg>
            </div>
          </div>
          <div className="lg:w-4/12 lg:mx-auto ">
          <p className="text-center text-[12px] text-[#363636]">© Copyright 2023 Kiwana. All Rights Reserved</p>
          </div>
          <div className="payment-div flex w-6/12 lg:w-3/12 lg:justify-center mx-auto gap-[1.3rem] ">
          {
            payment_img.map((data, i)=>{
                return <>
                <div key={i} className="payment object-contain ">
                    <img src={data.image} className="w-fit h-fit" alt="payment" />
                </div>
                </>
            })
          } 
          </div>
        </div>
      </div>
    </Footer>
  );
}

// api for footer

const footer_api_data = [
  {
    id: 1,
    title: "Shop",
    sub_title: [
      {
        name: "Shop All",
        link: "/",
        style: "hover:text-nav-pink hover:underline",
      },
      {
        name: "Face Care",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Hair Care",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Body Care",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Combos",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Best",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Sellers",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
    ],
  },
  {
    id: 2,
    title: "About",
    sub_title: [
      {
        name: "Blogs",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "FAQ",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "Ingredie",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
      {
        name: "nts",
        link: "/",
        style: "hover:text-nav-pink hover:underline",

      },
    ],
  },
  {
    id: 3,
    title: "Account",
    hidden: true,
    sub_title: [
      {
        name: "Manage",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Account",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Saved Items",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Orders & Returns",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
    ],
  },
  {
    id: 4,
    title: "Customer Service",
    sub_title: [
      {
        name: "Contact Us",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Privacy Policy",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Shipping Policy",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
      {
        name: "Terms & Conditions",
        style: "hover:text-nav-pink hover:underline",
        link: "/", 
      },
    ],
  },
];

const payment_img = [
    {
        id : 1,
        image : payment1,

    },
    {
        id : 2,
        image : payment2,
        
    },
    {
        id : 3,
        image : payment3,
        
    },
    {
        id : 4,
        image : payment4,
        
    },
    {
      id : 4,
      image : payment5,
      
  }
]

export default FooterComp;
