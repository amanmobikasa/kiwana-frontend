import { Label, Textarea } from "flowbite-react";
import React, { memo, useState } from "react";

const UserReviewCommon = ({onChangeModal, placeholderText, disableArea, labelName, valueAddress})=> {

  // const [valueAddressState, setValueAddressState] = useState(valueAddress);

  const handleAddressChange = (event) => {
    // const { value } = event.target;
    onChangeModal(event);
    // setValueAddressState(value);
  }

  return (
    <>
    <form className="w-full">
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value={labelName ? labelName : "Write Your Review here"} />
        </div>
        <Textarea
          onChange={handleAddressChange}
          className="rounded-none resize-none "
          id="comment"
          placeholder={placeholderText ? placeholderText : "Leave a review..."}
          required
          value={valueAddress ? valueAddress : ""}
          disabled = {disableArea ? disableArea : false}
          rows={5}
        />
        {/* <div className="flex justify-end w-full mt-4">
            <button className="bg-nav-pink text-white px-6 py-2 active:bg-transparent active:text-nav-pink border-[0.01rem] active:border-nav-pink">Save</button>
        </div> */}
      </div>
      </form>
    </>
  );
}

export default memo(UserReviewCommon);
