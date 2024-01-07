import React from 'react'
import arrivalimg1 from '../../Assest/images/arrival1.png';
import arrivalimg2 from '../../Assest/images/arrival2.png';
import arrivalimg3 from '../../Assest/images/arrival3.png';
import arrivalimg4 from '../../Assest/images/arrival4.png';
import { CarouselCards } from '../customCarousel';

const ProductGrid = () => {
    return <>
    <section id='' className='w-full lg:w-full mt-[1.7rem] relative '>
        <div className='content-container'>
            <div className='grid grid-cols-2 lg:grid-cols-4  grid-rows-5 lg:grid-rows-3 gap-3 lg:gap-0 justify-between '>
            {
                productCollectionList_api.map((items, i)=>{
                    return <>
                    <div key={i} className='w-full h-full object-contain'>
                        <CarouselCards cardData={items} />
                    </div>
                    </>
                })
            }
                
            </div>
        </div>
    </section>       
    </>
}

const productCollectionList_api = [
    {
        id : 1,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 2,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 3,
        imgLink : arrivalimg3,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 4,
        imgLink : arrivalimg4,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 5,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 6,
        imgLink : arrivalimg4,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 7,
        imgLink : arrivalimg3,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 8,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 9,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 10,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 11,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 12,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 13,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 14,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 15,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 16,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
]
export default ProductGrid;