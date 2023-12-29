import React from "react";
import discount1 from "../../Assest/images/discount1.png";
import discount2 from "../../Assest/images/discount2.png";
import hairoil from "../../Assest/images/hairoil.png";

const DiscountComp = () => {
  return (
    <>
      <section
        id="discount_comp"
        className="w-full my-[2rem] relative overflow-hidden h-fit lg:mt-[30rem] lg:mb-[6rem] lg:w-11/12 lg:mx-auto"
      >
        <div className="flex flex-col justify-center items-center relative w-full h-fit space-y-[2rem] md:space-y-[3rem] lg:flex-row lg:gap-[1.5rem] lg:space-y-0 ">
          {discount_comp1.map((data, i) => {
            return (
              <>
                <div key={i} className="w-11/12 md:w-10/12 mx-auto h-fit lg:h-full relative lg:flex lg:flex-row-reverse lg:bg-[#D1D9C7]">
                  <div className={`${data.cardCss} relative lg:w-10/12`}>
                    <img
                      src={data.image_url}
                      className={`  h-auto w-full lg:h-full lg:w-full`}
                      alt=""
                    />
                    <img
                      src={data?.hair_oil ? data.hair_oil : ""}
                      className="absolute top-[1rem] left-[2.8rem] md:top-[5rem] md:left-[5.4rem] md:rotate-12 md:h-[30rem] lg:h-[13rem] lg:left-[3rem] lg:top-[2rem] "
                      alt=""
                    />
                  </div>
                  <div
                    className={`flex w-full ${data.bgColor} h-[15rem] md:h-[20rem] px-[1.6rem] -mt-2 py-3 lg:flex lg:h-full lg:mt-0`}
                  >
                    <div 
                      className={`w-11/12 mx-auto h-fit relative  space-y-[1.1rem] md:space-y-[1.4rem]`}
                    >
                      {data.heading !== "" ? (
                        <h1 className="uppercase text-[#4E7661] font-poppins text-[14px] md:text-[18px] font-[600]">
                          New Collection
                        </h1>
                      ) : (
                        ""
                      )}
                      <h2
                        className={`text-[30px] font-[600] md:text-[45px] ${data.textColor} leading-10 md:leading-tight`}
                      >
                        {data.sub_heading}
                      </h2>
                      <button
                        className={`uppercase py-2 px-4 md:px-7 md:py-3  tracking-widest bg-white ${data.button_style}`}
                      >
                        {data.button_text}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
    image_url: discount1,
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
    image_url: discount2,
    heading: "",
    textColor: "text-[#B57635]",
    sub_heading: "25% off on Limited Products",
    button_text: "shop sale",
    button_style: "text-[#BD804A] hover:bg-[#BD804A] hover:text-white",
    button_link: "/",
  },
];
