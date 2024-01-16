import React from "react";
import ParentPDPComp from "../Components/PDPproductInformation/parentPDPComp";

const PdpProducts = () => {
  return (
    <>
      <section
        id="pdp_products"
        className="w-full h-fit relative bg-[#FFF8F7] overflow-auto "
      >
        <div className="mt-5">
          <ParentPDPComp />
        </div>
      </section>
    </>
  );
};
export default PdpProducts;
