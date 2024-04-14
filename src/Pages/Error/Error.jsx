import { NavLink } from "react-router-dom";
import error from "../../assets/images/error.webp";

export default function Error(){
    return(
        <div className="section">
            <img src={error} alt="" className="mt-[200px] mx-auto w-[500px]"/>

            <div className="">
                <h1 className="text-[20px] text-blue-600 font-[700] text-center">Bu sahifa topilmadi. Bosh sahifaga qayting!</h1>
            </div>
            <div className="w-[500px] mx-auto mt-[50px]">
                <NavLink to="/" className="bg-blue-500 ml-[90px] md:ml-[150px] xl:ml-[150px] text-white py-4 px-8 rounded-full ml">Bosh sahifaga qaytish</NavLink>
            </div>
        </div>
    )
}