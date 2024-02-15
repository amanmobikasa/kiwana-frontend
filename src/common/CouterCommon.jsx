import React, { useCallback, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

function CouterCommon({children}) {

    const [counter, setCounter] = useState({
        count: 0,
        product_id : 1
    });

    const handleCounter = useCallback((event, type, productId)=>{
        if(type === "increment"){
            
            setCounter({
                ...counter,
                count: counter.count + 1,
                product_id : productId
            })
        }else if(type === "decrement"){
            setCounter({
                ...counter,
                count: counter.count - 1,
                product_id : productId
            })
            if(counter.count <= 0){
                setCounter({
                    ...counter,
                    count: 0,
                    product_id : productId
                })
            }
        }
    })

    const { count, product_id } = counter;
  return (
    <>
      <div
        id="item-count-container"
        className="w-5/12 lg:w-4/12 h-fit py-[1px] lg:py-[2px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]">
        <button onClick={(event)=>handleCounter(event, "decrement", product_id)}>
          <LuMinus className="text-[1rem] text-[#E89689] font-thin" />
        </button>
        <input
          type="text"
          value={count ? count : 0}
          className="bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]"
        />
        <button onClick={(event)=>handleCounter(event, "increment", product_id)}>
          <LuPlus className="text-[1rem] text-[#E89689] font-thin" />
        </button>
      </div>
    </>
  );
}

export default React.memo(CouterCommon);
