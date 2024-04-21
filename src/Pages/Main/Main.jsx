import React from "react";
import Video from '../../assets/images/Main/Video.png';
import foundation from '../../assets/images/Main/foundation.jpg';
import react from '../../assets/images/Main/reactjs.png';
import python from '../../assets/images/Main/django.jpg';
import design from '../../assets/images/Main/design.png';
import { NavLink } from "react-router-dom";


function Monitoring() {
    const cards = [
        {
            id: 1,
            img: foundation,
            title: "Dasturlash",
            description: "Foundation"
        },
        {
            id: 2,
            img: design,
            title: "Dizayn",
            description: "Grafika"
        },
        {
            id: 3,
            img: react,
            title: "Dasturlash",
            description: "Frontend"
        },
        {
            id: 4,
            img: python,
            title: "Dasturlash",
            description: "Backend"
        },
        
    ];
    return(
        <div>
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5">Bosh sahifa</h1>
            </div>
            <div className="md:flex gap-4">
                    <div className="md:w-[70%] m-5 md:ml-5 md:my-5 p-5 bg-white  rounded-md xl:grid gap-4">
                        <div className="grid gap-2 lg:flex  md:gap-0 items-center justify-between text-[14px] lg:text-[12px]">
                            <div>
                                <h1>So`ngi ko`rilgan</h1>
                            </div>
                            <div className="lg:flex items-center gap-1 text-blue-500">
                                <p>Ko`rilgan kurslar nomi / </p>
                                <p>Ko`rilgan kurslar nomi </p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid lg:flex gap-4 lg:gap-6 mt-[15px] bg-[#F9F9F9] p-4 rounded-lg">
                                <div>
                                    <img src={Video} alt="" className="md:w-[180px] xl:w-[200px] 2xl:w-full"/>
                                </div>
                                <div className="">
                                    <h1 className="font-[700] text-[16px] md:text-[14px] lg:text-[16px]">Kompyuter nimalardan iborat?</h1>
                                    <div className="flex gap-4 text-[12px] lg:text-[14px] lg:py-2">
                                        <div className="text-gray-500 lg:grid gap-4">
                                            <p>• Kurs:</p>
                                            <p>• Modul:</p>
                                            <p>• Mavzu:</p>
                                        </div>
                                        <div className="lg:grid gap-4">
                                            <p>Kompyuter savodxonligi kursi</p>
                                            <p>Kompyuter savodxonligi darslari</p>
                                            <p>Kompyuter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <h1 className="text-[10px]">15% videodars yakunlangan</h1>
                                <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-[5px] bg-blue-500 rounded-full text-white" style={{ width: "15%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[70%] m-5 md:ml-5 md:my-5 p-5 bg-white  rounded-md xl:grid gap-4">
                        <h1 className="font-[700] text-[24px]">Assalomu alaykum UserName! <br /> Xush kelibsiz!</h1>
                        <p>Sizda hozirda hech qanday kurs mavjud emas, “Barcha kurslar” bo‘limidan o‘zingizga ma’qul kursni xarid qilishingiz mumkin</p>
                        <NavLink to="#" className="py-1 px-3 bg-blue-500">Barcha kurslar bo`limiga o`tish</NavLink>
                    </div>
                <div className=" w-[30%] my-5 mr-2 p-3 hidden md:grid bg-white gap-4 rounded-md">
                    <div className="grid gap-3 lg:gap-2 bg-[#F7F7F5] p-2 rounded-lg">
                        <h1 className="text-gray-500 text-[12px]">Tavsiya etamiz:</h1>
                        <img src={foundation} alt="" className="w-[150px] lg:w-[120px] xl:w-[180px] mx-auto rounded-lg 2xl:w-full"/>
                        <p className="font-[700] text-[11px]">Foundation kursini o`rganish uchun bepul manbalar</p>
                        <a href="#" className="text-[11px] text-blue-500">Batafsil</a>
                    </div>
                    <div className="grid gap-3 bg-[#F7F7F5] p-2 rounded-lg">
                        <div className="flex gap-2">
                            <i className='bx bx-code-block text-blue-500'></i>
                            <div>
                                <h2 className="font-[700] text-[11px]">Kompyuter savodxonligi kursi</h2>
                                <p className="text-gray-500 text-[11px]">Boshqa</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[10px]">4% videodarslar yakunlangan</h1>
                            <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                <div className="h-[5px] bg-blue-500 rounded-full" style={{ width: "4%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-5 mr-2 p-5 bg-white rounded-md">
                <div className="md:flex gap-2 md:gap-0 items-center justify-between text-[14px]">
                    <div>
                        <h1>Sizga tavsiya qilamiz</h1>
                    </div>
                    <div className="lg:flex items-center gap-1 text-blue-500">
                        <p>Barcha kurslarni ko`rish</p>
                    </div>
                </div>
                <div className=" grid justify-center md:flex flex-wrap md:justify-start gap-4 mt-[20px] md:max-h-[28vh] md:overflow-y-auto lg:gap-4 lg:justify-center xl:justify-start xl:max-h-[165px] xl:overflow-y-auto 2xl:max-h-[245px] 2xl:overflow-y-auto">
                    {cards.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="md:w-[150px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg lg:flex items-center lg:w-[185px] lg:gap-1 xl:w-[300px] xl:gap-6 2xl:grid 2xl:w-[370px] hover:shadow-xl hover:shadow-gray-500">
                            <img src={item.img} alt="" className="rounded-lg md:w-[150px] md:h-[80px] lg:w-[90px] lg:h-[50px] object-cover lg:object-fill xl:w-[130px] xl:h-[60px] 2xl:w-[200px] 2xl:h-[120px] 2xl:mx-auto"/>
                            <div className="2xl:w-[120px] 2xl:text-center">
                                <h1 className={`font-[700] text-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] ${item.title === 'Dasturlash' ? 'bg-black text-white rounded-lg py-1 px-3 lg:px-1 xl:px-3' : 'bg-green-500 text-white rounded-lg py-1 px-3'}`}>{item.title}</h1>
                                <p className="font-[600] text-[16px] lg:text-[13px] 2xl:text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Monitoring;