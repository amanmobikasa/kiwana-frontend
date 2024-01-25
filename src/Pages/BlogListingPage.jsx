import React, { useRef, useState } from 'react'
import { NewsListingPage } from '../Components/BlogsListingPage/NewsListingPage';
import { NewsListingPage2 } from '../Components/BlogsListingPage/newsListingPage2';
import { Pagination } from 'flowbite-react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogListingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ref = useRef(null);

    const onPageChange = (page) => {
        setCurrentPage(page)   
    }

    
    

    return <>
        <main className='main-container-blog-page w-full relative h-full bg-white'>
            <div className='inner-main-container-blog-page w-11/12 bg-[#FFF8F7]  mx-auto h-full py-[70px] lg:py-[78px] pb-[9rem]'>
                <div className='content-container-blog-page '>
                    <div className=''>
                        <h1 className='text-[45px] lg:text-[60px] font-[400] font-playfair text-center'>Latest News</h1>
                    </div>
                    <div>
                        <NewsListingPage />
                    </div>
                    <div className='mt-[25px] lg:mt-[7rem]'>
                        <NewsListingPage2 />
                    </div>
                    <div className='mt-[2.4rem]'>
                        <div className="flex overflow-x-auto justify-center">
                            <Pagination
                                ref={ref}
                                className='pagination'
                                layout="pagination"
                                currentPage={currentPage}
                                totalPages={2}
                                onPageChange={onPageChange}
                                previousLabel={currentPage === 1 ? null : <MdOutlineKeyboardArrowLeft className='text-[2rem] text-nav-pink' /> }
                                nextLabel={<MdOutlineKeyboardArrowRight className='text-[2rem] text-nav-pink' />}
                                // showIcons
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}
export default BlogListingPage;