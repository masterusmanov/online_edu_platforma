import Video from '../../assets/images/Main/Video.png';
import box from "../../assets/images/video/box.png"



export default function MyVideos(){
    const cards = [
        {
            id: 1,
            img: Video,
            title: "Kompyuter nimalardan iborat?",
            description: "Kompyuter Savodxonligi",
            descriptions: "Kompyuter Savodxonligi",
            width: '15%'
        },
        {
            id: 2,
            img: Video,
            title: "Teglar nima?",
            description: "Dasturlash",
            descriptions: "Frontend darslari",
            width: '20%'
        },
        {
            id: 3,
            img: Video,
            title: "Chrome Brauzer",
            description: "Kompyuter Savodxonligi",
            descriptions: "Kompyuter Savodxonligi",
            width: '50%'
        },
        {
            id: 4,
            img: Video,
            title: "Kirish",
            description: "Photoshop",
            descriptions: "Grafik Dizayn",
            width: '10%'
        },
        {
            id: 5,
            img: Video,
            title: "React Componentalar",
            description: "Dasturlash",
            descriptions: "Frontend darslari",
            width: '80%'
        }        
    ];
    return(
        <div className="section">
            <div className="bg-white h-[50px] flex items-center">
                <h1 className=" px-5 md:px-10 py-5">Videolar</h1>
            </div>
           <div className='max-h-screen overflow-y-auto md:max-h-[85vh] lg:max-h-[78vh] xl:max-h-[78vh] 2xl:max-h-[83vh]'>
                <div className="m-5 p-5 bg-white rounded-md ">
                    <div className="md:flex items-center justify-between">
                        <div>
                            <h1 className='font-[700] text-[20px]'>So‘nggi ko‘rilgan videolar</h1>
                        </div>
                        <div className="lg:flex items-center gap-1 text-blue-500">
                            <p>Barcha videolarni ko`rish</p>
                        </div>
                    </div>
                    <div className=" grid justify-center md:flex flex-wrap md:justify-start gap-4 mt-[20px] my-[20px] lg:justify-start lg:gap-6">
                        {cards.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="md:w-[220px] border grid gap-4 bg-[#F7F7F5] p-3 rounded-lg xl:w-[300px] 2xl:w-[370px]">
                                <img src={item.img} alt="" className="rounded-lg  md:h-[150px]  object-fill xl:w-full xl:h-[200px] 2xl:h-[220px]"/>
                                <div className='grid gap-4'>
                                    <h1 className="font-[700] text-[18px] lg:text-[14px] 2xl:text-[18px]">{item.title}</h1>
                                    <div className=''>
                                        <div className=' flex gap-4'>
                                            <h1 className='text-gray-500'>Kurs:</h1>
                                            <p className="font-[600]">{item.descriptions}</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p className='text-gray-500'>Module:</p>
                                            <p className="font-[600]">{item.description}</p>

                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-[10px]">{item.width} videodarslar yakunlangan</h1>
                                        <div className="w-full h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600">
                                            <div className="h-[5px] bg-blue-500 rounded-full" style={{ width: `${item.width}` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='m-5 p-5 bg-white rounded-md '>
                    <div>
                        <h1 className='font-[700] text-[20px]'>Saqlangan videolar</h1>
                    </div>
                    <div className='mt-[35px] grid gap-6'>
                        <h1 className='text-center text-blue-500 font-[700]'>Hech qanday saqlangan videolar topilmadi</h1>
                        <img src={box} alt="" className='mx-auto md:w-[200px]'/>
                    </div>
                </div>
           </div>
        </div>
    )
}