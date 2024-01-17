
import React, { useEffect, useState } from 'react'
import PdpImageOne from '../../Assest/images/pdp_image_1.png';
import PdpImageTwo from '../../Assest/images/pdp-images-1.png';
import PdpImageThree from '../../Assest/images/pdp_images_2.png'; 

const ProductPdpImageComp = ({setShowPopup, setActivePopUpImage}) => {
    const [activeImage , setActiveImage] = useState(null);


    useEffect(()=>{
        pdp_images_api.forEach((images)=>{
            if(images?.active == true){
                setActiveImage(images?.pdp_image);
                setActivePopUpImage(images?.pdp_image)
            }
        })
    },[pdp_images_api])

    const handlePopupImage = () => {
        setShowPopup(true);

    } 

    const handleShowImagesOnPdp = (event, image_pdp) => {
        setActiveImage(image_pdp);
        setActivePopUpImage(image_pdp);
    }

    return <>
        <article className='w-full h-fit relative overflow-auto'>
            <div className="outer-container">
                <div className='inner-container space-y-[1rem]'>
                    <div className='mx-auto  relative bg-white p-3 h-[25rem]'>
                        <div className='object-contain h-fit w-full   aspect-square'>
                            <img src={activeImage} className='h-full w-full' alt="" />
                        </div>
                        <div onClick={handlePopupImage} className='absolute left-[1rem] top-[1rem] h-fit w-fit'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M15.2726 6.86805L16.2534 7.92481L14.7121 9.47473C14.4318 9.75654 14.4318 10.1792 14.7121 10.461C14.9923 10.7428 15.4127 10.7428 15.6929 10.461L17.2343 8.91113L18.2852 9.89744C18.5655 10.1792 18.9158 9.96789 18.9158 9.68609V6.6567C18.9158 6.44535 18.7757 6.30444 18.5655 6.30444H15.5528C15.2726 6.30444 15.0624 6.6567 15.2726 6.86805ZM6.86518 9.89744L7.84604 8.91113L9.3874 10.461C9.66765 10.7428 10.088 10.7428 10.3683 10.461C10.6485 10.1792 10.6485 9.75654 10.3683 9.47473L8.89697 7.92481L9.87783 6.86805C10.1581 6.6567 9.94789 6.30444 9.66765 6.30444H6.655C6.44481 6.30444 6.30469 6.44535 6.30469 6.6567V9.68609C6.30469 9.96789 6.655 10.1792 6.86518 9.89744ZM9.87783 18.3515L8.82691 17.3652L10.3683 15.8153C10.6485 15.5335 10.6485 15.1108 10.3683 14.829C10.088 14.5472 9.66765 14.5472 9.3874 14.829L7.84604 16.3789L6.79512 15.3926C6.655 15.1108 6.30469 15.3222 6.30469 15.604V18.6333C6.30469 18.8447 6.44481 18.9856 6.655 18.9856H9.66765C9.94789 18.9856 10.1581 18.6333 9.87783 18.3515ZM18.3553 15.3222L17.3044 16.3085L15.763 14.7586C15.4828 14.4767 15.0624 14.4767 14.7821 14.7586C14.5019 15.0404 14.5019 15.4631 14.7821 15.7449L16.3235 17.2948L15.3426 18.3515C15.1325 18.5629 15.2726 18.9856 15.6229 18.9856H18.6355C18.8457 18.9856 18.9858 18.8447 18.9858 18.6333V15.604C18.9158 15.3222 18.5655 15.1108 18.3553 15.3222Z" fill="#E89689"/>
                                <circle cx="12.6453" cy="12.645" r="12.4275" fill="#E89689" fill-opacity="0.2"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                    {/* for different images of products */}
                    <div className='images-container w-full h-fit relative'>
                        <div className="inner-container flex justify-evenly gap-4">
                        {
                            pdp_images_api.map((images, i)=>{
                                return <>
                                <div key={i} id={images?.id} onClick={(event)=>handleShowImagesOnPdp(event, images?.pdp_image)} className={`object-contain h-[110px] w-[110px] ${images?.active ? "border-2 outline-gray-300" : null} shadow-md`}>
                                    <img src={images.pdp_image} className='aspect-square h-full w-full' alt={images.alt} />
                                </div>

                                </>
                            })
                        }
                           
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </>
}

const pdp_images_api = [
    {
       id : 1,
       pdp_image : PdpImageOne,
       alt : "pdp image one",
       active : true
    },
    {
        id : 2,
        pdp_image : PdpImageTwo,
        alt : "pdp image two",
        active : false
    },
    {
        id : 3,
        pdp_image : PdpImageThree,
        alt : "pdp image three",
        active : false
    },

]

export default ProductPdpImageComp;