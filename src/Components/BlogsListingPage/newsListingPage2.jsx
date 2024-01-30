import React from 'react'
import { BlogPostCard } from './NewsListingPage'
import newsimg4 from '../../Assest/images/image 27.png';
import newsimg5 from '../../Assest/images/image 28.png';
import newsimg6 from '../../Assest/images/image 47.png';

const NewsListingPage2 = () => {
    return <>
    <section className='main-container-news-listing-page relative w-full '>
        <div className='inner-container-news-listing-page'>
            <div className='content-container-listing-page w-full'>
                <div className='flex flex-col gap-[24px] items-center lg:flex-row '>
                   {
                    newsCards_api2.map((newsData, id)=>{
                        return <BlogPostCard key={id} newsData={newsData}/>
                    })
                   }
                </div>
            </div>
        </div>
    </section>
    </>
}

export {NewsListingPage2}

const newsCards_api2 = [
        {
            id : 4,
            imgLink : newsimg4,
            desktopImage : newsimg4,
            imgAlt : "news_image4",
            newsDate : "October 21, 2023",
            newsTitle : "5 Benefits of using Sun Screen",
            newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
            btnLink : "/blogdesc/4"
        },
        {
            id : 5,
            imgLink : newsimg5,
            desktopImage : newsimg5,
            imgAlt : "news_image5",
            newsDate : "October 21, 2023",
            newsTitle : "5 Benefits of using Sun Screen",
            newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
            btnLink : "/blogdesc/4"
        },
        {
            id : 6,
            imgLink : newsimg6,
            desktopImage : newsimg6,
            imgAlt : "news_image6",
            newsDate : "October 21, 2023",
            newsTitle : "5 Benefits of using Sun Screen",
            newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat.",
            btnLink : "/blogdesc/4"
        },
]