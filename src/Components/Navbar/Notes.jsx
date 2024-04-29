import React from 'react';
// import mansur from '../../assets/images/100.mp4';

const VideoPlayer = () => {
  const videoRef = localStorage.getItem("videotime");
  
  return (
    <div>
        <div className='border border-gray-400 py-2 px-4 rounded-lg flex items-center gap-4 w-full'>
            <p className="w-[5%] text-center text-[13px] bg-gray-200 rounded-xl">{videoRef}</p>
            <div className='w-[95%] border-l-2 pl-4 flex items-center justify-between gap-4'>
                <input type="text" className='outline-none w-[95%]'/>
                <i className='bx bx-send text-gray-400 cursor-pointer text-[24px] w-[5%] text-end'></i>
            </div>
        </div>
        
    </div>
  );
};

export default VideoPlayer;
