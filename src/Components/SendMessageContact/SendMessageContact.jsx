import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactCreateSlice } from '../../Redux/reducer/createContactSlice';
import { toastFailed, toastSuccess } from '../../common/toast';
import GlobalPostData from '../../Customhooks/usePostData';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';


const SendMessageContact = () => {

    const [contactData, setContactData] = useState({})
    const dispatch = useDispatch();
    const {error, isLoading, message, postData, response} = GlobalPostData()
    const [disable, setDisable] = useState(false);

    // handle the contact details;
    const handleContactDetails = (event, data) => {
        const {name, value} = event.target;
        setContactData({...contactData, [name] : value})
        data.value = value; 
    }

    
    // handle the submit contact details;
    const handleSubmitContactDetails = (event) => {
        event.preventDefault();
        if (!contactData || Object.keys(contactData).length === 0) {
            return toastFailed("Please fill out the form first!");
        }
        if (!isEmail(contactData?.email) || !isMobilePhone(contactData?.phone_number)) {
            return toastFailed("Invalid Email or Phone Number");
        }
        if (contactData) {
            dispatch(contactCreateSlice(contactData)); // setting the contact data to redux.
            postData("http://localhost:4000/contactus", contactData);
            toastSuccess("message is delievered, We will reach out you soon!")
            setContactData({});
        }
        if (response) {
            toastSuccess(message);
        }
        else if (error) {
            toastFailed(error);
        }
    }
        
    return <>
    <div id='send-message' className='w-full text-black h-fit lg:h-[30rem] xs:h-[34rem]  relative mt-[1rem] bg-white'>
        <div className='content-container w-11/12 mx-auto border-[0.01rem]  '>
            <div className='inner-container lg:px-[40px] xs:px-[0.5rem] xs:py-[1rem] w-full '>
                <div className='space-y-[20px]'>
                    <div>
                        <h1 className='text-[40px] font-[500] font-playfair'>Send Message:</h1>
                    </div>
                    <div className='w-11/12'>
                        <p className='text-[18px] font-[300] capitalize'>lorem ipsum dolor amet consecterur. Blandit Fermentum ac id leo.</p>
                    </div>
                </div>
                <form autoComplete={true} onSubmit={handleSubmitContactDetails} className='mt-[30px]  ml-2 w-full'>
                    <div className='form-inner-container w-full xs:w-auto lg:space-y-[1.2rem]'>
                    {
                        sendMessageContact_api.map((data, i)=>{
                            return <>
                            <div key={i} className='two-input-div lg:w-full  gap-4 md:mb-[1.4rem] lg:mb-0 lg:flex xs:pr-3 lg:pr-0'>
                                <label htmlFor='name' className='w-full' >
                                    <input onChange={(event)=>handleContactDetails(event, data.children[0])}  type={data.children[0].inputType} className='py-3 px-2 xs:mb-[1.4rem]  lg:mb-0 border-[0.01rem] w-full  font-poppins placeholder:text-gray-300 border-nav-pink' placeholder={data.children[0].placeholder} name={data.children[0].name} value={data.children[0].value} />
                                </label> 
                                {data.children[1]?.hidden ? "" : <label htmlFor='name' className='w-full h-auto' >
                                    <input onChange={(event)=>handleContactDetails(event, data.children[1])} id='name' type={data.children[1]?.inputType} className={`py-3 px-2 ${data.children[1]?.inputCss ? data.children[1]?.inputCss : "" }  border-[0.01rem] w-full  font-poppins placeholder:text-gray-300 border-nav-pink`} placeholder={data.children[1]?.placeholder} name={data.children[1]?.name} value={data.children[1].value} />
                                </label> }
                            </div>
                            </>
                        })
                    }
                    <div className='w-full xs:pr-3 lg:pr-0'>
                        <button type='submit' className='uppercase py-3 px-12 text-white bg-nav-pink tracking-wider text-[18px] hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem] xs:w-full lg:w-auto'>{ isLoading ? "Loading..." : "Submit"}</button>
                    </div>
                         
                    </div>

                </form>
            </div>
        </div>
    </div>

    </>
}

const sendMessageContact_api = [
    
    {
        id : 1,
        children : [{
        inputType : "text",
        placeholder : "Your Name",
        name : "name",
        value : "",
        inputCss : ""
    },
    {
       
        inputType : "email",
        placeholder : "Email Address",
        name : "email",
        value : "",
        inputCss : ""
    }]},
    {
        id : 2,
        children :  [{
        
        inputType : "text",
        placeholder : "Phone Number",
        name : "phone_number",
        value : "",
        inputCss : ""
    },
    {
        
        inputType : "text",
        placeholder : "Subject",
        name : "subject",
        value : "",
        inputCss : ""
    }]},
    {
        id : 3,
        children : [{
        
        inputType : "textarea",
        placeholder : "Message",
        name : "message",
        value : "",
        inputCss : ""
    },
    {
        hidden : true,
        inputType : "textarea",
        placeholder : "Message",
        name : "user_message",
        value : "",
        inputCss : ""
    }
]}

]
export default SendMessageContact