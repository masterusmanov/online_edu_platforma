import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO.png";
import pattern from '../../assets/images/login/pattern.svg'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., submit to backend API)
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 h-screen">
       <div className="dubl h-screen hidden lg:block w-1/2  bg-gray-100 ">
        <img src={Logo} alt="" className="w-1/2 mx-[260px] my-[220px] xl:mx-[310px] xl:my-[250px] 2xl:mx-[420px] 2xl:my-[350px]" />
      </div>
      <div className="w-full lg:w-1/2 bg-white h-screen">
        <img src={pattern} alt="" className="absolute md:mx-[5px]"/>
        <div className="mx-auto w-full  rounded-lg  dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[120px] md:mt-[200px] lg:mt-[100px] relative xl:mt-[150px] 2xl:mt-[220px]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[30px] font-bold text-gray-900 text-center">
              Tizimga kirish
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Emailingiz
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parolingiz
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Parol esingizdan chiqdimi?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Kirish
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Hali hisobingiz yo`qmi?{" "}
                <NavLink to='/register' className="font-medium text-blue-600 hover:underline dark:text-blue-500">Ro`yhatdan o`tish</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
