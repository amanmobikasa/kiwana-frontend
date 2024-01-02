import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
const ContactAddress = () => {
  return (
    <>
      <aside id="contact-address" className="w-full h-fit  text-black">
        <div className="content-container space-y-[3rem] md:px-4 lg:px-0 ">
          <div>
            <h1 className="font-playfair text-[2.1rem] text-black tracking-tight">
              Contact Us
            </h1>
          </div>
          <div className="w-full space-y-[1rem]">
            {contactAddress_api.map((data, i) => {
              return (
                <>
                <div key={i} className="space-y-[1rem]">
                  <div>
                    <h1 className="text-[18px] font-playfair">{data.head}</h1>
                  </div>
                  {
                    data.children.map((sub_child , i)=>{
                        return <>
                        <ul className="flex flex-col justify-start space-y-2">
                    <li className="flex gap-2">
                      {sub_child.icon}
                      <h3 className="text-[1.2rem] font-poppins text-gray-800 ">
                        {sub_child.text}
                      </h3>
                    </li>
                    
                  </ul>
                        </>
                    })
                  }
                  
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

const contactAddress_api = [
  {
    id: 1,
    head: "Information",
    children: [
      {
        icon: <IoLocationOutline className="text-[1.5rem] text-nav-pink" />,
        text: "775 Tipton Industrial Br Suite F Mumbai, India 30046",
        // iconClass : ""
      },
      {
        icon: <FiPhoneCall className="text-[1.3rem] text-nav-pink" />,
        text: "+91 9897 323243",
        // iconClass : ""
      },
    ],
  },
  {
    id: 2,
    head: "Customer Service",
    children: [
      {
        icon: <FiPhoneCall className="text-[1.3rem] text-nav-pink" />,
        text: "+91 9897 323243",
        // iconClass : ""
      },
      {
        icon: <HiOutlineMailOpen className="text-[1.3rem] text-nav-pink" />,
        text: "info@kiwana.com",
        // iconClass : ""
      },
    ],
  },
];

export default ContactAddress;
