import React from 'react'
import newsimg1 from '../../Assest/images/newsimg1.png';
import newsimg2 from '../../Assest/images/newsimg2.png';

const LastestNews = () => {
    return <>
    <section className='main-container w-full h-fit my-[4rem] pt-[3rem] pb-[3rem] lg:my-[4rem] lg:mt-[4rem]'>
        <div className='inner-container relative w-full h-full space-y-[35px] md:space-y-[40px]'>
            <div className='w-full lg:my-[6rem]'>
                <h1 className='text-[25px] text-center font-[500] font-playfair text-black md:text-[33px] lg:text-[45px] '>Lastest News</h1>
            </div>
            <div className='w-10/12 lg:w-11/12  mx-auto flex flex-col justify-center space-y-[2rem] md:space-y-[2.6rem]  lg:flex-row lg:gap-[1.5rem] lg:space-y-0 '>
            {/* cards1 */}
            {
                newsCards_api.map((data, i)=>{
                    return <>
                    <NewsCards newsData = {data} key={i}/>
                    </>
                })
            }
                
            </div>
            <div className='w-10/12 mx-auto flex justify-center space-y-[1.2rem]  '>
            <button className='uppercase bg-nav-pink px-10  py-3 text-white tracking-widest font-[400] text-[14px] hover:bg-white hover:text-nav-pink hover:border-nav-pink border-[0.01rem]'>view all post</button>
            </div>
        </div>
        
    </section>
    </>
}

const NewsCards = ({newsData}) => {
    return <>
        <div className='relative mx-auto w-7/12 lg:w-3/12  md:mx-auto md:flex md:flex-col md:justify-center h-fit'>
            <div className='w-full box-content'>
                <img src={newsData.imgLink} className='h-fit md:h-full md:w-full w-fit object-cover lg:object-contain' alt={newsData.imgAlt} />
            </div>
            <div className='pt-[1rem]'>
                <div>
                    <h1 className='text-[18px] font-[400] md:text-[22px] lg:text-[16px]'>{newsData.newsDate}</h1>
                </div>
                <div>
                    <h1 className='text-[18px] font-[400] text-black md:text-[24px] lg:text-[20px]'>{newsData.newsTitle}</h1>
                </div>
                <div className='pt-[1rem] md:w-fit'>
                    <p className='text-[12px] text-gray-300 md:text-[15px]'>{newsData.newsDesc}.</p>
                </div>

            </div>
        </div>
    </>
}


const newsCards_api = [
    {
        id : 1,
        imgLink : newsimg1,
        imgAlt : "news_image1",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat."
    },
    {
        id : 2,
        imgLink : newsimg2,
        imgAlt : "news_image2",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat."
    },
    {
        id : 3,
        imgLink : newsimg1,
        imgAlt : "news_image1",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat."
    },
    {
        id : 4,
        imgLink : newsimg2,
        imgAlt : "news_image2",
        newsDate : "October 21, 2023",
        newsTitle : "5 Benefits of using Sun Screen",
        newsDesc : "Lorem ipsum dolor sit amet consectetur. Tellus id sit orci ac congue consectetur. Velit nisi integer sed feugiat sit nunc posuere odio placerat."
    },
]


export default LastestNews;