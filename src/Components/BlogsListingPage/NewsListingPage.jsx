import React from 'react'
import newsimg1 from '../../Assest/images/newsimg1.png';
import newsimg2 from '../../Assest/images/newsimg2.png';
import newsimg3 from '../../Assest/images/image 26.png';
import newsimg1Desktop from '../../Assest/images/blogdesktop1.png';
import newsimg2Desktop from '../../Assest/images/blogdesktop2.png';


import { NavLink } from 'react-router-dom';


const NewsListingPage = () => {
    return <>
        <section className='main-container-post-card w-full h-fit relative mt-[1.5rem] lg:mt-[2.7rem]'>
            <div className='inner-container-post-card'>
                <div className='content-container-post-card'>
                    <div className='card-container w-full h-max space-y-[20px] lg:grid lg:grid-cols-2 lg:gap-[3rem]'>
                        {
                            newsCards_api.map((newsData, i)=>{
                                return <BlogPostCard key={i} newsData={newsData}/>
                            
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
}


const BlogPostCard = ({newsData}) => {
    return <>
    <div className={`relative ${newsData?.id == 1 ? "lg:col-span-2 lg:flex lg:flex-row lg:items-center lg:justify-start lg:w-full lg:gap-[3rem]" : null}  md:mx-auto md:flex md:flex-col md:justify-center h-fit `}>
            <div className='w-full h-full box-content   mx-auto'>
                <img src={newsData.imgLink} className={`h-[21rem] md:h-full md:w-fit w-full lg:hidden  object-cover   `} alt={newsData.imgAlt} />
                <img src={newsData?.desktopImage} className={`h-[21rem] l w-full hidden lg:block ${newsData?.id == 1 || newsData?.id == 2 || newsData?.id == 3 ? "lg:w-[720px] lg:h-[610px]" : "lg:h-[18rem]" }  object-cover  `} alt={newsData.imgAlt} />

            </div>
            <div className={`pt-[1.5rem] mx-1 space-y-2 ${newsData?.id == 1 ? "lg:space-y-[1rem] lg:w-10/12 lg:mx-auto lg:px-3" : "lg:space-y-[0.4rem]" }`}>
                <div>
                    <h1 className={`text-[16px] font-[400] md:text-[22px] lg:text-[19px]`}>{newsData.newsDate}</h1>
                </div>
                <div className='lg:space-y-[1rem]'>
                    <div>
                        <h1 className={`text-[20px] font-[400] ${newsData?.id == 1 || newsData?.id == 2 || newsData?.id == 3 ? " lg:text-[26px]" : "lg:text-[20px] "}  text-black md:text-[24px] lg:font-[500] `}>{newsData.newsTitle}</h1>
                    </div>
                    <div className='md:w-fit'>
                        <p className={`text-[20px] text-gray-300 md:text-[15px] ${newsData?.id == 1 || newsData?.id == 2 || newsData?.id == 3 ? "lg:text-[20px]" : "lg:text-[15px]"} `}>{newsData.newsDesc}.</p>
                    </div>
                </div>
                <div className={` ${newsData?.id == 1 || newsData?.id == 2 || newsData?.id == 3  ? "pt-2" : "hidden"} `}>
                    <NavLink to={newsData?.btnLink}><button className='bg-nav-pink text-white px-7 lg:px-6 lg:tracking-wider lg:text-[20px] py-3 uppercase font-[400] hover:bg-transparent hover:border-nav-pink border-[0.01rem] border-nav-pink hover:text-nav-pink'>Read more</button></NavLink>
                </div>
            </div>
        </div>
    </>
}

export { NewsListingPage,BlogPostCard };

const newsCards_api = [
    {
        id : 1,
        imgLink : newsimg1,
        desktopImage : newsimg1Desktop,
        imgAlt : "news_image1",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
        btnLink : "/blogdesc/1"

    },
    {
        id : 2,
        imgLink : newsimg2,
        desktopImage : newsimg2Desktop,
        imgAlt : "news_image2",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
        btnLink : "/blogdesc/2"
    },
    {
        id : 3,
        imgLink : newsimg3,
        desktopImage : newsimg3,
        imgAlt : "news_image3",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
        btnLink : "/blogdesc/3"
    },
  
]