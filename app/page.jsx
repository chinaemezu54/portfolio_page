"use client"
import { useEffect, useState } from "react";
import { BiCopy, BiMenu, BiMessage, BiMoon, BiSun } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaMessage } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";
import { GrDocument } from "react-icons/gr";
import { RiMessage2Line } from "react-icons/ri";

export default function Home() {
  const [section, setSection] = useState("Overview")
  const [message, setMessage] = useState(false)

  const sections = ["Overview", "Projects"]
  const projects = [
    {
      title: "Ecommerce Website",
      image: ""
    },
    {
      title: "Ecommerce Website",
      image: ""
    },
    {
      title: "Ecommerce Website",
      image: ""
    }
    
    
  ]

  // const textHighlight = "text-amber-500 font-bold"

  useEffect(() => {
    console.log(section)
  }, [section])

  return (
    <>
      <nav className="flex justify-end items-center gap-5 p-2">
        <div>
          <button className="text-[0.8rem] px-3 py-1 rounded-md bg-gray-100 outline outline-gray-400 hover:bg-gray-200">Contact Me</button>
        </div>
        <div className="flex gap-1">
          <button className="text-lg hover:bg-gray-200 p-1 rounded-md"><BiMoon /></button>
          <button className="text-lg hover:bg-gray-200 p-1 rounded-md"><BiMenu /></button>
          
        </div>
      </nav>

      <div className="flex-1  flex p-1 gap-1">
        <div className="border border-gray-300 min-w-[20%] rounded-md overflow-hidden">
          {/* <h2 className="py-4 px-4 border-b border-gray-200 text-2xl">Portfolio</h2> */}
          <div className="p-4 border-b border-gray-200 flex items-center gap-2">
            <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden relative">
              <img src="/images/image.jpg" alt="profile-img" className="object-cover w-full h-full" />
            </div>
            <div className="">
              <h1 className="whitespace-nowrap">Ezeobi Prosper Chinaemezu </h1>
              <p className="text-sm text-gray-500">Software Developer</p>

              <div className="absolute flex">
                <div className="pr-3">
                  <button className="text-sm rounded-sm p-1 hover:bg-gray-200"><RiMessage2Line /></button>

                </div>
                {/* <div className="text-gray-400 text-[0.8rem]">
                  <button className="rounded-sm p-1 hover:bg-gray-200"><BsTwitterX /></button>
                  <button className="rounded-sm p-1 hover:bg-gray-200"><FaFacebook /></button>
                  <button className="rounded-sm p-1 hover:bg-gray-200"><BsLinkedin /></button>
                </div> */}
                
              </div>
            </div>
          </div>

          <div className="px-2 py-4 flex flex-col gap-2">
            {sections.map((s, i) => (
              <div key={i} className={`flex justify-center py-3 gap-2 border rounded-md text-sm cursor-default  ${s == section ? "bg-gray-100 border-gray-400" : "hover:bg-gray-100 border-white"}`} onClick={() => setSection(s)}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 border rounded-md border-gray-300">
          {section == "Overview" ? (
            <div className="h-full flex flex-col p-1 relative">
              

              {/* Message Form */}
              <div className={`absolute top-[20%] right-[20%] border border-gray-300 rounded-md bg-white shadow-md ${message ? "block" : "hidden"}`}>
                <p className="py-4 flex justify-center text-xl border-b border-gray-300">Contact Me</p>

                <form action="" className="flex flex-col gap-2 p-2">
                  <div className="flex gap-2">
                    <input type="text" className="border border-gray-400 px-3 py-2 rounded-md w-[18rem] text-sm focus:outline-none" placeholder="Name" />
                    <input type="text" className="border border-gray-400 px-3 py-2 rounded-md w-[18rem] text-sm focus:outline-none" placeholder="Email" />

                  </div>
                  <textarea name="" id="" className="border border-gray-400 w-full h-[15rem] resize-none rounded-md p-2 text-sm focus:outline-none"></textarea>
                  <button className="w-full py-2 border border-gray-400 rounded-md hover:bg-gray-700 hover:text-white font-bold" type="submit">Send</button>
                </form>

                <button className="absolute left-5 top-5 text-sm" onClick={() => setMessage(false)}>cancel</button>
              </div>

              
              
            </div>
          ) : section == "Projects" && (
            <div className="grid grid-cols-4 p-1 gap-x-1 gap-y-3">
              {projects.map((p, i) => (
                <a href="" target="blank" noreferer noopener className="" key={i}>
                  <div className="overflow-hidden">
                    <div className="border border-gray-300 h-[10rem] rounded-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-gray-200 rounded-bl-md min-w-[5rem] flex justify-center py-1">
                      <p className=" text-[0.7rem]">JavaScript</p>
                    </div>
                    </div>
                    <p className="text-[0.8rem]">{p.title}</p>

                    

                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
