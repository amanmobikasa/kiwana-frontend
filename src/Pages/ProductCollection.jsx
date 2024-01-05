import React from 'react'
import CollectionLandingComp from '../Components/ProductCollectionComp/CollectionLandingComp';
import FilterShortCollection from '../Components/ProductCollectionComp/FilterAndShorts';
import ProductGrid from '../Components/ProductCollectionComp/ProductGrid';
import ProductCollectionVideoComp from '../Components/ProductCollectionComp/ProductCollectionVideoComp';
import ProductCollectionAlsoLike from '../Components/ProductCollectionComp/ProductCollectionAlsoLike';
import FilterAndShortDesktop from '../Components/ProductCollectionComp/filteAndShortDesktop';

const ProductCollection = () => {
    return <>
    <section className='w-full relative h-fit '>
        <div className='inner-container bg-white w-full h-fit px-[25px]'>
            <div className='content-container w-full h-fit pt-[37px] md:pt-[8rem] lg:pt-[6.5rem]'>
                <CollectionLandingComp />
            </div>
            <div className='lg:w-full lg:flex lg:justify-between lg:gap-[1rem] lg:mt-[2rem]'>
                <div className='lg:w-3/12 lg:flex lg:justify-start lg:mt-[1.7rem]'>
                    <FilterShortCollection />
                    <FilterAndShortDesktop />
                </div>
                <div className='lg:w-9/12 lg:flex lg:flex-row lg:justify-end'>
                    <ProductGrid />
                </div>
            </div>
            
        </div>
        <div>
            <div>
                <ProductCollectionVideoComp />
            </div>
            <div>
                <ProductCollectionAlsoLike />
            </div>
        </div>
        
    </section>
    </>
}
export default ProductCollection;