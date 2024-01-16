import React from 'react'
import ProductPdpImageComp from './Product_pdp_image_comp';
import ProductPdpInformationComp from './Product_pdp_information';

const ParentPDPComp = () => {
    return <>
    <main id='pdp_info_image_comp' className='w-full h-full relative overflow-hidden'>
        <div className='parent_div w-full h-full box-content'>
            <div className='content-container h-full w-11/12 mx-auto flex flex-col gap-y-4'>
                {/* grid component */}
                <div className='h-fit w-full'>
                    <ProductPdpImageComp />
                </div>
                <div className='w-full'>
                    <ProductPdpInformationComp />
                </div>
            </div>
        </div>
    </main>

    </>
}
export default ParentPDPComp;