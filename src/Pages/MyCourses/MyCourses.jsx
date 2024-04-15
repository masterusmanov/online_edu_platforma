import React from "react";
import savodxon from "../../assets/images/my_courses/savodxon.jpg";
import foundation from '../../assets/images/Main/foundation.jpg'
import react from '../../assets/images/Main/reactjs.png'
import python from '../../assets/images/Main/django.jpg'
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
            img: react,
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
    ];

    return(
       <div className="">
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5">Mening kurslarim</h1>
            </div>
            <div className="max-h-screen overflow-y-auto">
                <div className="m-5 p-5 bg-white rounded-md lg:flex justify-between ">
                    <div className=" grid gap-4 md:flex">
                        <img src={savodxon} alt="" className="md:w-[200px]"/>
                        <div className="grid gap-3">
                            <h1 className="font-[700] text-[18px]">Kompyuter savodxonligi kursi</h1>
                            <div className="grid gap-1">
                                <h1 className="text-[10px]">15% videodars yakunlangan</h1>
                                <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-[5px] bg-blue-500 rounded-full" style={{ width: "15%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid gap-4 mt-[15px] md:flex items-center justify-between lg:grid">
                            <div className="flex justify-between items-center gap-6">
                                <div className="">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className='bx bx-movie-play'></i>
                                        <p>Darslar soni</p>
                                    </div>
                                    <h1 className="text-blue-500 font-[700]">20ta</h1>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className='bx bx-time'></i>
                                        <p>Kurs davomiyligi</p>
                                    </div>
                                    <h1 className="text-blue-500 font-[700]">40 soat</h1>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white py-1 px-6 text-[14px] rounded-full">Batafsil</button>
                        </div>
                    </div>
                </div>
                <div className="m-5 p-5 bg-white rounded-md">
                <div className="md:flex gap-2 md:gap-0 items-center justify-between text-[14px]">
                    <div>
                        <h1>Sizga tavsiya qilamiz</h1>
                    </div>
                    <div className="lg:flex items-center gap-1 text-blue-500">
                        <p>Barcha kurslarni ko`rish</p>
                    </div>
                </div>
                <div className=" grid justify-center md:flex flex-wrap md:justify-start gap-4 mt-[20px] lg:max-h-[201px] lg:overflow-y-auto xl:max-h-[335px]">
                    {cards.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="md:w-[250px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg xl:w-[300px] 2xl:w-[370px] ">
                            <img src={item.img} alt="" className="rounded-lg md:w-[250px] md:h-[150px]  object-cover xl:w-full 2xl:h-[200px]"/>
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