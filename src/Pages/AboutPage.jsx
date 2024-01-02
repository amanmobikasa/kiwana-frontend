import React from 'react'
import AboutKiwanaComp from '../Components/AboutusComp/AboutKiwanaComp';
import WhyTrustUs from '../Components/whyTrustUs/whyTrustus';
import AboutKiwanaCompVideo from '../Components/AboutusComp/AboutKiwanaVideoComp';

const AboutUsPage = () => {
    return <>
    <section id='about-us' className='w-full relative h-fit'>
        <div className='w-11/12 lg:w-full mx-auto '>
            <AboutKiwanaComp/>
                <div className='py-[50px] '>
                    <WhyTrustUs bgColor = {"#fff"} />
                </div>
                <div>
                    <AboutKiwanaCompVideo/>
                </div>
        </div>
    </section>
    </>
}
export default AboutUsPage;