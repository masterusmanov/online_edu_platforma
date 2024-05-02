// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// import ReactPlayer from 'react-player';
import ModalTwo from "../../Components/Modal/ModalTwo";
import MyForm from "../../Components/Forms/Forms";
import NavbarTwo from "../../Components/Navbar/NavbarTwo";
import mansur from '../../assets/images/100.mp4';
import Accordion from "../../Components/Accordion/Accordion";

const items = [
    {
        id: 1, 
        title: 'Kirish',
        content: 'Kirish',
    },
    {
        id: 2, 
        title: 'Kompyuter',
        content: 'Kompyuter nimalardan iborat',
    },
    {
        id: 3, 
        title: 'Brouzerdan samarali foydalanish',
        content: 'Chrome brauzeri | Disk',
    },
    {
        id: 4, 
        title: 'Ofice ilovalaridan foydalanish',
        content: 'Google docs | matn tahrirchisi',
    },
    {
        id: 5, 
        title: 'Telegramdan samarali foydalanish',
        content: 'Asosiy sozlamalar [1-qism]',
    },
    {
        id: 6, 
        title: 'Foydali saytlar bilan ishlash',
        content: 'Telegra.ph sayti bilan ishlash',
    },
    {
        id: 7, 
        title: 'Tez kunda',
        content: 'Darslar soni 0ta Mavzu vaqti 0:00',
    },
  ];


export default function Theme(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);
    const [videoDuration, setVideoDuration] = useState(null);

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


  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationInSeconds = Math.floor(videoRef.current.duration);
      setVideoDuration(formatDuration(durationInSeconds));
    }
  };

  const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const timer = `${hours > 0 ? hours + ':' : '00:'}${minutes}:${seconds}`
    localStorage.setItem('videotime', timer)
    return `${hours > 0 ? hours + ':' : '00:'}${minutes}:${seconds}`;
  };
    return(
        <div className="">
            <div className="bg-white h-[50px] flex items-center p-5">
                <NavLink to="/programcourse"><i className='bx bx-chevron-left text-[24px] bg-gray-200 rounded-full'></i></NavLink>
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Mavzular</h1>
            </div>
            <div className="lg:flex justify-between m-5">
                <div className="w-full h-[77.5vh] md:h-[82.5vh] lg:h-[73.5vh] xl:h-[78vh] 2xl:h-[83vh] rounded-lg overflow-y-scroll flex flex-col gap-4">
                    <div className="rounded-lg">
                        {/* <ReactPlayer width='100%'  url='https://youtu.be/iu-LBY7NXD4?si=koebezIgy95ePb3T' controls muted/>
                        <video className="w-[200px] h-[100px]" controls><source src={videos}/></video> */}
                        <video ref={videoRef} onLoadedMetadata={handleLoadedMetadata} className="w-full h-[50vh]" controls controlsList="nodownload"><source src={mansur} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                    <div className="bg-white p-5">
                        <NavbarTwo/>
                    </div>
                    <div className="p-5 my-5 lg:my-0 lg:w-[350px] bg-white lg:hidden">
                        <h1 className='text-[#77BF44] font-[700] text-[16px]'>Kompyuter savodxonligi darslari</h1>
                        <p className="text-[13px] font-[600] my-2">Mavzular soni: Nta </p>
                        <div>
                            <Accordion items={items} />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block my-5 lg:my-0 lg:w-[350px] bg-white">
                    <h1 className='text-[#77BF44] font-[700] text-[14px]'>Kompyuter savodxonligi darslari</h1>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
                        <Accordion items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
} 