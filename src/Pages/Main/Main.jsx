import React from "react";
import { NavLink } from "react-router-dom";
import Video from '../../assets/images/Main/Video.png';
import foundation from '../../assets/images/Main/foundation.png';
import react from '../../assets/images/Main/frontend.png';
import python from '../../assets/images/Main/django.png';
import design from '../../assets/images/Main/design.png';
import kotlin from '../../assets/images/Main/Kotlin.png';


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
        {
            id: 5,
            img: kotlin,
            title: "Dasturlash",
            description: "Mobil dasturlash"
        }
        
    ];
    return(
        <div>
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Bosh sahifa</h1>
            </div>
           <div className="md:max-h-[85vh] lg:max-h-[80vh] xl:max-h-[82vh] 2xl:max-h-[85vh] overflow-y-scroll">
           <div className="md:flex">
                <div className="md:w-[70%] m-5 md:ml-5 md:my-5 p-5 bg-white  rounded-md gap-4 2xl:w-[80%]">
                    <div className="grid gap-2 lg:flex  md:gap-0 items-center justify-between text-[14px] lg:text-[12px]">
                        <div>
                            <h1>So`ngi ko`rilgan</h1>
                        </div>
                        <div className="lg:flex items-center gap-1 text-[#77BF44]">
                            <p>Ko`rilgan kurslar nomi / </p>
                            <p>Ko`rilgan kurslar nomi </p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid lg:flex gap-4 lg:gap-6 mt-[15px] bg-[#F9F9F9] p-4 rounded-lg">
                            <div>
                                <img src={Video} alt="" className="md:w-[180px] xl:w-[200px] 2xl:w-full"/>
                            </div>
                            <NavLink to="theme" className="">
                                <h1 className="font-[700] text-[16px] md:text-[14px] lg:text-[16px]">Kompyuter nimalardan iborat?</h1>
                                <div className="flex gap-4 text-[12px] lg:text-[14px] lg:py-2">
                                    <div className="text-gray-500 lg:grid gap-4 font-[700]">
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
                            </NavLink>
                        </div>
                        <div className="grid gap-1">
                            <h1 className="text-[10px]">15% videodars yakunlangan</h1>
                            <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                <div className="h-[5px] bg-[#77BF44] rounded-full" style={{ width: "15%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="md:w-[70%] m-5 md:ml-5 md:my-5 p-5 bg-white  rounded-md lg:flex items-center gap-4">
                    <div className="lg:w-1/2 lg:grid gap-4 2xl:gap-12">
                        <h1 className="font-[700] text-[18px] lg:text-[20px] xl:text-[28px]">Assalomu alaykum UserName! <br /> Xush kelibsiz!</h1>
                        <p className="text-[12px] mt-[5px] xl:text-[16px]">Sizda hozirda hech qanday kurs mavjud emas, “Barcha kurslar” bo‘limidan o‘zingizga ma’qul kursni xarid qilishingiz mumkin</p>
                        <div className="mt-[20px]">
                            <NavLink to="#" className="py-2 px-4 bg-[#77BF44] text-white rounded-full text-[14px] xl:text-[16px]">Barcha kurslar bo`limiga o`tish</NavLink>
                        </div>
                    </div>
                    <div className="mt-[25px] lg:w-1/2">
                        <img src={komp} alt="img" className="w-[180px] mx-auto lg:w-[220px] xl:w-[250px] 2xl:w-[350px]"/>
                    </div>
                </div> */}
                <div className=" w-[30%] my-5 mr-2 p-3 hidden md:grid bg-white gap-4 rounded-md 2xl:w-[20%]">
                    <div className="grid gap-3 lg:gap-2 bg-[#F7F7F5] p-2 rounded-lg">
                        <h1 className="text-gray-500 text-[12px]">Tavsiya etamiz:</h1>
                        <img src={foundation} alt="" className="w-[150px] lg:w-[80px] xl:w-[100px] mx-auto rounded-lg"/>
                        <p className="font-[700] text-[11px]">Foundation kursini o`rganish uchun bepul manbalar</p>
                        <a href="#" className="text-[11px] text-[#77BF44]">Batafsil</a>
                    </div>
                    <div className="grid gap-3 bg-[#F7F7F5] p-2 rounded-lg cursor-pointer">
                        <div className="flex gap-2">
                            <i className='bx bx-code-block text-[#77BF44]'></i>
                            <div>
                                <h2 className="font-[700] text-[11px]">Kompyuter savodxonligi kursi</h2>
                                <p className="text-gray-500 text-[11px]">Boshqa</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[10px]">4% videodarslar yakunlangan</h1>
                            <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                <div className="h-[5px] bg-[#77BF44] rounded-full" style={{ width: "4%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-5 mr-5 md:mr-2 p-5 bg-white rounded-md">
                <div className="md:flex gap-2 md:gap-0 items-center justify-between text-[14px]">
                    <div>
                        <h1>Sizga tavsiya qilamiz</h1>
                    </div>
                    <div className="lg:flex items-center gap-1 text-[#77BF44]">
                        <a href="/courses">Barcha kurslarni ko`rish</a>
                    </div>
                </div>
                <div className=" grid justify-center md:flex flex-wrap gap-4 mt-[20px] overflow-y-auto md:max-h-[43.5vh] lg:max-h-[25.5vh] xl:max-h-[38vh] 2xl:max-h-[50vh] xl:justify-start 2xl:gap-2">
                        {cards.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="my-[20px] w-[250px] md:w-[200px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg lg:w-[250px] xl:w-[220px] 2xl:w-[300px] hover:shadow-xl hover:shadow-gray-500">
                                <img src={item.img} alt="" className="rounded-lg w-[200px] md:w-[150px] xl:w-full mx-auto xl:p-5 2xl:p-10"/>
                                <div>
                                    <h1 className={`font-[700] text-[18px] lg:text-[14px] 2xl:text-[18px] ${item.title === 'Dasturlash' ? 'bg-black text-white rounded-lg py-1 px-3 lg:px-1 xl:px-3' : 'bg-green-500 text-white rounded-lg py-1 px-3'}`}>{item.title}</h1>
                                    <p className="font-[600] text-[16px] lg:text-[13px] 2xl:text-[16px]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
           </div>
        </div>
    )
}

export default Monitoring;