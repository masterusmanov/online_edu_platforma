// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {FaStar} from "react-icons/fa"

const Star = () => {
    const [rating, setRating] = useState(null);
    const [ratecolor, setColor] = useState(null);

    const handleRatingChange = (currentRate) => {
        console.log(currentRate);
        setRating(currentRate);
        setColor(currentRate);
      };
    

  return (
    <div className='flex justify-center items-center gap-4 w-full'>
        {[...Array(5)].map((star, index) => {
            const currentRate = index + 1
            return(
                <>
                    <label >
                        <input type="radio" name='rate' value={currentRate} onClick={() => handleRatingChange(currentRate)} className='hidden'/>
                        <FaStar size={50} color={currentRate <=(ratecolor || rating) ? "yellow" : "gray"}/>
                    </label>
                </>
            )
        })}
    </div>
  );
};

export default Star;
