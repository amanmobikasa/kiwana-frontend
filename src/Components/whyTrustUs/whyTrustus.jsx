import React from 'react'
const WhyTrustUs = () => {
    return <>
    <section id='why-trust-us' className='w-full h-fit relative bg-[#FFF8F7] my-[3rem] md:mb-[15rem] lg:mt-[2rem] lg:mb-[4rem] '>
        <div className='w-10/12 mx-auto text-center relative lg:space-y-[3rem]'>
            <h1 className='text-[25px] font-[500] text-black font-playfair md:text-[35px] lg:text-[45px] '>Why Trust Us?</h1>
            <div className='flex flex-col justify-center mt-[3rem]  w-5/12 mx-auto md:items-center space-y-[1.3rem] md:space-y-[5rem] lg:flex-row lg:justify-evenly lg:w-11/12 lg:space-y-0 '>
                {/* item 1 */}
                {
                    why_trust_us_api.map((data, i)=>{
                        return <>
                        <div key={i} id='item 1' className=' w-full flex flex-col items-center'>
                            {data.svg}
                            <h6 className='pt-[1.5rem] text-black font-playfair font-[14px] md:text-[20px]'>{data.heading}</h6>
                            <p className='text-nav-pink text-[10px] md:text-[16px]'>{data.paragraph}</p>
                        </div>

                        </>
                    })
                }
                
            </div>
        </div>

    </section>
    </>
}
export default WhyTrustUs;

const why_trust_us_api = [
    {
        id : 1,
        svg : <div ><svg className='md:h-[5rem] md:w-[5rem]' xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
        <path d="M25.7915 1.55211L25.7483 0C25.2174 0.0148027 24.6808 0.0457539 24.1529 0.0921289L24.2886 1.63886C24.7886 1.59501 25.2898 1.56608 25.7915 1.55211ZM28.9418 0.100617C28.4111 0.0521623 27.8791 0.0195749 27.3464 0.00289844L27.2977 1.5548C27.7981 1.57054 28.3037 1.60149 28.8005 1.64693L28.9418 0.100617ZM46.5358 9.14488C42.4095 4.38254 36.7248 1.23919 30.5286 0.293881L30.2945 1.82881C42.3535 3.6687 51.4473 14.2705 51.4473 26.4894C51.4473 35.2097 46.7955 43.4146 39.3073 47.9023L40.1055 49.2341C43.9642 46.9216 47.1951 43.6419 49.4489 39.7495C51.7721 35.7373 53 31.1521 53 26.4894C53 20.1159 50.7042 13.9562 46.5358 9.14488ZM1.55273 26.4894C1.55263 14.2262 10.6844 3.6186 22.7938 1.81556L22.5652 0.279803C16.3477 1.20554 10.6401 4.34176 6.49395 9.11072C2.30622 13.9274 -0.000103512 20.0993 3.48444e-09 26.4894C3.48444e-09 31.1353 1.21972 35.7064 3.52719 39.7082C5.76561 43.59 8.97656 46.867 12.8129 49.1849L13.6159 47.8559C6.06229 43.2922 1.55273 35.3047 1.55273 26.4894ZM14.2057 49.97C14.6779 50.2176 15.1576 50.4509 15.6439 50.6696L16.2804 49.2533C15.8227 49.0475 15.3713 48.8279 14.9269 48.5949L14.2057 49.97ZM36.6362 49.2907L37.2677 50.7093C37.7551 50.4924 38.2357 50.2607 38.709 50.0146L37.9929 48.6369C37.5473 48.8684 37.0949 49.0864 36.6362 49.2907ZM29.363 38.5558C28.3458 38.5558 27.3661 38.822 26.5 39.3297C25.6339 38.822 24.6542 38.5558 23.637 38.5558C20.5067 38.5558 17.96 41.1025 17.96 44.2328C17.96 49.3475 25.8696 52.6389 26.2062 52.7765L26.5 52.8965L26.7938 52.7764C27.1304 52.6388 35.04 49.3473 35.04 44.2327C35.04 41.1025 32.4933 38.5558 29.363 38.5558ZM26.5 51.2105C25.1376 50.5945 19.5127 47.8322 19.5127 44.2327C19.5127 41.9586 21.3628 40.1085 23.637 40.1085C24.5085 40.1085 25.3415 40.377 26.0459 40.8849L26.5 41.2124L26.9541 40.8849C27.6586 40.3769 28.4916 40.1085 29.363 40.1085C31.6372 40.1085 33.4873 41.9586 33.4873 44.2327C33.4873 47.8323 27.8622 50.5947 26.5 51.2105Z" fill="#363636"/>
        <path d="M21.2796 8.58781C20.5181 8.33916 19.7056 8.40169 18.9917 8.76368C18.4504 9.0381 18.0152 9.46003 17.7278 9.97916C17.6083 9.71754 17.4525 9.47408 17.265 9.256C16.7114 8.61338 15.9127 8.23575 15.0738 8.21981C14.2601 8.20418 13.4956 8.50883 12.9164 9.07713C12.337 9.64553 12.018 10.4055 12.018 11.217V19.6995C9.64 20.0734 7.81543 22.1366 7.81543 24.6179C7.81543 27.5144 10.172 29.8709 13.0684 29.8709H14.8043C15.6652 29.8709 16.4044 30.4031 16.71 31.1557C14.8612 31.2574 13.3884 32.7937 13.3884 34.6674V35.4438H22.2043V33.8911H15.1011C15.4026 33.193 16.098 32.703 16.9056 32.703H18.4128V31.9266C18.4128 29.9369 16.7941 28.3182 14.8044 28.3182H13.0685C11.0281 28.3182 9.36827 26.6582 9.36827 24.6179C9.36827 22.7288 10.9053 21.1918 12.7944 21.1918H13.5708V11.217C13.5708 10.8258 13.7246 10.4595 14.0039 10.1855C14.2831 9.91157 14.6491 9.76509 15.0444 9.77224C15.4482 9.7799 15.8191 9.95649 16.0888 10.2695C16.2275 10.4306 16.3306 10.6191 16.3916 10.8226C16.4526 11.0262 16.47 11.2404 16.4427 11.4512L15.2225 20.8281L17.6709 22.2461L18.0748 21.9699C18.1958 21.8872 30.2637 13.7285 38.0236 16.4876C40.8186 17.4815 42.5997 19.3583 43.3172 22.0663C44.0626 24.879 43.4633 27.8266 41.673 30.1531C39.845 32.5287 37.0804 33.8911 34.0881 33.8911H26.0643C26.3658 33.193 27.0613 32.703 27.8688 32.703H30.615L30.2445 31.6656C28.7099 27.3691 29.3279 24.5877 32.1894 22.9127C35.1922 21.1548 37.8116 22.9772 37.9217 23.0556L38.3751 22.4254L38.8312 21.7971C38.6889 21.6937 35.3003 19.2926 31.405 21.5727C29.4591 22.7118 28.3036 24.3164 27.9705 26.3421C27.7419 27.7334 27.8958 29.3141 28.4419 31.1504H27.8688C25.9295 31.1504 24.3516 32.7282 24.3516 34.6675V35.4439H34.0881C37.5663 35.4439 40.7795 33.8606 42.9036 31.1002C44.9902 28.3886 45.688 24.9509 44.8181 21.6687C43.9615 18.4359 41.8505 16.2006 38.5438 15.0248C34.9445 13.7451 30.2441 14.3196 24.5729 16.732C22.8493 17.4652 21.3103 18.255 20.089 18.9351L23.053 12.7292C23.2365 12.3442 23.3358 11.9246 23.3444 11.4982C23.353 11.0719 23.2706 10.6486 23.1028 10.2566C22.9349 9.86485 22.6855 9.5134 22.3711 9.22564C22.0567 8.93789 21.6846 8.72045 21.2796 8.58781ZM21.6516 12.0604L17.6833 20.3692L17.6099 20.4164L16.8957 20.0028L17.4706 15.5852L18.9745 10.9879C19.0329 10.8074 19.1266 10.6402 19.2501 10.4961C19.3736 10.352 19.5245 10.2338 19.694 10.1484C19.8631 10.0622 20.0476 10.0102 20.2368 9.99565C20.4261 9.98107 20.6164 10.0041 20.7967 10.0634C21.1976 10.1949 21.5097 10.4805 21.6754 10.8676C21.7564 11.0567 21.7962 11.2609 21.7921 11.4666C21.788 11.6723 21.7401 11.8747 21.6516 12.0604Z" fill="#E89689"/>
        <path d="M11.8525 23.0562H13.4053V24.6089H11.8525V23.0562Z" fill="#E89689"/>
        </svg></div>,
        heading : "Cruelty Free",
        paragraph : "Lorem ipsum dolor sit"
    },
    {
        id : 2,
        svg : <svg className='md:h-[5rem] md:w-[5rem]' xmlns="http://www.w3.org/2000/svg" width="56" height="51" viewBox="0 0 56 51" fill="none">
        <path d="M22.4752 24.4037C22.1895 24.3639 21.8988 24.3811 21.6198 24.4544C21.3408 24.5278 21.0792 24.6557 20.85 24.8309C19.8862 25.563 19.6976 26.943 20.4299 27.9071C20.8613 28.4748 21.5172 28.7735 22.1806 28.7735C22.6435 28.7735 23.11 28.6281 23.5061 28.327C24.47 27.5947 24.6585 26.2146 23.9262 25.2508C23.7523 25.0207 23.5345 24.8273 23.2855 24.6819C23.0364 24.5365 22.761 24.442 22.4752 24.4037ZM22.6995 27.2653C22.3212 27.5529 21.7793 27.4788 21.4918 27.1005C21.2043 26.722 21.2782 26.1802 21.6567 25.8926C21.7466 25.8238 21.8493 25.7736 21.9588 25.7448C22.0683 25.716 22.1825 25.7093 22.2946 25.7249C22.4068 25.7399 22.515 25.7771 22.6128 25.8341C22.7106 25.8912 22.7961 25.9672 22.8643 26.0575C23.1518 26.4359 23.0778 26.9777 22.6994 27.2653H22.6995ZM15.1907 33.7038C14.2268 34.4362 14.0383 35.8161 14.7706 36.7801C14.9445 37.0102 15.1623 37.2036 15.4113 37.349C15.6604 37.4944 15.9359 37.5889 16.2217 37.6272C16.3217 37.6409 16.4224 37.6478 16.5233 37.6479C16.9997 37.6479 17.461 37.4933 17.8469 37.2001C18.3138 36.8455 18.6146 36.3301 18.694 35.749C18.7733 35.168 18.6216 34.5908 18.2669 34.1239C17.5347 33.1601 16.1546 32.9718 15.1907 33.704V33.7038ZM17.3728 35.5686C17.3578 35.6808 17.3207 35.7889 17.2636 35.8867C17.2065 35.9845 17.1306 36.07 17.0403 36.1383C16.9502 36.207 16.8475 36.2571 16.738 36.2859C16.6285 36.3147 16.5144 36.3215 16.4022 36.306C16.29 36.291 16.1818 36.2538 16.084 36.1968C15.9862 36.1397 15.9007 36.0637 15.8325 35.9734C15.545 35.595 15.6189 35.0532 15.9973 34.7656C16.1469 34.6517 16.3298 34.5902 16.5178 34.5904C16.6508 34.5901 16.7821 34.6207 16.9014 34.6797C17.0206 34.7388 17.1246 34.8247 17.205 34.9306C17.2738 35.0206 17.3241 35.1233 17.3529 35.2328C17.3816 35.3424 17.3884 35.4565 17.3727 35.5687L17.3728 35.5686ZM22.4752 38.4901C22.1895 38.4503 21.8988 38.4675 21.6198 38.5408C21.3408 38.6141 21.0792 38.7421 20.85 38.9173C20.6199 39.0911 20.4265 39.3089 20.281 39.558C20.1356 39.8071 20.0411 40.0825 20.0028 40.3684C19.963 40.6541 19.9803 40.9448 20.0536 41.2238C20.1269 41.5027 20.2548 41.7644 20.4299 41.9936C20.8613 42.5613 21.5172 42.86 22.1806 42.86C22.6435 42.86 23.11 42.7145 23.5061 42.4135C24.47 41.6811 24.6585 40.3011 23.9262 39.3372C23.7523 39.1071 23.5345 38.9137 23.2855 38.7684C23.0364 38.623 22.761 38.5284 22.4752 38.4901ZM22.6996 41.3517C22.3212 41.6392 21.7793 41.5653 21.4919 41.1868C21.4231 41.0968 21.3729 40.9941 21.3441 40.8846C21.3153 40.7751 21.3085 40.6609 21.3242 40.5488C21.3392 40.4365 21.3764 40.3284 21.4335 40.2306C21.4906 40.1328 21.5665 40.0473 21.6569 39.9791C21.7468 39.9103 21.8495 39.86 21.959 39.8313C22.0685 39.8025 22.1827 39.7957 22.2948 39.8114C22.4071 39.8264 22.5152 39.8635 22.613 39.9206C22.7108 39.9777 22.7963 40.0536 22.8645 40.144C23.152 40.5223 23.078 41.0641 22.6996 41.3517Z" fill="#E89689"/>
        <path d="M55.1794 40.5329C56.5032 35.8758 55.9815 31.7213 55.3108 29.0562C54.5825 26.1622 53.5455 24.3792 53.5017 24.3048C53.2797 23.8995 52.6593 23.8613 52.3944 24.2414C52.3801 24.2602 50.8848 26.1493 44.8436 29.1471C43.9798 29.5758 43.1815 30.033 42.4473 30.5173C41.1302 29.7379 39.7171 29.2013 38.2954 28.8428L32.5408 18.8784V17.547C32.5408 17.3701 32.4706 17.2005 32.3455 17.0755C32.2205 16.9505 32.0509 16.8802 31.8741 16.8802C31.6973 16.8802 31.5277 16.9505 31.4026 17.0755C31.2776 17.2005 31.2074 17.3701 31.2074 17.547V19.0572C31.2073 19.1743 31.2381 19.2893 31.2967 19.3907L36.5498 28.4868C36.001 28.4004 35.4492 28.3342 34.8954 28.2884L29.7845 19.4384C29.7259 19.3371 29.6417 19.253 29.5404 19.1945C29.439 19.136 29.3241 19.1052 29.2071 19.1052H17.0105C16.8934 19.1052 16.7785 19.136 16.6771 19.1945C16.5758 19.253 16.4916 19.3371 16.4331 19.4384L3.13994 42.4565C2.83026 42.9933 2.66713 43.6021 2.6669 44.2218C2.6669 46.1683 4.25037 47.7518 6.19676 47.7518H33.8662C34.6079 48.2336 35.397 48.6784 36.2328 49.0852H6.19676C3.51508 49.0852 1.33345 46.9035 1.33345 44.2218C1.33374 43.368 1.55853 42.5292 1.98528 41.7897L14.9211 19.3906C14.9796 19.2892 15.0104 19.1742 15.0104 19.0571V10.1292C15.2438 10.1621 15.4818 10.1802 15.724 10.1802H30.4937C30.736 10.1802 30.974 10.1621 31.2074 10.1292V12.4353C31.2074 12.6121 31.2776 12.7817 31.4026 12.9067C31.5277 13.0318 31.6973 13.102 31.8741 13.102C32.0509 13.102 32.2205 13.0318 32.3455 12.9067C32.4706 12.7817 32.5408 12.6121 32.5408 12.4353V9.74895C34.3307 8.95944 35.5838 7.16884 35.5838 5.09022C35.5838 2.28342 33.3004 0 30.4937 0H15.7241C12.9174 0 10.634 2.28342 10.634 5.09022C10.634 7.16895 11.8871 8.95944 13.6771 9.74895V18.8784L0.830627 41.1228C0.286858 42.0651 0.000407242 43.1338 0 44.2218C0 47.6388 2.77991 50.4187 6.19676 50.4187C6.42344 50.4183 39.8176 50.4192 40.0263 50.4184C40.9897 50.4093 43.4923 50.2889 46.2465 49.3767C50.8778 47.8426 53.9651 44.7891 55.1755 40.5459L55.1765 40.5426L55.1794 40.5332V40.5329ZM11.9675 5.0901C11.9675 3.01859 13.6527 1.33334 15.7241 1.33334H30.4938C32.5652 1.33334 34.2505 3.01859 34.2505 5.0901C34.2505 7.16162 32.5652 8.84676 30.4938 8.84676H15.7241C13.6527 8.84676 11.9675 7.1615 11.9675 5.0901ZM53.9795 39.8585C50.9288 41.0812 48.0006 41.5364 46.3939 41.7036C48.3374 38.5083 49.7696 35.5116 50.7727 33.1242C51.9362 30.3547 52.6769 28.0692 53.1035 26.5943C54.0922 29.0489 55.5298 34.0539 53.9795 39.8585ZM45.4365 30.3417C48.5304 28.8064 50.4913 27.5389 51.7006 26.6281C51.2671 28.0763 50.5676 30.1733 49.5298 32.6395C47.7733 36.8138 44.6755 42.8921 39.7794 48.573C37.7279 44.4339 37.1784 40.7997 38.1483 37.7598C39.1044 34.7628 41.5565 32.267 45.4364 30.3417H45.4365ZM34.5086 46.5922C31.1286 44.3789 28.8349 41.3254 27.7489 37.5037C26.9753 34.7969 27.0067 32.33 27.1267 30.918C29.0328 32.678 33.3813 36.5851 36.5579 38.6203C35.9972 41.5475 36.5761 44.8731 38.2851 48.5407C36.9016 47.9822 35.6414 47.3331 34.5086 46.5921V46.5922ZM34.4702 29.608V35.4709C31.988 33.5284 29.395 31.1925 28.0424 29.9464C29.4283 29.7144 31.8221 29.4271 34.4702 29.608ZM36.9107 37.2575C36.5364 37.0066 36.1672 36.7479 35.8036 36.4816V29.7387C37.638 29.9758 39.5313 30.4678 41.2507 31.3757C39.1005 33.0563 37.6465 35.0243 36.9107 37.2575ZM6.19676 46.4182C4.98565 46.4182 4.00034 45.4329 4.00034 44.2217C4.00034 43.8367 4.10213 43.4568 4.2947 43.1233L17.3954 20.4384H28.8223L33.3088 28.2071C29.6168 28.1325 26.6887 28.8433 26.4716 28.8976C26.3502 28.928 26.2397 28.9919 26.1529 29.0821C26.0661 29.1723 26.0064 29.2851 25.9807 29.4076C25.9476 29.5657 25.1842 33.3279 26.4506 37.8136C27.1972 40.458 28.4977 42.801 30.3158 44.7772C30.8489 45.3566 31.4281 45.9029 32.0495 46.4181H6.19676V46.4182ZM45.8644 48.0982C44.0435 48.706 42.3115 48.9414 41.1424 49.0311C42.7995 47.0687 44.2478 45.0677 45.5077 43.1165C46.5594 43.0576 49.7927 42.778 53.4389 41.4873C52.1395 44.6312 49.5979 46.8521 45.8644 48.0982Z" fill="#363636"/>
        <path d="M44.0301 24.8658C44.0749 24.941 44.1342 25.0066 44.2044 25.0589C44.2747 25.1112 44.3546 25.1491 44.4395 25.1706C44.5244 25.192 44.6127 25.1964 44.6993 25.1837C44.786 25.1709 44.8692 25.1412 44.9444 25.0963C45.0962 25.0056 45.2058 24.8583 45.249 24.6868C45.2922 24.5153 45.2655 24.3337 45.1748 24.1819L44.6035 23.2254C44.5114 23.0764 44.3644 22.9696 44.1943 22.9281C44.0242 22.8866 43.8446 22.9137 43.6942 23.0035C43.5439 23.0933 43.4349 23.2387 43.3909 23.4081C43.3468 23.5776 43.3712 23.7576 43.4587 23.9093L44.0301 24.8658ZM41.8759 26.8918L42.9563 27.164C43.3039 27.2544 43.6772 27.0403 43.7657 26.6803C43.7871 26.5954 43.7916 26.5071 43.7789 26.4205C43.7662 26.3339 43.7365 26.2506 43.6916 26.1754C43.6467 26.1003 43.5874 26.0347 43.5172 25.9824C43.4469 25.9302 43.367 25.8923 43.2821 25.8709L42.2017 25.5987C42.1168 25.5772 42.0285 25.5727 41.9418 25.5854C41.8552 25.5981 41.7719 25.6278 41.6967 25.6727C41.6215 25.7176 41.5559 25.7769 41.5037 25.8472C41.4515 25.9175 41.4136 25.9974 41.3923 26.0824C41.3709 26.1673 41.3664 26.2556 41.3791 26.3422C41.3919 26.4288 41.4215 26.5121 41.4664 26.5873C41.5113 26.6624 41.5706 26.728 41.6409 26.7802C41.7111 26.8325 41.791 26.8704 41.8759 26.8918ZM46.9684 24.7674C47.3159 24.8577 47.6893 24.6437 47.7778 24.2838L48.0502 23.2033C48.0716 23.1184 48.0761 23.0301 48.0634 22.9435C48.0506 22.8569 48.021 22.7736 47.9761 22.6984C47.9312 22.6233 47.8719 22.5577 47.8016 22.5054C47.7314 22.4531 47.6515 22.4152 47.5666 22.3938C47.4817 22.3724 47.3934 22.3679 47.3068 22.3806C47.2201 22.3933 47.1368 22.4229 47.0617 22.4678C46.9865 22.5128 46.9209 22.5721 46.8687 22.6423C46.8164 22.7126 46.7785 22.7925 46.7572 22.8774L46.4848 23.9579C46.4634 24.0428 46.459 24.1311 46.4717 24.2177C46.4844 24.3043 46.5141 24.3876 46.559 24.4628C46.6039 24.538 46.6632 24.6035 46.7334 24.6558C46.8037 24.7081 46.8835 24.746 46.9684 24.7674Z" fill="#E89689"/>
        <path d="M31.8738 15.6577C32.242 15.6577 32.5405 15.3592 32.5405 14.9909C32.5405 14.6227 32.242 14.3242 31.8738 14.3242C31.5055 14.3242 31.207 14.6227 31.207 14.9909C31.207 15.3592 31.5055 15.6577 31.8738 15.6577Z" fill="#363636"/>
      </svg>,
        heading : "Paraben Free",
        paragraph : "Lorem ipsum dolor sit"
    },
    {
        id : 3,
        svg : <svg className='md:h-[5rem] md:w-[5rem]' xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
        <path d="M34.1211 20.3547C34.224 20.2849 34.3121 20.1955 34.3804 20.0917C34.4487 19.9878 34.4958 19.8715 34.5191 19.7494C34.5424 19.6273 34.5414 19.5018 34.5161 19.3801C34.4909 19.2584 34.4419 19.1428 34.3719 19.0401C32.2696 15.9911 29.8426 13.1792 27.1336 10.6538C26.9597 10.4976 26.7342 10.4111 26.5005 10.4111C26.2667 10.4111 26.0412 10.4976 25.8673 10.6538C25.3969 11.0778 14.3389 21.1402 14.3389 30.4275C14.3426 33.6518 15.6251 36.743 17.9051 39.0229C20.185 41.3029 23.2762 42.5854 26.5005 42.5891C36.5724 42.4027 41.561 31.973 36.8194 23.2536C36.7114 23.0269 36.5179 22.8524 36.2813 22.7685C36.0447 22.6845 35.7845 22.698 35.5578 22.8059C35.3311 22.9139 35.1566 23.1074 35.0727 23.344C34.9887 23.5806 35.0022 23.8409 35.1101 24.0675C36.1256 26.0386 36.6928 28.2097 36.7711 30.4256C36.7714 33.1493 35.6896 35.7616 33.7639 37.6877C31.8381 39.6138 29.2261 40.696 26.5024 40.6963C23.7787 40.6965 21.1664 39.6148 19.2403 37.689C17.3142 35.7633 16.232 33.1512 16.2317 30.4275C16.2317 23.1845 24.1742 14.925 26.5014 12.6602C28.8386 14.9316 30.9502 17.4242 32.8065 20.1029C32.8761 20.206 32.9654 20.2943 33.0692 20.3627C33.1731 20.4312 33.2894 20.4785 33.4115 20.5018C33.5337 20.5252 33.6592 20.5243 33.781 20.499C33.9028 20.4738 34.0183 20.4247 34.1211 20.3547Z" fill="#E89689"/>
        <path d="M46.0305 7.31684C45.9478 7.17249 45.8282 7.05265 45.6841 6.9695L33.8159 0.126822C33.6721 0.0436218 33.5088 -0.000126395 33.3427 2.74288e-07H19.6573C19.4912 -0.000126395 19.3279 0.0436218 19.1841 0.126822L7.31589 6.9695C7.17177 7.05265 7.05225 7.17249 6.9695 7.31684L0.126823 19.1851C0.043617 19.3285 -0.000137825 19.4915 1.60068e-06 19.6573V33.3427C-0.000305057 33.5089 0.0434555 33.6721 0.126823 33.8159L6.9695 45.6832C7.05225 45.8275 7.17177 45.9474 7.31589 46.0305L19.1841 52.8732C19.3279 52.9564 19.4912 53.0001 19.6573 53H33.3427C33.4796 52.9969 33.6143 52.9653 33.7383 52.9073C33.8235 52.8978 45.597 46.0608 45.6794 46.0267C45.8969 45.9012 46.0556 45.6944 46.1207 45.4519C46.1857 45.2094 46.1517 44.9509 46.0262 44.7334C45.9007 44.5159 45.694 44.3572 45.4514 44.2921C45.2089 44.2271 44.9504 44.261 44.7329 44.3866L33.0938 51.1071H19.91L8.48189 44.5172L1.89286 33.09V19.91L8.48189 8.48284L19.911 1.89286H33.089L44.5181 8.48284L51.1071 19.91V33.09L46.7564 40.6406C46.6944 40.7483 46.6542 40.8673 46.6381 40.9906C46.6221 41.1138 46.6305 41.2391 46.6628 41.3591C46.6951 41.4792 46.7508 41.5917 46.8266 41.6902C46.9025 41.7888 46.9969 41.8714 47.1047 41.9334C47.2125 41.9954 47.3314 42.0356 47.4547 42.0517C47.5779 42.0677 47.7032 42.0594 47.8232 42.027C47.9433 41.9947 48.0558 41.939 48.1543 41.8632C48.2529 41.7874 48.3355 41.6929 48.3975 41.5851L52.8741 33.8149C52.9567 33.6713 53.0001 33.5084 53 33.3427V19.6573C53.0003 19.4911 52.9565 19.3279 52.8732 19.1841L46.0305 7.31684Z" fill="#363636"/>
        <path d="M5.67885 24.7068C5.42784 24.7068 5.18711 24.8065 5.00962 24.984C4.83213 25.1615 4.73242 25.4022 4.73242 25.6532V32.0795C4.73261 32.2456 4.77633 32.4088 4.85924 32.5527L10.4384 42.2157C10.5214 42.3599 10.6409 42.4797 10.7848 42.5631L20.4479 48.1413C20.5917 48.2244 20.7549 48.2682 20.9211 48.2681H32.0795C32.2456 48.2682 32.4088 48.2244 32.5527 48.1413L42.2157 42.5631C42.3597 42.4797 42.4791 42.3599 42.5621 42.2157L48.1413 32.5527C48.2242 32.4088 48.268 32.2456 48.2681 32.0795V20.9211C48.268 20.755 48.2242 20.5918 48.1413 20.4479L42.5621 10.7848C42.4791 10.6407 42.3597 10.5209 42.2157 10.4375L32.5527 4.85924C32.4088 4.77613 32.2456 4.73238 32.0795 4.73242H20.9211C20.7549 4.73238 20.5917 4.77613 20.4479 4.85924L10.7848 10.4375C10.6409 10.5209 10.5214 10.6407 10.4384 10.7848L4.85924 20.4479C4.73572 20.6651 4.70314 20.9224 4.76862 21.1636C4.83411 21.4048 4.99233 21.6103 5.20876 21.7353C5.4252 21.8602 5.68228 21.8945 5.9239 21.8306C6.16552 21.7668 6.37206 21.6099 6.49846 21.3943L11.9508 11.9508L21.1747 6.62528H31.8258L41.0497 11.9508L46.3753 21.1747V31.8258L41.0497 41.0497L31.8258 46.3753H21.1747L11.9508 41.0497L6.62528 31.8258V25.6532C6.62528 25.4022 6.52557 25.1615 6.34808 24.984C6.17059 24.8065 5.92986 24.7068 5.67885 24.7068Z" fill="#363636"/>
        <path d="M30.0903 26.9172L25.0808 31.9266L22.9107 29.7564C22.7331 29.579 22.4923 29.4793 22.2412 29.4794C21.9901 29.4795 21.7494 29.5793 21.5719 29.7569C21.3945 29.9345 21.2948 30.1753 21.2949 30.4264C21.295 30.6774 21.3948 30.9182 21.5724 31.0956L24.4117 33.9349C24.5892 34.1124 24.8299 34.212 25.0808 34.212C25.3318 34.212 25.5725 34.1124 25.75 33.9349L31.4285 28.2564C31.6061 28.0789 31.7059 27.8382 31.706 27.5871C31.7061 27.336 31.6065 27.0952 31.429 26.9176C31.2515 26.74 31.0108 26.6402 30.7597 26.6401C30.5087 26.64 30.2679 26.7397 30.0903 26.9172Z" fill="#363636"/>
      </svg>,
        heading : "Dermatologically tested",
        paragraph : "Lorem ipsum dolor sit"
    },
    {
        id : 4,
        svg : <svg className='md:h-[5rem] md:w-[5rem]' xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M50.3164 20.4535C50.2658 20.3365 50.1899 20.232 50.0943 20.1477C49.9986 20.0633 49.8855 20.0011 49.763 19.9656C49.6406 19.93 49.5117 19.9219 49.3858 19.9418C49.2598 19.9618 49.1398 20.0093 49.0343 20.081C46.2383 22.1611 42.9914 23.5531 39.557 24.144C34.905 24.8976 30.7641 25.7986 27.1776 29.1945C26.3029 30.0342 25.5557 30.9973 24.9598 32.0533C24.1717 30.5118 23.1324 29.1124 21.8845 27.9124C18.7398 24.9929 15.1014 24.2133 11.0211 23.5809C8.03701 23.0839 5.21009 21.8974 2.76526 20.1157C2.65978 20.044 2.53977 19.9964 2.4138 19.9765C2.28783 19.9565 2.15901 19.9646 2.03654 20.0002C1.91406 20.0358 1.80095 20.098 1.70529 20.1823C1.60963 20.2667 1.53377 20.3711 1.48313 20.4882C-2.61446 30.0175 1.97692 43.2372 12.8057 46.6071C16.3279 47.6195 20.0556 47.6793 23.6084 46.7804C23.8006 46.7329 23.9708 46.6211 24.0906 46.4635C24.2104 46.3058 24.2726 46.112 24.2668 45.9141C24.2668 40.3871 24.7866 36.9045 25.7135 34.4789L25.7655 34.3576C26.3227 32.8742 27.2117 31.5379 28.3644 30.4506C31.5784 27.3926 35.4507 26.5609 39.8169 25.8506C43.1403 25.2909 46.3028 24.017 49.0863 22.1168C53.1752 33.6906 46.574 51.3198 27.732 50.2456C30.7356 44.308 35.2091 39.238 40.7265 35.5185C40.8264 35.4565 40.9126 35.3748 40.9799 35.2784C41.0472 35.1821 41.0942 35.073 41.118 34.9579C41.1418 34.8427 41.142 34.724 41.1184 34.6088C41.0948 34.4936 41.0481 34.3845 40.981 34.2879C40.9139 34.1914 40.8279 34.1096 40.7281 34.0474C40.6284 33.9851 40.517 33.9439 40.4008 33.9261C40.2846 33.9083 40.166 33.9143 40.0522 33.9438C39.9384 33.9734 39.8318 34.0257 39.7389 34.0977C29.1181 41.3746 25.7828 50.2975 25.6442 50.67C25.5986 50.7942 25.582 50.9271 25.5957 51.0587C25.6095 51.1902 25.6531 51.3169 25.7234 51.4289C25.7936 51.541 25.8886 51.6355 26.001 51.7052C26.1134 51.7748 26.2403 51.8178 26.3719 51.8309C30.1022 52.2259 33.8741 51.8482 37.4519 50.722C49.7014 46.8237 54.9858 31.5508 50.3164 20.4535ZM22.5342 43.3931C21.2088 41.236 17.7782 36.6966 10.9085 32.0533C10.7178 31.9246 10.4838 31.877 10.258 31.9208C10.0321 31.9647 9.83298 32.0965 9.70431 32.2872C9.57565 32.4779 9.52801 32.7119 9.57188 32.9377C9.61574 33.1635 9.74752 33.3627 9.93822 33.4913C18.3933 39.2436 21.4427 44.8658 21.7285 45.4029C6.51633 47.9239 -1.1071 32.9196 2.69595 22.0995C5.1227 23.7131 7.86687 24.7883 10.7439 25.2528C14.6769 25.8766 17.9168 26.5696 20.6977 29.1598C22.14 30.5579 23.2681 32.2471 24.0069 34.1151C23.032 37.1113 22.535 40.2423 22.5342 43.3931Z" fill="#363636"/>
        <path d="M25.3841 26.5954C25.4646 26.6766 25.5605 26.741 25.666 26.785C25.7716 26.829 25.8848 26.8516 25.9992 26.8516C26.1135 26.8516 26.2268 26.829 26.3323 26.785C26.4379 26.741 26.5337 26.6766 26.6143 26.5954L38.2053 14.8744C43.5764 9.45133 39.86 0 32.0633 0C30.9304 0.00757068 29.8104 0.24136 28.769 0.687648C27.7277 1.13394 26.786 1.78373 25.9992 2.5989C25.2034 1.78901 24.2542 1.14574 23.2071 0.706631C22.16 0.267522 21.0359 0.041368 19.9004 0.041368C18.765 0.041368 17.6409 0.267522 16.5938 0.706631C15.5467 1.14574 14.5975 1.78901 13.8017 2.5989C12.1818 4.23968 11.2734 6.45257 11.2734 8.75829C11.2734 11.064 12.1818 13.2769 13.8017 14.9177L25.3841 26.5954ZM15.0318 3.77707C15.6679 3.13036 16.4264 2.61674 17.263 2.26615C18.0996 1.91555 18.9977 1.73499 19.9048 1.73499C20.8119 1.73499 21.7099 1.91555 22.5465 2.26615C23.3831 2.61674 24.1416 3.13036 24.7777 3.77707L25.3841 4.38347C25.4646 4.46467 25.5605 4.52912 25.666 4.5731C25.7716 4.61708 25.8848 4.63972 25.9992 4.63972C26.1135 4.63972 26.2268 4.61708 26.3323 4.5731C26.4379 4.52912 26.5337 4.46467 26.6143 4.38347L27.2293 3.7684C28.2046 2.81905 29.4379 2.1779 30.7753 1.92494C32.1126 1.67198 33.4949 1.81841 34.7495 2.34597C36.0042 2.87352 37.0758 3.75884 37.8305 4.89147C38.5853 6.0241 38.9898 7.35391 38.9937 8.71497C39.0009 10.5632 38.275 12.3389 36.9752 13.6529L25.9992 24.7588L15.0318 13.6529C13.7325 12.3378 13.0039 10.5636 13.0039 8.71497C13.0039 6.8663 13.7325 5.09212 15.0318 3.77707Z" fill="#E89689"/>
        <path d="M16.4697 12.2148C16.6291 12.2136 16.7851 12.1685 16.9206 12.0843C17.056 12.0002 17.1655 11.8803 17.2372 11.7379C17.3088 11.5955 17.3398 11.436 17.3267 11.2772C17.3135 11.1183 17.2568 10.9661 17.1628 10.8374C16.6617 10.1535 16.4197 9.31393 16.48 8.46828C16.5403 7.62263 16.8989 6.82586 17.4919 6.22001C17.5722 6.13923 17.6357 6.04346 17.6788 5.93814C17.722 5.83282 17.7441 5.72003 17.7437 5.6062C17.7433 5.49238 17.7204 5.37974 17.6765 5.27473C17.6326 5.16972 17.5684 5.0744 17.4876 4.99419C17.4068 4.91399 17.3111 4.85048 17.2057 4.80729C17.1004 4.7641 16.9876 4.74208 16.8738 4.74248C16.76 4.74289 16.6474 4.7657 16.5423 4.80964C16.4373 4.85357 16.342 4.91775 16.2618 4.99852C15.3794 5.90009 14.8462 7.08592 14.7574 8.34429C14.6685 9.60266 15.0298 10.8517 15.7767 11.8683C15.8574 11.9759 15.962 12.0632 16.0823 12.1233C16.2026 12.1835 16.3352 12.2148 16.4697 12.2148ZM19.9349 5.19777C20.1688 5.19777 20.401 5.22376 20.628 5.27574C20.8557 5.31903 21.0914 5.27124 21.2844 5.14262C21.4773 5.014 21.6121 4.81483 21.6597 4.58791C21.7074 4.36099 21.6641 4.12443 21.5392 3.92907C21.4143 3.7337 21.2178 3.59514 20.9918 3.54314C20.6426 3.48536 20.2888 3.45926 19.9349 3.46517C19.7052 3.46517 19.4848 3.55645 19.3223 3.71891C19.1599 3.88137 19.0686 4.10172 19.0686 4.33147C19.0686 4.56123 19.1599 4.78158 19.3223 4.94404C19.4848 5.1065 19.7052 5.19777 19.9349 5.19777Z" fill="#363636"/>
      </svg>,
        heading : "Vegan",
        paragraph : "Lorem ipsum dolor sit"
    },
]