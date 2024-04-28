import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from 'react-player';
import ModalTwo from "../../Components/Modal/ModalTwo";
import MyForm from "../../Components/Forms/Forms";

export default function Theme(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        closeModal(); 
    };
    return(
        <div>
            <div className="bg-white h-[50px] flex items-center p-5">
                <NavLink to="programcourse"><i className='bx bx-chevron-left text-[24px] bg-gray-200 rounded-full'></i></NavLink>
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Mavzular</h1>
            </div>
            <div className="m-5 h-[77.5vh] rounded-lg overflow-y-scroll flex flex-col gap-4">
                <div className="rounded-lg">
                    <ReactPlayer width='100%'  url='https://youtu.be/iu-LBY7NXD4?si=koebezIgy95ePb3T' controls muted/>
                    {/* <video className="w-[200px] h-[100px]" controls><source src={videos}/></video> */}
                </div>
                <div className="bg-white">
                    <div className="flex items-center justify-between p-5">
                        <h1 className='font-[600] text-[14px] text-gray-500'>1-dars <span className="font-[600] text-[14px] text-black">Kirish</span></h1>
                        <i className='bx bx-bookmark text-gray-500 bg-gray-200 p-2 text-[24px]'></i>
                    </div>
                    <button onClick={openModal} className="py-2 px-4 bg-[#77BF44] float-end m-4 rounded-full text-white hover:bg-[#77BF44] font-[700]">Darsni baholang</button>
                    <ModalTwo isOpen={isModalOpen} onClose={closeModal}>
                        <MyForm onSubmit={handleFormSubmit} />
                    </ModalTwo>
                </div>
            </div>
        </div>
    )
} 