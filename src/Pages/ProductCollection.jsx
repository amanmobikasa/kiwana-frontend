import React, { useEffect, useState } from 'react'
import CollectionLandingComp from '../Components/ProductCollectionComp/CollectionLandingComp';
import FilterShortCollection from '../Components/ProductCollectionComp/FilterAndShorts';
import {ProductGrid} from '../Components/ProductCollectionComp/ProductGrid';
import ProductCollectionVideoComp from '../Components/ProductCollectionComp/ProductCollectionVideoComp';
import ProductCollectionAlsoLike from '../Components/ProductCollectionComp/ProductCollectionAlsoLike';
import FilterAndShortDesktop from '../Components/ProductCollectionComp/filteAndShortDesktop';
import PdpPopup from '../common/pdpPopUp';
import { useSelector } from 'react-redux';
import pdppopupSlice from '../Redux/reducer/pdppopupSlice';
import { IoReturnUpBackOutline } from 'react-icons/io5';

const ProductCollection = () => {

    const [hidePdpPopup, setHidePDPPopUp] = useState(false); // true means show, and false means hide
    const [pdpPopupDataNew, setPdpPopUpDataNew] = useState([]);
    const [scrollDisable, setScrollDisable] = useState(false);

    
        const pdpPopUpData = useSelector(state => state.pdpSlice.pdpProducts);
        // console.log("pdpPopUpData", pdpPopUpData)

        useEffect(()=>{
            // console.log(pdpPopUpData.product_title)
            if(pdpPopUpData.product_title){
                setHidePDPPopUp(true) 
                setScrollDisable(true) // disable the scroll when the pdp popup is open
            }

            if(!hidePdpPopup){
                setScrollDisable(false);
            }

        },[pdpPopUpData])

        useEffect(()=>{
            const handleScroll = () =>{
                if(scrollDisable){
                    window.scroll(0,50);
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
              };
        },[scrollDisable])

    return <>
    { hidePdpPopup ? <PdpPopup hidePdp={setHidePDPPopUp} hidePdpPopup={hidePdpPopup} pdpPopUpData={pdpPopUpData} />  : null}
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
            <div className='lg:mt-[2rem] '>
                <ProductCollectionVideoComp />
            </div>
            <div className=''>
                <ProductCollectionAlsoLike mainTitle={"You May Also Like"} />
            </div>
        </div>
        
    </section>
    </>
}
export default ProductCollection;