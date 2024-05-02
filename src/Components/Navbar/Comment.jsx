import React, {useState} from 'react';
import image from "../../assets/images/navbar/account.png"

const Comment = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const cards = [
        {
            id: 1,
            name: "Name Surname",
            notes: "Lorem ipsum dolor sit amet.",
            clock: "15:00",
            times: "01.05.2024",
            img: image
        },
        {
            id: 2,
            name: "Name Surname",
            notes: "Lorem ipsum dolor sit amet.",
            clock: "15:00",
            times: "01.05.2024",
            img: image
        }
    ]

    const handleDelete = (itemId) => {
        setSelectedItemId(itemId);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Deleting item with id ${selectedItemId}`);
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setSelectedItemId(null);
        setShowDeleteModal(false);
    };
  
  return (
    <div>
        <div>
            <h1 className='text-[#77BF44] font-[700] text-[14px]'>Mening izohlarim</h1>
            <div className='my-4 flex flex-col gap-4'>
            {cards.map(item => (
                // eslint-disable-next-line react/jsx-key
                    <>
                    <div className='grid gap-4 lg:flex justify-between items-center border-b border-gray-400 p-2'>
                        <div className='flex items-center gap-4'>
                            <img src={item.img} alt="account" className='opacity-40 w-[40px]'/>
                            <div>
                                <h1 className='text-[14px] font-[700]'>{item.name}<span className='text-gray-500'> - {item.clock} {item.times}</span></h1>
                                <p>{item.notes}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 text-[20px] text-gray-500'>
                            <i className='bx bx-trash text-red-600 flex items-center cursor-pointer' onClick={() => handleDelete(item.id)}><span className='text-[14px] pl-2'>O`chirish</span></i>
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
        {/* Delete Modal */}
        {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold mb-4">Siz izohni o`chirmoqchimisiz?</p>
                        <div className="flex justify-end gap-4">
                            <button className="px-14 py-2 bg-gray-300 text-gray-800 rounded-md" onClick={handleCancelDelete}>Yo`q</button>
                            <button className="px-14 py-2 bg-red-600 text-white rounded-md" onClick={handleConfirmDelete}>Ha</button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Comment;
