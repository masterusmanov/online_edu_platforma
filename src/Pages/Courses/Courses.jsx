import kotlin from '../../assets/images/Main/Kotlin.png';
import react from '../../assets/images/Main/reactjs.png';
import python from '../../assets/images/Main/django.jpg';
import design from '../../assets/images/Main/design.png';
import js from '../../assets/images/Main/JavaScript.png';
import ps from '../../assets/images/Main/ps.png';
import word from '../../assets/images/Main/word.png';
import excel from '../../assets/images/Main/excel.png';


export default function Courses(){
    const cards = [
        {
            id: 1,
            img: react,
            title: "React JS",
            description: "Frontend darslari"
        },
        {
            id: 2,
            img: python,
            title: "Python",
            description: "Backend darslari"
        },
        {
            id: 3,
            img: design,
            title: "AutoDesk",
            description: "3D Max darslari"
        },
        {
            id: 4,
            img: kotlin,
            title: "Kotlin",
            description: "Kotlin darslari"
        },
        {
            id: 5,
            img: js,
            title: "Javascript",
            description: "Frontend darslari"
        },
        {
            id: 6,
            img: ps,
            title: "Photoshop",
            description: "Grafik dizayn darslari"
        },
        {
            id: 7,
            img: word,
            title: "MS Word",
            description: "MS Office darslari"
        },
        {
            id: 8,
            img: excel,
            title: "MS Excel",
            description: "MS Office darslari"
        },
        
    ];
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
                        <button className='bg-blue-500 py-2 px-6 text-white font-[600] rounded-full hover:bg-blue-700'>Barchasi</button>
                        <button className='bg-blue-500 py-2 px-6 text-white font-[600] rounded-full hover:bg-blue-700'>Savodxonlik</button>
                        <button className='bg-blue-500 py-2 px-6 text-white font-[600] rounded-full hover:bg-blue-700'>Dizayn</button>
                        <button className='bg-blue-500 py-2 px-6 text-white font-[600] rounded-full hover:bg-blue-700'>3D Max</button>
                        <button className='bg-blue-500 py-2 px-6 text-white font-[600] rounded-full hover:bg-blue-700'>Dasturlash</button>
                    </div>
                </div>
                <div className=" grid justify-center md:flex flex-wrap md:justify-center gap-4 mt-[20px] my-[20px] lg:justify-start lg:gap-6">
                    {cards.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="md:w-[220px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg xl:w-[300px] 2xl:w-[370px]">
                            <img src={item.img} alt="" className="rounded-lg  md:h-[150px]  object-fill xl:w-full xl:h-[200px] 2xl:h-[220px]"/>
                            <div>
                                <h1 className="font-[700] text-[18px] lg:text-[14px] 2xl:text-[18px]">{item.title}</h1>
                                <p className="font-[600] text-[16px] lg:text-[13px] 2xl:text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}