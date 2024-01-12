import React from 'react'
import { ListGroup } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export function SearchList({searchResultArray, setShowSearchList}) {
    // console.log(searchResultArray);
  return (
    <div className='absolute z-50 w-full flex top-[8rem] justify-end h-fit right-[18.5%] '>
        <div className="w-[22%] h-fit">
            <ListGroup onMouseLeave={()=> setShowSearchList(false)} className="w-full h-fit rounded-none bg-white shadow-sm drop-shadow-md">
            {
                searchResultArray.map((items, i)=> {
                    const {title, id} = items; 
                    return <>
                    <ListGroup.Item key={i} className=' hover:text-nav-pink rounded-none'>
                        <NavLink>{title}</NavLink>
                    </ListGroup.Item>
                    </>
                })
            }
              
            </ListGroup>
        </div>
    </div>
  );
}
