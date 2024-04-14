import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import LOGO from '../../assets/images/LOGO.png';
import account from '../../assets/images/navbar/account.png';
import Modal from '../Modal/Modeal';
import './Header.css'


export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
        <div className="flex justify-between items-center h-[70px] border-b border-gray-500 bg-white">
            <div className='p-5 md:hidden'>
                <i onClick={openModal}  className='bx bx-menu text-[38px]'></i>
                <Modal isOpen={isOpen} closeModal={closeModal}>
                    <div className="sidebar mt-6 grid">
                        <NavLink to="/" className="flex items-center gap-2 p-2 font-[700]"><i className='text-gray-400 bx bx-home' ></i>Bosh sahifa</NavLink>
                        <NavLink to="/my_courses" className="flex items-center gap-2 p-2 font-[700]"><i className='text-gray-400 bx bx-desktop'></i>Mening kurslarim</NavLink>
                        <NavLink to="/courses" className="flex items-center gap-2 p-2 font-[700]"><i className='text-gray-400 bx bx-folder-open' ></i>Barcha kurslar</NavLink>
                        <NavLink to="/course_video" className="flex items-center gap-2 p-2 font-[700]"><i className='text-gray-400 bx bxs-videos'></i>Videolar</NavLink>
                        <NavLink to="/sertificate" className="flex items-center gap-2 p-2 font-[700]"><i className='text-gray-400 bx bx-id-card'></i>Sertifikatlarim</NavLink>
                    </div>
                    <div className="p-2 flex items-center gap-4 mt-[250px]">
                        <img src={account} alt="" className='w-[35px] rounded-full' />
                        <div>
                            <h1 className='font-[700] text-[14px] text-gray-500'>Name SURNAME</h1>
                            <p className='text-gray-400 text-[12px]'>O`quvchi</p>
                        </div>
                    </div>
                        <button className='flex gap-3 items-center p-2 rounded-lg text-red-500 font-bold  mt-[10px]'><i className='bx bx-log-out'></i>Chiqish</button>
                </Modal>
            </div>
            <div className='flex items-center gap-3 md:px-5'>
                <img src={LOGO} alt="" className='w-[60px]'/>
                <h1 className='w-[180px] text-blue-600 text-[34px] font-bold'>IT school</h1>
            </div>
            <div className='flex p-2 md:hidden'>
                    <i className='bx bx-bell text-[24px] text-gray-500'></i>
                    <div className='w-[5px] h-[5px] rounded-full bg-red-500'></div>
                </div>
            <div className="px-5 hidden md:flex items-center gap-4">
                <div className='flex'>
                    <i className='bx bx-bell md:text-[24px] text-gray-500'></i>
                    <div className='md:w-[5px] md:h-[5px] rounded-full bg-red-500'></div>
                </div>
                <img src={account} alt="" className='md:w-[35px] rounded-full' />
                <div>
                    <h1 className='font-[700] md:text-[14px] text-gray-500'>Name SURNAME</h1>
                    <p className='text-gray-400 md:text-[12px]'>O`quvchi</p>
                </div>
            </div>
            
        </div>
    )
}