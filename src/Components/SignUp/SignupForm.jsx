import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUpData } from '../../Redux/reducer/signupSlice';
import { MdTry } from 'react-icons/md';
import { toastFailed, toastSuccess } from '../../common/toast';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserJwtToken } from '../../Redux/reducer/userAuthTokenSlice';

export default function SignupForm() {

    const [signUpDataState, setSignUpDataState] = useState(null);
    const [userAuthToken, setUserAuthToken] = useState("")
    const dispatch = useDispatch();
    const naviagte = useNavigate()

    const handleSignUpData = (event, signup_data_obj) => {
        const {name, value} = event.target;
        setSignUpDataState({...signUpDataState, [name] : value})
        signup_data_obj.value = value; 
    }
    // console.log("data", signUpDataState)

    async function handleSignUpForm(event){
        event.preventDefault();
        if(signUpDataState!==null){
            dispatch(signUpData(signUpDataState));
         }

        const { first_name , last_name, user_email, date_of_birth, phone_number, user_address, password} = signUpDataState
        try {
            const response = await axios.post('http://localhost:4000/signup', {
                username : first_name + " " + last_name,
                email : user_email,
                password : password,
                phone_number : phone_number,
                address : user_address,
                date_of_birth : date_of_birth,
            })
            if(response.data.success){
                setUserAuthToken(response.data);
                toastSuccess("Signup Successfully");
                naviagte("/login");
            }else{
                console.log("response", response);
                toastFailed("Something Went Wrong");
            }
            
        } catch (error) {
            console.log("error", error);
            toastFailed("Something Went Wrong");
        }
    }
     
    // this block of code send the jwt token to session storage.
    // useEffect(()=>{
    //     if(userAuthToken!==""){
    //         dispatch(setUserJwtToken(userAuthToken.jwtToken));
    //         sessionStorage.setItem("userJwtTokens", userAuthToken.jwtToken);
    //     }
    // },[userAuthToken])


  return (
    <>
        <form onSubmit={handleSignUpForm}  className='bg-white w-full lg:w-6/12 lg:h-[800px]  relative h-auto shadow-md drop-shadow-md lg:my-[3rem] my-[10rem]'>
        <div className='pb-[80px] mx-[13px] lg:mx-[30px] flex-col space-y-6 lg:space-y-10 justify-center lg:pt-[5rem]'>
            <div className=''>
                <h1 className='text-nav-pink text-[50px] font-[400] text-center font-playfair lg:text-[58px]'>SignUp</h1>
            </div>
            <div className='content-container px-2 space-y-4  w-full h-fit'>
                <div className=' justify-center grid grid-cols-2  gap-[1rem] w-full'>
                {
                    signup_data.map((signup_data_obj, i)=>{
                        return <>

                        <label key={i} className='space-y-[8px] w-full'>
                            <p className='text-[#363636] font-[500]'>{signup_data_obj?.label_name}</p>
                            <input onChange={(event)=> handleSignUpData(event, signup_data_obj)} type={signup_data_obj?.input_type} value={signup_data_obj?.value} className='w-full py-3 px-3 text-[#363636]' name={signup_data_obj?.name}  placeholder={signup_data_obj?.placeholder}  />
                        </label>
                        </>
                    })
                }
                    
                </div>
                <div className='space-y-6 lg:space-y-5'>
                        <div className='pt-2'>
                            <a className='underline text-[#363636] font-poppins text-[17px] '>Forgot your password?</a>
                        </div>
                        <div>
                            <button type='submit' className='uppercase w-full text-[20px] text-white bg-nav-pink py-3 tracking-wider hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem]'>Create Account </button>
                        </div>
                        <div className='pt-2 lg:pt-0'>
                            <NavLink to={'/login'}><a className='underline text-[#363636] font-poppins text-[17px] lg:text-[14px]'>Already customer?Sign In for an account</a></NavLink>
                        </div>
                    </div>
            </div>
        </div>
    </form>
    </>
  )
}


// sign up data 

const signup_data = [
    {
        id : 1,
        label_name  : "First Name",
        input_type : "text",
        placeholder : "John",
        name : "first_name",
        value : "",
    },
    {
        id : 2,
        label_name  : "Last Name",
        input_type : "text",
        placeholder : "Doe",
        name : "last_name",
        value : "",
    },
    {
        id : 3,
        label_name  : "Email",
        input_type : "email",
        placeholder : "example@domain.com",
        name : "user_email",
        value : "",
    },
    {
        id : 4,
        label_name  : "Date of Birth (DOB) (Optional)",
        input_type : "date",
        placeholder : "07.08.2002",
        name : "date_of_birth",
        value : "",
    },
    {
        id : 5,
        label_name  : "Enter your password",
        input_type : "password",
        placeholder : "*********",
        name : "password",
        value : "",
    },
    {
        id : 6,
        label_name  : "Enter your password again",
        input_type : "text",
        placeholder : "",
        name : "re_password",
        value : "",
    },
    {
        id : 7,
        label_name  : "Phone Number",
        input_type : "text",
        placeholder : "+91 98XXXXXXXX",
        name : "phone_number",
        value : "+91 ",
    },   
    {
        id : 8,
        label_name  : "Shipping Address",
        input_type : "text",
        placeholder : "House no. / Locality / Landmark / City / State / Pincode",
        name : "user_address",
        value : "",
    },      
]
