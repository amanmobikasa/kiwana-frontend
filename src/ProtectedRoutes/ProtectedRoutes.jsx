import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toastFailed } from '../common/toast';

export default function ProtectedRoutes({Component}) {

    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const USER_TOKEN = sessionStorage.getItem('userLoginToken');
    
    useEffect(() => {
        if (USER_TOKEN) {
          setIsAuth(true);
        } else {
            navigate("/login");
            toastFailed("You need to login first");
        }
      }, [USER_TOKEN]);
    
      

  return (
    <>
        {
            isAuth ? <Component /> : null
        }
    </>
   
  )
}
