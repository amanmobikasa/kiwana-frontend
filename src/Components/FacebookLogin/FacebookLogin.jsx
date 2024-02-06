import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { toastSuccess } from '../../common/toast';


const APP_ID = "1066542067897062a"

function FacebookLoginComp() {

    function responseFacebook(response){
        console.log(response);
        toastSuccess("facebook auth execute");
        console.log("access token fb :" , response.accessToken);
    } 

  return (
    <>
        <div className=''>
            <FacebookLogin 
            appId={APP_ID}
            autoLoad={false}
            fields='name, email, picture'
            callback={responseFacebook}
            version='v19.0'
            textButton='Login with facebook '
            />
        </div>
    </>
  )
}

export default FacebookLoginComp