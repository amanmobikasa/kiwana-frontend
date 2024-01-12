
import { Sidebar } from 'flowbite-react';
import { GoPlus } from "react-icons/go";
import logo from '../../Assest/images/icon.png';
import { RxCaretRight, RxCross1 } from "react-icons/rx";
import {calcLength, motion} from 'framer-motion'
import { AiOutlineUser } from "react-icons/ai";
import mobileMenu from '../../Assest/images/megaMenuimg.png';

function Navsidebar({setShowSidebar}) {

  return <>
    <motion.div initial={{x : -100}} animate={{x: 0, transition : { duration : 1, ease: 'easeInOut' }}} className='absolute top-0 left-0 bg-[#fff]  z-10 w-[95%] h-[100vh] overflow-auto scroll-smooth' >
    <div>
        <div className='w-full h-[10rem]  px-[1rem] relative bg-[#FCEBE8]'>
            <div className='flex items-center w-full h-full'>
                <img src={logo} alt='logo' className='h-[3.5rem] w-6/12' />
            </div>
            <div onClick={()=> setShowSidebar(false)} className='absolute top-[1rem] right-[1rem] bg-[#FFF7F3] rounded-full h-[2.5rem] w-[2.5rem] flex justify-center items-center  z-10'>
                <RxCross1 className='text-sm'/>
            </div>
        </div>
     <Sidebar className='overflow-auto w-full '>
        <Sidebar.Items className='w-full h-auto'>
            <Sidebar.ItemGroup className='border-b-[0.01rem]  w-full text-black '>
                {
                    Navsidebar_api.map((data, i)=>{
                        
                        return <>
                            <Sidebar.Collapse key={i} label={data?.sidebarTitle} className='dump border-b-[0.01rem] py-3 text-lg font-[400] border-nav-pink rounded-none text-[#333] uppercase hover:bg-[#FCEBE8]' >
                                <SidebarComponent data={data?.children} />
                            </Sidebar.Collapse>
                        </>
                    })
                }
                <Sidebar.Item className="border-none  py-3 text-lg uppercase font-[400] border-nav-pink rounded-none text-[#333] " icon={AiOutlineUser}>
                    <div>
                        <div className=''>
                            <h1>Login</h1>
                        </div>
                    </div>
                </Sidebar.Item>
                <Sidebar.Item className="w-full flex justify-center ">
                    <div className='bg-[#FFAC83] object-contain'>
                        <img src={mobileMenu} className='h-full w-full' alt="mobileMenu" />
                    </div>
                </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
     </Sidebar>
    </div>
    </motion.div>
  </>
}

const SidebarComponent  = ({data}) => {
    return <>  
        {
            data?.map((items , j)=>{
                return <>
                <Sidebar.Collapse  key={j}  label={items?.sidebarTitle} className='pl-4 border-b-[0.01rem] py-3 text-lg font-[400] border-nav-pink rounded-none text-[#333] '>
                    <SidebarItem item={items}  />
                </Sidebar.Collapse>    
                </>
            })
        }
           
        
    </>
}


const SidebarItem = ({item}) => {
    return <>
        {
            item?.children?.map((sub_item, k)=>{
                return <>
                    <Sidebar.Item className="border-b-[0.01rem] py-3 text-lg font-[400] border-nav-pink rounded-none text-[#333]">{sub_item?.sidebarTitle}</Sidebar.Item>
                </>
            })
        }

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
                id : 1.1,
                sidebarTitle : "Hair Care",
                url : "/",
                children : [
                    {
                        id : 1.11,
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        id : 1.12,
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        id : 1.13,
                        sidebarTitle : "option 3",
                        url : '/'
                    },

                ]
            },
            {
                id : 1.2,
                sidebarTitle : "Body Care",
                url : "/",
                children : [
                    {
                        id : 1.21,
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        id : 1.22,
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        id : 1.23,
                        sidebarTitle : "option 3",
                        url : '/'
                    },

                ]
            },
            {
                id : 1.3,
                sidebarTitle : "Face Care",
                url : "/",
                children : [
                    {
                        id : 1.31,
                        sidebarTitle : "option 1",
                        url : '/'
                    },
                    {
                        id : 1.32,
                        sidebarTitle : "option 2",
                        url : '/'
                    },
                    {
                        id : 1.33,
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
        sidebarTitle : "BESTSELLER",
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
        sidebarTitle : "PAGES",
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
        sidebarTitle : "BLOGS",
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

  