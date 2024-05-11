import { NavLink } from "react-router-dom";
import savodxon from '../../assets/images/Main/savodxon.png'
import AccordionTwoOne from "../../Components/Accordion/AccordionTwoOne";
import foundation from "../../assets/images/Main/foundation.png"


export default function ProgrammCourse(){
    return(
        <div className="">
            <div className="bg-white h-[50px] flex items-center p-5">
                <NavLink to="/my_courses"><i className='bx bx-chevron-left text-[24px] bg-gray-200 rounded-full'></i></NavLink>
                <h1 className=" px-5 md:px-10 py-5 font-[600]">Kurs dasturi</h1>
            </div>
            <div className="lg:flex justify=-between m-5">
                <div className="w-full h-[77.5vh] md:h-[52.5vh] lg:h-[73.5vh] xl:h-[78vh] 2xl:h-[83vh] rounded-lg overflow-y-scroll flex flex-col gap-4 bg-white p-5 ">
                    <div>
                        <div className="bg-[#F9F9F9] p-5 grid md:flex gap-6 justify-between py-5 px-8 rounded-lg items-center">
                            <img src={savodxon} alt="Savodxonlik" className="w-[200px] mx-auto md:hidden" />
                            <div className="">
                                <h1 className="font-[700] text-[20px] md:text-[18px] lg:text-[22px]">Kompyuter savodxonligi kursi</h1>
                                <div className="flex items-center gap-4 my-[20px]">
                                    <button className="bg-[#77BF44] px-3 py-2 rounded-full font-[700] text-white text-[12px] lg:text-[14px]">Kurs haqida batafsil</button>
                                    <button className="bg-[#77BF44] px-3 py-2 rounded-full font-[700] text-white text-[12px] lg:text-[14px]">Sotib olish</button>
                                </div>
                            </div>
                            <img src={savodxon} alt="Savodxonlik" className="hidden w-[200px] md:block md:w-[100px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px]"/>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] p-5 rounded-lg ">
                        <div className="flex flex-wrap lg:flex-nowrap justify-between lg:justify-start gap-3 mx-auto lg:gap-6 border-b-2 border-gray-400 p-2 pb-5">
                            <div className="w-[47%] lg:w-auto">
                                <i className='bx bx-server text-[48px] text-gray-500 lg:text-[55px]'></i>
                                <h1 className="text-[14px] font-[700] text-gray-500 lg:text-[16px]">Modullar soni</h1>
                                <p className="text-[#77BF44] font-[700]">Nta</p>
                            </div>
                            <div className="w-[47%] lg:w-auto">
                                <i className='bx bx-list-ul text-[48px] text-gray-500 lg:text-[55px]'></i>
                                <h1 className="text-[14px] font-[700] text-gray-500 lg:text-[16px]">Mavzular soni</h1>
                                <p className="text-[#77BF44] font-[700]">Nta</p>
                            </div>
                            <div className="w-[47%] lg:w-auto">
                                <i className='bx bx-movie-play text-[48px] text-gray-500 lg:text-[55px]'></i>
                                <h1 className="text-[14px] font-[700] text-gray-500 lg:text-[16px]">Darslar soni</h1>
                                <p className="text-[#77BF44] font-[700]">Nta</p>
                            </div>
                            <div className="w-[47%] lg:w-auto">
                                <i className='bx bx-calendar text-[48px] text-gray-500 lg:text-[55px]'></i>
                                <h1 className="text-[14px] font-[700] text-gray-500 lg:text-[16px]">Mavzular soni</h1>
                                <p className="text-[#77BF44] font-[700]">N soat N daqiqa</p>
                            </div>
                        </div>
                        <div>
                            <AccordionTwoOne/>
                        </div>
                    </div>
                </div>
                <div className="p-5 my-5 lg:my-0 lg:ml-2 lg:w-[350px] bg-white rounded-lg md:h-[30vh] md:overflow-y-scroll lg:h-[73.5vh] xl:h-[78vh] 2xl:h-full 2xl:overflow-y-hidden">
                    <div className="bg-[#F9F9F9] p-5">
                        <h1 className='text-gray-400 font-[700] text-[14px]'>Tavsiya qilamiz</h1>
                        <img src={foundation} alt="" className="w-[200px] mx-auto my-[20px]"/>
                        <p className="text-[14px] font-[700] my-[20px]">Foundationni o`rganish uchun manbaalar</p>
                        <a href="#" className="font-[600] text-[14px] text-[#77BF44]">Batafsil</a>
                    </div>
                    <div className="bg-[#F9F9F9] p-5 mt-5">
                        <div className="flex items-center gap-4">
                            <i className='bx bx-code-block text-[24px] bg-[#77BF44] p-2 rounded-full text-white'></i>
                            <div>
                                <h2>Kompyuter savodxonligi kursi</h2>
                                <a href="#" className="font-[600] text-[14px] text-[#77BF44]">Boshqa</a>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-[10px]">4% videodarslar yakunlangan</h1>
                            <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                <div className="h-[5px] bg-[#77BF44] rounded-full" style={{ width: "4%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}