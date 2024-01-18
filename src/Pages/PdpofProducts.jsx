import React, { useState } from "react";
import ParentPDPComp from "../Components/PDPproductInformation/parentPDPComp";
import ProductCollectionAlsoLike from "../Components/ProductCollectionComp/ProductCollectionAlsoLike";
import PdpBlueComp from "../Components/PdpBlueComp/pdp-blue-comp";
import PopUpCommon from "../common/popupCommon";

const PdpProducts = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [activePopUpImage, setActivePopUpImage] = useState(null)
  return (
    <>
    { showPopup ? <PopUpCommon setShowPopup={setShowPopup} activePopUpImage={activePopUpImage} />  : null}
      <section
        id="pdp_products"
        className="w-full h-fit relative bg-[#FFF8F7] lg:pt-[3.5rem] "
      >
        <div className="mt-5 lg:mt-0">
          <ParentPDPComp setShowPopup={setShowPopup} setActivePopUpImage={setActivePopUpImage}  />
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
