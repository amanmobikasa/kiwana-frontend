import React from 'react'
import { GoogleLogout } from 'react-google-login';


const CLIENT_ID = "826747554533-t0h1gs01tcprer0jt1gl38gqsvso36nf.apps.googleusercontent.com";


export default function GoogleLogoutbutton() {

    const responseSuccess = () => {
        console.log("Logout Success");
    }

  return (
    <div className='google_logout_button'>
        <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={responseSuccess}
            className='w-full '
        />
        
    </div>
  )
}
