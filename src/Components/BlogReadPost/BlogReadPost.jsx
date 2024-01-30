import React, { useState } from 'react'
import blogImage from '../../Assest/images/blogdesktop1.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoShareSocial } from 'react-icons/io5';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const BlogReadPost = ({blogDescriptionData}) => {
    const [blogDescriptionState, setBlogDescriptionState] = useState(...blogDescriptionData)

    const { title, blogParagraph, blogImageDesktop, blogImage, blogContent  } = blogDescriptionState; // blogContent is an array.
 
    return <>
        <section className='main-container-blog-read w-full '>
            <div className='inner-container-blog-read'>
                <div className='content-container-blog-read w-11/12 lg:w-[87%] mx-auto text-[#999]'>
                    <div className='post-container w-full h-fit space-y-[2.4rem] lg:space-y-[3.2rem]'>
                        <div className=' box-content h-fit lg:h-[40rem] lg:w-full'>
                            <img src={blogImage} className='w-full h-full object-contain lg:hidden' alt="" />
                            <img src={blogImageDesktop} className='w-full h-full object-contain lg:object-cover hidden lg:block' alt="" />

                        </div>
                        <div className='px-2 lg:px-0 space-y-6 lg:space-y-7 lg:w-[99%] '>
                            <div>
                                <p className='text-[15px] lg:text-[18px]'>{blogParagraph}</p>
                            </div>
                            <ul className='flex flex-col w-full gap-y-[1.3rem] lg:space-y-[0.6rem]'>
                            {
                                blogContent.map((blog_content, i)=>{
                                    return <>
                                    <li key={i}>
                                        <div>
                                            <div>
                                                <h6 className='font-[500] lg:text-[20px]'>{blog_content?.subHeading}</h6>
                                                <p className='text-[16px] lg:text-[20px]'>{blog_content?.content}</p>
                                            </div> 
                                        </div>
                                    </li>

                                    </>
                                })
                            }
                            <li>
                                <div>
                                    <p className='text-[15px] lg:text-[18px]'>{blogParagraph + " " + blogParagraph}</p>
                                </div>
                            </li>
                                
                            </ul>
                        </div>
                        
                        <div className='flex items-center text-nav-pink  justify-center gap-3 mx-2 text-[12px] lg:text-[14px] lg:pt-[2rem]'>
                            {
                                iconsArray.map((data, i)=>{
                                    return <>
                                    <NavLink key={i} to={data.href}>
                                        {data.icon}
                                    </NavLink>
                                    </>
                                })
                            }  
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    </>
}

const iconsArray = [
    {
        id : 1,
        icon : <FaFacebookF className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 2,
        icon : <FaInstagram className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 3,
        icon : <FaXTwitter className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 4,
        icon : <IoShareSocial className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
]
export default BlogReadPost;


