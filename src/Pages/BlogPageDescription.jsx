import React, { useEffect, useState } from 'react'
import BlogReadPost from '../Components/BlogReadPost/BlogReadPost';
import { useParams } from 'react-router-dom';
import { blogReadPageJson } from '../Components/BlogReadPost/BlogReadJson';
import { useScroll } from 'framer-motion';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsArrowLeft } from "react-icons/bs";

const BlogDescriptionPage = ()=> {
    const [blogDescriptionData, setBlogDescriptionData] = useState(null)

    const { id }  = useParams();
    const getBlogDescription = () => {
        if(id && blogReadPageJson){
            const blogDescription = blogReadPageJson.filter((blog_desc, idx)=> blog_desc?.id == id);
            setBlogDescriptionData(blogDescription) ;
        }
        
    }
    // console.log("blogdescription", blogDescriptionData)

    useEffect(()=>{
        getBlogDescription()
    },[id])

    return <>
    {blogDescriptionData !== null ?  <section className='main-container-blog-desc w-full relative h-full bg-[#FFF8F7] '>
        <div className='inner-container-blog-desc w-[93%] mx-auto py-[43px] lg:py-[90px]'>
            <div className='content-container-blog-desc w-full h-fit space-y-5'>
                <div className='text-center w-full pb-[1rem] leading-tight'>
                    <h1 className='text-[44px] text-nav-pink font-playfair font-[400] lg:text-[60px]'>5 Benefits of using Sun Screen</h1>
                </div>
                <div className=''>
                    <BlogReadPost blogDescriptionData={blogDescriptionData === null ? "loading" : blogDescriptionData} />
                </div>
                <div className='pagnation-blog w-[93%] lg:w-[87%] mx-auto my-[1rem] relative pt-2'>
                            <div className='py-3 lg:py-6 border-y-[0.01rem] border-[#E89689] flex justify-between w-full items-center'>
                                <div className='w-fit flex items-center justify-start gap-x-[1.4rem]'>
                                    <div>
                                        <button className='bg-white rounded-full p-[8px] lg:p-[12px] shadow-sm drop-shadow-sm'><MdOutlineKeyboardArrowLeft className='text-[1.8rem] text-nav-pink' /></button>
                                    </div>
                                    <div>
                                        <p className='text-[13px] font-[500] text-[#999] lg:text-[16px]'>Previous Post</p>
                                    </div>
                                </div>
                                <div className='w-fit flex items-center justify-start gap-x-[1.4rem]'>
                                    <div>
                                        <p className='text-[13px] font-[500] text-[#999] lg:text-[16px]'>Next Post</p>
                                    </div>
                                    <div>
                                        <button className='bg-white rounded-full p-[8px] shadow-sm drop-shadow-sm lg:p-[12px] lg:text-[16px]'><MdOutlineKeyboardArrowRight className='text-[1.8rem] text-nav-pink' /></button>
                                    </div>
                                    
                                </div>
                            </div>
                </div>
                <div className='text-center w-full'>
                    <div className='inner-container flex justify-center items-center gap-x-[0.8rem]'>
                        <div>
                            <BsArrowLeft className='text-[#999] text-[16px]'/>
                        </div>
                        <div>
                            <a href="" className='text-[#999] text-[16px] lg:text-[19px] capitalize underline underline-offset-2'>Back to Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> : "Loading"}
    </>
}
export default BlogDescriptionPage;