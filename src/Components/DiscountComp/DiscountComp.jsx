import React from "react";
import discount1 from "../../Assest/images/discount1.png";
import discount2 from "../../Assest/images/discount2.png";
import hairoil from "../../Assest/images/hairoil.png";
import discountDesktopimg1 from '../../Assest/images/discountDesktopImage1.png';
import discountDesktopimg2 from '../../Assest/images/discountDesktopImage2.png';


const DiscountComp = () => {
  return (
    <>
      <section className="h-fit w-full relative overflow-auto mt-[16.5rem] mb-[5rem]">
        <div className="main-container w-11/12 mx-auto h-fit ">
          <div className="content-container grid grid-cols-2 items-center justify-evenly gap-[1rem]">
          {
            discount_comp1.map((data, i)=>{
              return <>
              <div key={i} className={`w-full h-full relative overflow-auto ${data.bgColor}`}>
                  <div className="relative h-fit w-full">
                    <div className="object-contain h-full w-full">
                      <img src={data?.image_url} className="h-full w-full " alt="" />
                      {/* <img src={discountDesktopimg2} className="h-full w-full hidden lg:block" alt="" /> */}
                    </div>
                    <div className="absolute left-0 top-0 flex justify-center items-start w-7/12 ">
                      <div className="text-container w-full p-[3.5rem] space-y-[3.5rem] ">
                        <div className="space-y-2">
                          <div>
                            <h5 className={`uppercase text-[16px] font-[500] ${data?.textColor} tracking-wider`}>{data?.heading}</h5>
                          </div>
                          <div>
                            <h1 className={`text-[2rem] font-[600] leading-tight ${data?.textColor}`}>{data?.sub_heading}</h1>
                          </div>
                        </div>
                        <div className="">
                          <button className={`text-[1.2rem] font-[600] px-8 py-2 bg-white ${data?.textColor} uppercase tracking-wider`}>{data?.button_text}</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              </>
            })
          }
             
          </div>
        </div>
      </section>
    </>
  );
};
export default DiscountComp;

const discount_comp1 = [
  {
    id: 1,
    cardCss : "",
    bgColor: "bg-[#D1D9C7]",
    image_url: discountDesktopimg2,
    hair_oil: hairoil,
    textColor: "text-[#4E7661]",
    heading: "NEW COLLECTION",
    sub_heading: "50% Off on New Products",
    button_text: "explore more",
    button_style: "text-[#4E7661] hover:bg-[#4E7661] hover:text-white",
    button_link: "/",
  },
  {
    id: 2,
    cardCss : "bg-gradient-to-t from-[#EDEDEF] to-transparent ",
    bgColor: "bg-[#EDEDEF]",
    image_url: discountDesktopimg1,
    heading: "new collection",
    textColor: "text-[#B57635]",
    sub_heading: "25% off on Limited Products",
    button_text: "shop now",
    button_style: "text-[#BD804A] hover:bg-[#BD804A] hover:text-white",
    button_link: "/",
  },
];
