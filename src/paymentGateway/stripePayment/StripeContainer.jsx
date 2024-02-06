import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import Paymentform from './Paymentform'


const PUBLIC_KEY = "pk_test_51OfoSySAIpI3JctnWr7Abri6c53A1ZpApksLQAVyhBO4jezk3h7nt7p7Xiq0KDOPCZa7Whr2XKiomzso6cLR3vHk00NuVWgWFI"
const stripeTestPromise  = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return <>
  <Elements stripe={stripeTestPromise}>
        <Paymentform />
  </Elements>

  </>
}
