import React, { useEffect, useState } from "react";
import ParentPDPComp from "../Components/PDPproductInformation/parentPDPComp";
import ProductCollectionAlsoLike from "../Components/ProductCollectionComp/ProductCollectionAlsoLike";
import PdpBlueComp from "../Components/PdpBlueComp/pdp-blue-comp";
import PopUpCommon from "../common/popupCommon";
import { useFetcher, useParams } from "react-router-dom";
import { productCollectionList_api } from "../Components/ProductCollectionComp/ProductGrid";
import { useDispatch } from "react-redux";
import { pdpDescription } from "../Redux/reducer/productDescriptionSlice";

const PdpProducts = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [activePopUpImage, setActivePopUpImage] = useState(null)
  const [pdpProductData, setPdpProductData] = useState(); // store the pdp data get from useeffect
  const { productId } = useParams(); // getting the product id from the url;
  const dispatch = useDispatch();

  console.log("prodyctId", productId)

  useEffect(()=>{
    if(productId && productCollectionList_api.length > 0 ){
      const productData =   productCollectionList_api.filter((products, idx)=>{
          return products.id === parseInt(productId);
        })

        setPdpProductData(...productData[0].pdpPopup);
        
    }
  },[productId, productCollectionList_api]) // getting the data from the product id;

  console.log("pdpProductData", pdpProductData);
  dispatch(pdpDescription(pdpProductData)); // dispatching the data to the store;
  

  return (
    <>
    { showPopup ? <PopUpCommon setShowPopup={setShowPopup} activePopUpImage={activePopUpImage} />  : null}
      <section
        id="pdp_products"
        className="w-full h-fit relative bg-[#FFF8F7] lg:pt-[3.5rem] "
      >
        <div className="mt-5 lg:mt-0">
          <ParentPDPComp setShowPopup={setShowPopup} setActivePopUpImage={setActivePopUpImage}    />
        </div>
        <div className="lg:pt-[2rem]">
          <ProductCollectionAlsoLike mainTitle = {"Recommended Products"} />
        </div>
        <div>
          <PdpBlueComp />
        </div>
        <div className="pb-[5.5rem] ">
          <ProductCollectionAlsoLike mainTitle = {"Recently Viewed Products"} />
        </div>
      </section>
    </>
  );
};
export default PdpProducts;
