import { Rating } from 'flowbite-react';
import { useState } from 'react';

function StarRatingComponent({children, handleStarRating, }) {
    const [fillStar, setFillStar] = useState(false);
    const handleStarClick = (event) => {
        handleStarRating(event)
        setFillStar(!fillStar);
    }
  return (
    <Rating className='text-nav-pink lg:text-2xl text-xs'>
      <Rating.Star id='1' className='text-nav-pink' />
      <Rating.Star id='2' className='text-nav-pink' />
      <Rating.Star id='3' className='text-nav-pink' />
      <Rating.Star id='4' className='text-nav-pink' />
      <Rating.Star id='5' className={`${fillStar ? "text-nav-pink" : ""}`}  onClick={handleStarClick} filled={fillStar}  />
      {children}
      {/* <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
    </Rating>
  );
}

export default StarRatingComponent;
