import React, { useRef, useState } from 'react'
import megaMenuImage from '../../Assest/images/megaMenuimg.png';
import { NavLink, redirect, useNavigate } from 'react-router-dom';

const MegaMenuComp = ({setShowMegaMenu}) => {
    const [counter, setCounter] = useState(1)
    const navigate = useNavigate();
    // const ref = useRef(null)
    // const history =     

    const handleRouteMegaMenu = (event, route, index=index+1) => {
        setCounter(counter + 1);
        console.log("url", `${route}${counter}`)
        navigate(`${route}${counter}`)
        // ref.current.href(`${route}:${index}`)
    }
    return <>
        <menu className='main-container absolute top-0 left-0 h-[100vh] w-full bg-black bg-opacity-25 z-30 '>
            <div className='child-container flex items-start justify-center absolute top-[8rem] w-full h-fit'>
                <div onMouseEnter={()=> setShowMegaMenu(true)} onMouseLeave={()=> setShowMegaMenu(false)} className='content-container h-[18rem] w-[50rem] bg-white shadow-md drop-shadow-sm '>
                    <div className='grid grid-cols-5 gap-[1rem] justify- w-full h-full relative p-[38px]'>
                        {
                            MegaMenu_api.map((items, i)=>{
                                return <>
                                <div key={i} className='w-full h-full text-start overflow-auto '>
                            <ul className='w-fit flex-col h-fit items-start '>
                                <li className='w-full '>
                                   <div className='space-y-[4px]'>
                                    <div>
                                        <h5 className='text-[16px] font-[400] text-[#363636]'><NavLink to={items?.title_href}><a>{items?.title}</a></NavLink></h5>
                                    </div>
                                    {
                                        items?.sub_list.map((sub_items, j)=>{ 
                                            return <>
                                            <div key={j}>
                                                <button onClick={(event)=>handleRouteMegaMenu(event, "/pdp-product/" , j)}><span className='text-[13px] font-[300] text-[#333] hover:text-nav-pink hover:underline underline-offset-2'>{sub_items?.sub_title}</span></button>
                                            </div>
                                            </>
                                        })
                                    }
                                   </div> 
                                </li>
                            </ul>
                        </div>
                                </>
                            })
                        }

                        {/* span-2 grid col */}
                        <div className='w-full col-span-2 h-full '>
                            <div className='content-container flex flex-col justify-start items-center w-full h-full space-y-3'>
                                <div className='h-[9.3rem] w-full object-contain bg-[#FFAC83]'>
                                    <img src={megaMenuImage} className='h-full w-full' alt="mega_menu" />
                                </div>
                                <div className='w-full text-center '>
                                    <h5 className='text-[16px] font-[400] text-[#333] '>Up to 20% off</h5>
                                    <a href="" className='uppercase tracking-wider underline '>Shop Now</a>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </menu>
    </>
}


// 

export default MegaMenuComp;


const MegaMenu_api =[
    {
        id : 1,
        title : "Hair Care",
        title_href : "/collection",
        sub_list : [
            {
                sub_title : "Shampoo",
                sub_href : "/",
            },
            {
                sub_title : "Conditioner",
                sub_href : "/"
            },
            {
                sub_title : "Hair Oil",
                sub_href : "/"
            },
            {
                sub_title : "Hair Serum",
                sub_href : "/"
            },

        ]
    },
    {
        id : 2,
        title : "Body Care",
        title_href : "/",
        sub_list : [
            {
                sub_title : "Body Lotion",
                sub_href : "/"
            },
            {
                sub_title : "Body Scrub",
                sub_href : "/"
            }
        ]
    },
    {
        id : 3,
        title : "Face Care",
        title_href : "/",
        sub_list : [
            {
                sub_title : "Face Wash",
                sub_href : "/"
            },
            {
                sub_title : "Face Scrub",
                sub_href : "/"
            },
            {
                sub_title : "Face Serum",
                sub_href : "/"
            },
            {
                sub_title : "SunScreen",
                sub_href : "/"
            },
            {
                sub_title : "Face Cream-Night",
                sub_href : "/"
            },
            {
                sub_title : "Face Cream-Night",
                sub_href : "/"
            },

        ]
    },
    
]