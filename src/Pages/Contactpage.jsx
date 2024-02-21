import React, { useEffect, useState } from 'react'
import BreadcrumbComp from '../Components/Breadcrumb/Breadcrumb';
import ContactAddress from '../Components/ContactAdress/ContactAddress';
import SendMessageContact from '../Components/SendMessageContact/SendMessageContact';
import { useParams, useRoutes } from 'react-router-dom';
// import GoogleMapComp from '../Components/Googlemap/Googlemap';
const ContactPage = () => {
    
    return <>
    <section id='contact-page' className='w-full lg:px-[50px] xs:px-[15px] mx-auto h-fit bg-white py-[3rem]'>
        <div>
            <BreadcrumbComp/>
        </div>
        <div className=' relative  mt-[1.3rem] gap-[4rem] lg:flex lg:flex-row xs:flex-col xs:space-y-[2rem] md:space-y-[4rem] lg:-space-y-0   w-full h-full '>
            <ContactAddress/>
            <SendMessageContact/>
        </div>
        
    </section>
    <div className='w-full h-fit relative mt-[6rem]  bg-white'>
        <iframe className='w-full h-[30rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5798.233183740218!2d77.2765650413963!3d28.36215243911657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdeae61ea2b89%3A0x5d8b9ec9a9a6b517!2sChacha%20Chowk%2C%20Block%20A%2C%20Nangla%20Gujran%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1704003720603!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
}
export default ContactPage;