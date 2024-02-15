import { Label, Textarea } from "flowbite-react";
import React, { memo } from "react";

const UserReviewCommon = ({placeholderText, disableArea, labelName})=> {
  return (
    <>
    <form className="">
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value={labelName ? labelName : "Write Your Review here"} />
        </div>
        <Textarea
          className="rounded-none resize-none "
          id="comment"
          placeholder={placeholderText ? placeholderText : "Leave a review..."}
          required
          disabled = {disableArea ? disableArea : false}
          rows={5}
        />
        <div className="flex justify-end w-full mt-4">
            <button className="bg-nav-pink text-white px-6 py-2 active:bg-transparent active:text-nav-pink border-[0.01rem] active:border-nav-pink">Save</button>
        </div>
      </div>
      </form>
    </>
  );
}

export default memo(UserReviewCommon);
