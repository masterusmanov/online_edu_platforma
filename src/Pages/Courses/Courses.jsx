import React, {useState} from "react";
import kotlin from '../../assets/images/Main/Kotlin.png';
import react from '../../assets/images/Main/frontend.png';
import python from '../../assets/images/Main/django.png';
import design from '../../assets/images/Main/design.png';
import js from '../../assets/images/Main/foundation.png';
import ps from '../../assets/images/Main/ps.png';
import savodxon from '../../assets/images/Main/savodxon.png';


export default function Courses(){
    const cards = [
        {
            id: 1,
            img: react,
            title: "React JS",
            description: "Frontend darslari",
            category: "Dasturlash"
        },
        {
            id: 2,
            img: python,
            title: "Python",
            description: "Backend darslari",
            category: "Dasturlash"
        },
        {
            id: 3,
            img: design,
            title: "AutoDesk",
            description: "3D Max darslari",
            category: "Dizayn"
        },
        {
            id: 4,
            img: kotlin,
            title: "Kotlin",
            description: "Kotlin darslari",
            category: "Dasturlash"
        },
        {
            id: 5,
            img: js,
            title: "Foundation",
            description: "Javascript va Python algoritm darslari",
            category: "Dasturlash"
        },
        {
            id: 6,
            img: ps,
            title: "Photoshop",
            description: "Grafik dizayn darslari",
            category: "Dizayn"
        },
        {
            id: 7,
            img: savodxon,
            title: "Savodxonlik",
            description: "Kompyuter savodxonligi darslari",
            category: "Savodxonlik"
        },
        
    ];

    const [items, setItems] = useState(cards);

    const filterItem = (category) => {
        const updatedItems = cards.filter((curElem) => {
        return curElem.category === category;
        });

        setItems(updatedItems);
    };
    return(
        <div className="section">
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5">Barcha kurslar</h1>
            </div>
            <div className="m-5 p-5 bg-white rounded-md max-h-screen overflow-y-auto md:max-h-[85vh] lg:max-h-[73vh] xl:max-h-[78vh] 2xl:max-h-[83vh]">
                <div className="">
                    <div>
                        <h1 className='font-[700] text-[20px]'>Barcha kurslar</h1>
                    </div>
                    <div className="flex flex-wrap mt-[20px] gap-2">
                        <button onClick={() => setItems(cards)} className='bg-[#77BF44] py-2 px-6 text-white font-[600] rounded-full hover:bg-[#77BF44]'>Barchasi</button>
                        <button onClick={() => filterItem("Savodxonlik")} className='bg-[#77BF44] py-2 px-6 text-white font-[600] rounded-full hover:bg-[#77BF44]'>Savodxonlik</button>
                        <button onClick={() => filterItem("Dizayn")} className='bg-[#77BF44] py-2 px-6 text-white font-[600] rounded-full hover:bg-[#77BF44]'>Dizayn</button>
                        <button onClick={() => filterItem("Dasturlash")} className='bg-[#77BF44] py-2 px-6 text-white font-[600] rounded-full hover:bg-[#77BF44]'>Dasturlash</button>
                    </div>
                </div>
                <div className=" grid justify-center md:flex flex-wrap md:justify-center gap-4 mt-[20px] my-[20px] lg:justify-start lg:gap-6">
                    {items.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="md:w-[220px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg xl:w-[300px] 2xl:w-[370px]">
                            <img src={item.img} alt="" className="rounded-lg object-fill xl:w-full p-5 xl:p-14"/>
                            <div>
                                <h1 className={`font-[700] text-[18px] lg:text-[14px] 2xl:text-[18px] ${item.category === 'Dasturlash' ? 'bg-black text-white rounded-lg py-1 px-3 lg:px-1 xl:px-3' : 'bg-green-500 text-white rounded-lg py-1 px-3 lg:px-1 xl:px-3'} ${item.category === 'Dizayn' ? 'bg-[#AE8D5E] text-white rounded-lg py-1 px-3 lg:px-1 xl:px-3' : ''}`}>{item.title}</h1>
                                <p className="font-[600] text-[16px] lg:text-[13px] 2xl:text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}