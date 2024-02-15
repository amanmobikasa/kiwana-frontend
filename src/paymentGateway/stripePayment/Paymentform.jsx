import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from '../../common/toast';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function Paymentform() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    

    const handleSubmit = async(e) => {
    //    debugger
        e.preventDefault();
        console.log("event", e)
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        // console.log("testest", formProps);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card : elements.getElement(CardElement)
        })
        if(!error){
            try {
                const {id} = paymentMethod;
                // console.log("paymentMethod", paymentMethod);
                const response = await axios.post("http://localhost:4000/payment", {
                    amount : 1000,
                    id : id,
                    payment_method : id,
                    email : "amanchauhan@mobikas.com",
                    payment_intent : "testest"
                })
                if(response){
                    console.log("Successful payment");
                    setSuccess(true);
                    toastSuccess("Payment Successful");
                    navigate('/');
                }
            } catch (error) {
                console.log("Error", error);
                setSuccess(false);
                
            }
        }else{
            console.log(error.message)
        }
    }


  return (
    <>

    {
        !success ? <form onSubmit={handleSubmit} className=' space-y-3 '>
            <fieldset className='formGroup text-white bg-[#333]'>
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <div className='flex justify-end w-full '>
                <button type='submit' className='bg-nav-pink text-white px-4 py-2 '>pay</button>
            </div>
        </form> : 
        <div>
            <h1>This is a temp text integrating the strip payment</h1>
        </div>
    }

    </>
  )
}
