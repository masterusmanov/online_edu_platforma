import React from "react";
import { NavLink } from "react-router-dom";
import savodxon from "../../assets/images/Main/savodxon.png";
import foundation from '../../assets/images/Main/foundation.png'
import frontend from '../../assets/images/Main/frontend.png'
import python from '../../assets/images/Main/django.png'
import design from '../../assets/images/Main/design.png'

export default function MyCourses(){
    const cards = [
        {
            id: 1,
            img: foundation,
            title: "Dasturlash",
            description: "Foundation"
        },
        {
            id: 2,
            img: frontend,
            title: "Dasturlash",
            description: "Frontend"
        },
        {
            id: 3,
            img: python,
            title: "Dasturlash",
            description: "Backend"
        },
        {
            id: 4,
            img: design,
            title: "Dizayn",
            description: "Grafika"
        },
        {
            id: 4,
            img: savodxon,
            title: "Kompyuter savodxonligi",
            description: "Savodxonlik"
        },
    ];

    return(
       <div className="">
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Mening kurslarim</h1>
            </div>
            <div className="max-h-screen overflow-y-auto">
                <div className="m-5 p-5 bg-white rounded-md lg:flex justify-start items-center lg:gap-[50px] xl:gap-[65px]">
                    <div className="xl:w-1/2 flex flex-wrap md:flex lg:flex lg:items-center ">
                        <img src={savodxon} alt="" className="w-[200px] md:w-[150px] mx-auto"/>
                        <div className="md:px-5">
                            <h1 className="font-[700] text-[18px] my-[20px]">Kompyuter savodxonligi kursi</h1>
                            <div className="grid gap-1">
                                <h1 className="text-[10px]">15% videodars yakunlangan</h1>
                                <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-[5px] bg-[#77BF44] rounded-full" style={{ width: "15%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 grid gap-4 mt-[15px] md:flex items-center justify-between lg:grid xl:gap-6 ">
                        <div className="flex justify-between items-center gap-6">
                            <div className="mx-auto">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <i className='bx bx-movie-play'></i>
                                    <p>Darslar soni</p>
                                </div>
                                <h1 className="text-[#77BF44] font-[700]">20ta</h1>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <i className='bx bx-time'></i>
                                    <p>Kurs davomiyligi</p>
                                </div>
                                <h1 className="text-[#77BF44] font-[700]">40 soat</h1>
                            </div>
                        </div>
                        <a href="/programcourse" className="bg-[#77BF44] text-white py-1 px-6 text-[14px] rounded-full text-center">Batafsil</a>
                    </div>
                </div>
                {/* <div className="m-5 p-5 bg-white rounded-md ">
                    <div>
                        <h1 className="font-[700] text-[18px]">Mening kurslarim</h1>
                    </div>
                    <div className="text-center my-[50px]">
                        <h2 className="text-[18px] text-gray-400">Hozirda sizda hech qanday kurs mavjud emas</h2>
                        <div className="mt-[20px]">
                            <NavLink to="#" className="py-2 px-4 bg-[#77BF44] text-white rounded-full text-[14px] xl:text-[16px]">Kurslar xarid qilish</NavLink>
                        </div>
                    </div>
                </div> */}
                <div className="m-5 p-5 bg-white rounded-md">
                    <div className="md:flex gap-2 md:gap-0 items-center justify-between text-[14px]">
                        <div>
                            <h1 className="font-[700] text-[18px]">Sizga tavsiya qilamiz</h1>
                        </div>
                        <div className="lg:flex items-center gap-1 text-[#77BF44]">
                            <a  href="/courses">Barcha kurslarni ko`rish</a>
                        </div>
                    </div>
                    <div className=" grid justify-center md:flex flex-wrap gap-4 mt-[20px] overflow-y-auto md:max-h-[43.5vh] lg:max-h-[25.5vh] xl:max-h-[38vh] 2xl:max-h-[50vh] xl:justify-start 2xl:gap-2">
                        {cards.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="my-[20px] w-[250px] md:w-[200px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg lg:w-[250px] xl:w-[220px] 2xl:w-[300px]">
                                <img src={item.img} alt="" className="rounded-lg w-[200px] md:w-[150px] md:h-[150px] xl:w-full 2xl:h-[250px] mx-auto"/>
                                <div>
                                    <h1 className="font-[700] text-[18px] lg:text-[14px] 2xl:text-[18px]">{item.title}</h1>
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