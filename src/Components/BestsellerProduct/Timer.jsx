import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';


const Timer = ({endTime}) => {
    const [time, setTime] = useState(moment.duration(endTime - Date.now()));
    const intervalRef = useRef();
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTime(moment.duration(endTime - Date.now()));
      }, 1000);
  
      return () => {
        clearInterval(intervalRef.current);
      }
    }, [endTime]);
  
    return <>
    <div className='flex items-center justify-center lg:justify-start mt-10 lg:mt-0  '>
                    <p className=' lg:text-[3.5rem] md:text-6xl font-[400] text-gray-400 text-[3.3rem] leading-8'>
                        <p className='space-x-0'><span>{time.days()}</span> : <span>{time.hours()}</span> : <span>{time.minutes()}</span> : <span>{time.seconds()}</span></p>
                        <p className='text-[13px] md:text-[16px] font-[300] tracking-wider flex space-x-9 md:space-x-10'>
                            <span>DAYS</span>
                            <span>HOURS</span>
                            <span>MINUTES</span>
                            <span>SECONDS</span>
                        </p>
                    </p>
                </div>

    </>
}
export default Timer;  