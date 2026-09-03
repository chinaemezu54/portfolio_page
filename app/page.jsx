"use client"
import { useState } from "react";
import { BiCopy, BiMenu, BiMessage, BiMoon, BiSun } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";

export default function Home() {
  const [pL, setPL] = useState("JavaScript")
  const [darkTheme, setDarkTheme] = useState(true)
  const [message, setMessage] = useState(false)

  const bg_primary = ""
  // const icon = {`text-white text-lg p-1 hover:bg-white hover:text-black rounded-md`}

  const programming_languages = ["JavaScript", "C++", "Python", "Java"]
  const projects = [
    {
      projectName: "Learna App - An app for learning jaleoaihfeoian ea oe ao",
      language: "JavaScript"
    },
    {
      projectName: "Ecommerce App",
      language: "JavaScript"
    },
    {
      projectName: "Ecommerce App",
      language: "C++"
    },
    {
      projectName: "Ecommerce App",
      language: "Python"
    },
    {
      projectName: "Ecommerce App",
      language: "Python"
    },
    {
      projectName: "Ecommerce App",
      language: "Python"
    },
    {
      projectName: "Ecommerce App",
      language: "Python"
    },
    {
      projectName: "Ecommerce App",
      language: "Python"
    },
    
  ]
  // const socials 



  return (
    <div className={`flex flex-col flex-1 min-h-screen max-h-screen  cursor-default   ${darkTheme ? "bg-[#17253f] text-white" : "bg-white text-black"}`}>
      <nav className={`w-full flex justify-end gap-2 p-2`}>
        {darkTheme ? (
          <button className={`text-lg p-1 rounded-md text-white hover:bg-white hover:text-black`} onClick={() => setDarkTheme(false)}><BiMoon /></button>

        ): (
          <button className={`text-lg p-1 rounded-md hover:bg-black hover:text-white`} onClick={() => setDarkTheme(true)}><BiSun /></button>
        )}
        <button className={`text-lg p-1 hover:bg-white hover:text-black rounded-md`}><BiMenu /></button>
      </nav>

      {/* PARENT CONTAINER */}
      <div className=" flex-1 flex overflow-hidden gap-2 bg-gray-900">

        {/* PROFILE CONTAINER */}
        <div className="flex-1 flex flex-col gap-2">
          
          <div className="bg-gray-900 h-full p-4 flex-1 flex flex-col border-r border-gray-700">
            <div className="flex flex-col gap-3 border-gray-500">
              <div className="pb-2">
                <h1 className="text-[1.2rem] whitespace-nowrap font-bold">Ezeobi Chinaemezu Prosper</h1>
                <p className="text-[1rem] text-gray-200 pb-1">Software Developer</p>
                <p className="text-[0.7rem] text-gray-200 pb-1">Port Harcourt, Nigeria</p>
                

              </div>

              <div className="flex gap-2">
                {programming_languages.map((pl, i) => (
                  <span key={i} className="text-[0.6rem] bg-gray-800 px-3 py-0.5 rounded-sm flex items-center justify-center">{pl}</span>
                ))}
              </div>

              <div className="flex justify-between">
                <p className="text-[0.7rem] text-gray-200">prosperezeobi77@gmail.com</p>
                {/* <button><BiCopy /></button> */}
              </div>

              

              <div>
                <div className="text-[0.8rem] py-10">I am a developer who likes working with clear goals and delivering stunning products. <span onClick={() => setMessage(true)} className="px-2 py-1 hover:bg-gray-950 rounded-sm">Work with me today!</span></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-3 py-2 text-sm">
                  <button className="text-gray-300 hover:text-white"><BsTwitterX /></button>
                  <button className="text-gray-300 hover:text-white"><BsLinkedin /></button>
                  <button className="text-gray-300 hover:text-white"><BsGithub /></button>
                </div>
                
              </div>

              <div>
                
              </div>
              

              

            </div>

            
          </div>
        </div>


        {/* PORTFOLIO CONTAINER */}
        <div className="w-[75%] flex overflow-hidden">

          <div className="overflow-y-hidden border-r border-gray-700 relative">
            <h2 className="px-4 py-5  rounded-2xl">Portfolio</h2>

            <div className="bg-gray-900 p-2 rounded-xl overflow-y-auto h-full">

                <div className={`flex-1 max-h-full grid gap-2 p-2 overflow-y-auto ${message ? "grid-cols-3" : " grid-cols-4"}`}>
                  {projects.map((p, i) => (
                    <div key={i} className="hover:bg-gray-800 rounded-2xl p-2">
                      <div className="bg-gray-700 h-[10rem] rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 text-[0.6rem] flex justify-center py-1 text-gray-100 bg-gray-600 rounded-bl-xl w-[5rem]">{p.language}</div>
                      </div>
                      <p className="text-[0.7rem] truncate">{p.projectName}</p>
                    </div>
                  ))}
                </div>

            </div>

            {!message && (
              <div className="absolute top-3 right-0 p-2 border border-gray-600 border-r-0 rounded-l-lg" onClick={() => setMessage(!message)}>
                <RiMessage2Line />
              </div>

            )}


          </div>

          
          <div className={` transition-all duration-300 overflow-hidden ${message ? " min-w-[35%] max-w-[35%] " : "max-w-0 min-w-0"}`}>
            <div className={`h-full p-4 relative`}>
              <form className=" rounded-xl flex-1 flex flex-col pt-6 pb-2 gap-3 h-full">
                <div className="flex text-gray-300">Contact me</div>
                <div className="w-full flex-1 flex flex-col gap-3">
                  <input type="text" placeholder="Name" className="outline-0 w-full border border-gray-600 rounded-sm px-3 py-2 text-[0.8rem] " />
                  <input type="text" placeholder="Email" className="outline-0 w-full border border-gray-600 rounded-sm px-3 py-2 text-[0.8rem] " />
                  <textarea name="" id="" className="outline-0 border border-gray-600 w-full text-sm resize-none px-3 py-2 text-[0.8rem] flex-1 rounded-sm "></textarea>
                </div>

                <button className="border border-gray-600 rounded-sm text-sm py-2 hover:bg-white hover:text-black">Send</button>

              </form>

              <div className="absolute top-5 text-gray-400 right-3 w-5 h-5" onClick={() => setMessage(false)}>
                <div className="border w-5 rotate-45 absolute top-2"/>
                <div className="border w-5 rotate-135 absolute top-2"/>
              </div>
            </div>

          </div>

          {/* MESSAGE CONTAINER */}
          
          
        </div>


      </div>
    </div>
  );
}
