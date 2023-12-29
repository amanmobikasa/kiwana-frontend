
import { Sidebar } from 'flowbite-react';
import { GoPlus } from "react-icons/go";
import logo from '../../Assest/images/icon.png';
import { RxCaretRight, RxCross1 } from "react-icons/rx";
import {motion} from 'framer-motion'

function Navsidebar() {

  return <>
    <motion.div initial={{x : -100}} animate={{x: 0, transition : { duration : 2, ease: 'easeInOut' }}} className='absolute top-0 left-0 bg-black bg-opacity-70 z-50' >
        <Sidebar  className='bg-white overflow-auto opacity-0' aria-label="Sidebar with multi-level dropdown example">
        <div className='w-full bg-nav-pink h-[10rem]  px-[1rem] relative'>
        <div className='flex items-center w-full'>
            <img src={logo} alt='logo' className='h-fit w-fit' />
        </div>
        <div className='absolute top-[1rem] right-[1rem] bg-[#FFF7F3] rounded-full h-[1.8rem] w-[1.8rem] flex justify-center items-center  z-10'>
            <RxCross1 className='text-sm'/>
        </div>
        </div>
        <Sidebar.Items className='w-full h-auto'>
            <Sidebar.ItemGroup className='border-b-[0.01rem] border-nav-pink w-full'>
                <SidebarComponent data={Navsidebar_api} />
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </motion.div>
  </>
}

const SidebarComponent  = ({data}) => {
    return <>
         <Sidebar.Collapse label={data.sidebarTitle}>
      {data.map((item) => (
        <SidebarItem key={item.sidebarTitle} item={item} />
      ))}
    </Sidebar.Collapse>
    </>
}


const SidebarItem = ({item}) => {
    const { sidebarTitle, url, children, icon } = item;

    return <>
    <Sidebar.Item href={url}>
      <a href={url}>
        {icon && icon} {/* Render the icon if available */}
        {sidebarTitle}
      </a>
      {children && (
        <ul>
          {children.map((childItem) => (
            <SidebarItem key={childItem.sidebarTitle} item={childItem} />
          ))}
        </ul>
      )}
    </Sidebar.Item>

    </>
}

export {Navsidebar};

const Navsidebar_api = [
    {
        id : 1,
        sidebarTitle : "HOME",
        url : "/",
        children : [
            {
                sidebarTitle : "Hair Care",
                url : "/",
                children : [
                    {
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 3",
                        url : '/'
                    },

                ]
            },
            {
                sidebarTitle : "Body Care",
                url : "/",
                children : [
                    {
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 3",
                        url : '/'
                    },

                ]
            },
            {
                sidebarTitle : "Face Care",
                url : "/",
                children : [
                    {
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        sidebarTitle : "option 3",
                        url : '/'
                    },

                ]
            },
        ]

    },
    {
        id : 2,
        sidebarTitle : "SHOP",
        url : "/",
        children : [
            {
                sidebarTitle : "Hair Care",
                url : "/",
            },
            {
                sidebarTitle : "Body Care",
                url : "/",
            },
            {
                sidebarTitle : "Face Care",
                url : "/",
            },
        ]

    },
    {
        id : 3,
        sidebarTitle : "SHOP",
        url : "/",
        children : [
            {
                sidebarTitle : "Hair Care",
                url : "/",
            },
            {
                sidebarTitle : "Body Care",
                url : "/",
            },
            {
                sidebarTitle : "Face Care",
                url : "/",
            },
        ]

    },
    {
        id : 4,
        sidebarTitle : "SHOP",
        url : "/",
        children : [
            {
                sidebarTitle : "Hair Care",
                url : "/",
            },
            {
                sidebarTitle : "Body Care",
                url : "/",
            },
            {
                sidebarTitle : "Face Care",
                url : "/",
            },
        ]

    },
    {
        id : 5,
        sidebarTitle : "SHOP",
        url : "/",
        children : [
            {
                sidebarTitle : "Hair Care",
                url : "/",
            },
            {
                sidebarTitle : "Body Care",
                url : "/",
            },
            {
                sidebarTitle : "Face Care",
                url : "/",
            },
        ]

    },
    {
        id : 6,
        sidebarTitle : "CONTACT",
        url : "/contact",

    },
    {
        id : 7,
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M16.9346 15.2654C15.654 13.1119 13.6135 11.516 11.1855 10.8251L11.1161 10.8081C13.0068 9.84369 14.2769 7.92523 14.2769 5.71359C14.2769 2.55838 11.6905 0 8.50066 0C5.31085 0 2.72441 2.55838 2.72441 5.71359C2.72441 7.92523 3.99452 9.84304 5.85283 10.7931L5.88517 10.8081C3.38785 11.5153 1.34735 13.1119 0.09176 15.2197L0.0666745 15.2647C0.0250855 15.3353 0 15.4195 0 15.5103C0 15.7806 0.221808 16 0.495107 16C0.677307 16 0.836401 15.9027 0.92222 15.7577L0.92354 15.7551C2.46497 13.151 5.27916 11.4298 8.5 11.4298C11.7208 11.4298 14.5357 13.151 16.054 15.7147L16.0765 15.7558C16.1636 15.9027 16.3227 16 16.5049 16C16.7782 16 17 15.7806 17 15.5103C17 15.4202 16.9756 15.3353 16.932 15.2628L16.9333 15.2654H16.9346ZM3.71462 5.71685C3.71462 3.10231 5.85745 0.982737 8.50066 0.982737C11.1439 0.982737 13.2867 3.10231 13.2867 5.71685C13.2867 8.33139 11.1439 10.451 8.50066 10.451C5.85877 10.4477 3.71792 8.33008 3.71462 5.71685Z" fill="#363636"/>
        </svg>,
        sidebarTitle : "SHOP",
        url : "/",
    },
]

{/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse> */}