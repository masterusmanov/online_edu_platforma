import React from 'react';

const Comment = () => {

    const cards = [
        {
            id: 1,
            title: "Kirish",
            notes: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 2,
            title: "Kirish",
            notes: "Lorem ipsum dolor sit amet."
        }
    ]
  
  return (
    <div>
        <div>
            <h1 className='text-[#77BF44] font-[700] text-[14px]'>Mening izohlarim</h1>
            <div className='my-4 flex flex-col gap-4'>
            {cards.map(item => (
                // eslint-disable-next-line react/jsx-key
                    <>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-[14px] font-[700]'>{item.id}-dars: {item.title}</h1>
                            <p>{item.notes}</p>
                        </div>
                        <div className='flex items-center gap-6 text-[20px] text-gray-500'>
                            <i className='bx bx-edit-alt text-blue-600 flex items-center'><span className='text-[14px] pl-2'>Tahrirlash</span></i>
                            <i className='bx bx-trash text-red-600 flex items-center'><span className='text-[14px] pl-2'>O`chirish</span></i>
                        </div>
                    </div></>
            ))}
            </div>
        </div>
        <div className='border border-gray-400 py-2 px-4 rounded-lg flex items-center gap-4 w-full'>
            <div className='w-full  pl-4 flex items-center justify-between gap-4'>
                <input type="text" className='outline-none w-[95%]'/>
                <i className='bx bx-send text-gray-400 cursor-pointer text-[24px] w-[5%] text-end'></i>
            </div>
        </div>
        
    </div>
  );
};

export default Comment;
