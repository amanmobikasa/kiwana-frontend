import React, { useEffect, useRef, useState } from 'react'
import UserReviewCommon from '../../common/UserReviewCommon'
import useUpdateUserAddress from '../../Customhooks/usePutData';
import { toastFailed, toastSuccess } from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/reducer/userAuthSlice';

function UserAddress() {
    const [disableTextArea, setDisableTextArea] = useState(true);
    const [buttonText, setButtonText] = useState("Edit");
    const [valueOfAddress, setValueOfAddress] = useState("");
    const [userInfoState, setUserInfoState] = useState(null); 
    const {updateUserAddress, loading, error, responseData} = useUpdateUserAddress()
    const btnref = useRef(null);
    const dispatch = useDispatch();
    const handleEditAddress = (event) => {
        const { value } = event.target;
        setValueOfAddress(value); // updating the value of address.
        if(valueOfAddress !== ""){
          setButtonText("Save")
        }else{
          toastFailed("Please enter the address");
        }
      }

      const userData = useSelector((state)=> state.users.usersData);

      useEffect(()=>{
        if(userData){
            setUserInfoState(userData);
        }
      },[userInfoState])

      console.log("userdata", userInfoState);

      const handleButtonFunction = () => {
        const btnInnerText = btnref.current.innerText;
        if(btnInnerText === "Edit"){
          setDisableTextArea(false);
        }
        else if(btnInnerText === "Save"){
          setUserInfoState((preVal)=>{
            const updatedData = {
              ...preVal, 
              address: valueOfAddress
            }
            dispatch(userLogin(updatedData)); // dispatch the updated data to the redux store.
            return updatedData;
          })
          setDisableTextArea(true);
          setButtonText("Edit")
          updateUserAddress("/change-address", { email : userInfoState?.email, newAddress : valueOfAddress })
        }
      }

      useEffect(()=>{
        if(responseData){
          console.log("responseData", responseData)
          toastSuccess(responseData?.message)
        //   navigate("/delivery-status")
        }else{
          console.log("responseDataError", error)
        }
      },[responseData])


  return (
    <>
        <section className="">
            <div className="">
              <UserReviewCommon size={"2xl"} onChangeModal={handleEditAddress} disableArea = {disableTextArea} placeholderText={"House No. / Loacality / Landmark / City / State / (Pincode)"} valueAddress = { valueOfAddress === "" ? userInfoState?.address :  valueOfAddress} labelName={"Address (Primary)"} />
              <div className="flex justify-end w-full mt-4">
                <button ref={btnref} onClick={handleButtonFunction} className="bg-nav-pink text-white px-6 py-2 active:bg-transparent active:text-nav-pink border-[0.01rem] active:border-nav-pink">{buttonText}</button>
              </div>
            </div>
        </section>
    </>
  )
}

export default UserAddress