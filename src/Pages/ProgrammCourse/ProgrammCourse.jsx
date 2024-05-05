import { NavLink } from "react-router-dom";


export default function ProgrammCourse(){
    return(
        <div className="">
            <div className="bg-white h-[50px] flex items-center p-5">
                <NavLink to="/my_courses"><i className='bx bx-chevron-left text-[24px] bg-gray-200 rounded-full'></i></NavLink>
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Kurs dasturi</h1>
            </div>
            <div className="lg:flex justify=-between m-5">
                <div className="w-full h-[77.5vh] md:h-[82.5vh] lg:h-[73.5vh] xl:h-[78vh] 2xl:h-[83vh] rounded-lg overflow-y-scroll flex flex-col gap-4 bg-white p-5">
                    <div>
                        <div className="bg-[#F9F9F9] p-5">
                            <h1 className="font-[700] text-[24px]">Kompyuter savodxonligi kursi</h1>
                            <div className="flex items-center gap-4">
                                <button className="bg-[#77BF44] px-3 py-2 rounded-full font-[700] text-white text-[14px]">Kurs haqida batafsil</button>
                                <button className="bg-[#77BF44] px-3 py-2 rounded-full font-[700] text-white text-[14px]">Sotib olish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}