"use client"
import Link from "next/link";
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
  const [menu, setMenu] = useState(false)
  const [lightTheme, setLightTheme] = useState(true)

  const sections = ["Overview", "Projects"]
  const projects = [
    {
      title: "Learna",
      image: "",
      link: "https://learna-three.vercel.app/"
    },
    
    
    
  ]

  // const textHighlight = "text-amber-500 font-bold"

  useEffect(() => {
    console.log(section)
  }, [section])

  const latest = projects.length - 1
  const latestProject = projects[latest]

  const darkTheme = "bg-gray-900 border-gray-700 text-white"

  return (
    <>
      <nav className={`flex justify-end items-center gap-5 p-2 ${!lightTheme && darkTheme}`}>
        <div>
          <button className={`text-[0.8rem] px-3 py-1 rounded-md bg-gray-100 border border-gray-400  ${!lightTheme && darkTheme} ${!lightTheme ? "hover:bg-gray-800" : "hover:bg-gray-200"}`} onClick={() =>setMessage(!message)}>Contact Me</button>
        </div>
        <div className="flex gap-1 relative">
          {/* <button className="text-lg hover:bg-gray-200 p-1 rounded-md"><BiMoon /></button> */}
          <button className={`text-lg hover:bg-gray-100 p-1 rounded-md ${!lightTheme ? "hover:bg-gray-600" : "hover:bg-gray-200"} ${lightTheme && menu && "bg-gray-200"} ${!lightTheme && menu && "bg-gray-600"}`} onClick={() => setMenu(!menu)}><BiMenu /></button>

          {menu && (
            <div className={`absolute right-0 top-8  text-sm p-2 z-10 border border-gray-500 rounded-md flex items-center gap-3  ${!lightTheme ? "bg-gray-900" : "bg-white"}`}>
              <p>theme</p>
              <div className={`border  py-1 px-2 rounded-md  cursor-pointer min-w-[4rem] flex justify-center ${!lightTheme ? "hover:bg-gray-800 border-gray-700" : "hover:bg-gray-200 border-gray-300"}`} onClick= {() => setLightTheme(!lightTheme)}>{lightTheme ? "light" : "dark"}</div>
            </div>
          )}
          
        </div>
      </nav>

      <div className={`flex-1  flex p-1 gap-1 ${!lightTheme && darkTheme}`}>
        <div className={`border  min-w-[20%] rounded-md overflow-hidden ${!lightTheme ? "border-gray-500" : "border-gray-300"}`}>
          <p className="px-4 py-4 text-xl">Portfolio</p>

          <div className="px-1 flex flex-col gap-2">
            {sections.map((s, i) => (
              <div key={i} className={`flex justify-center py-2 gap-2 border rounded-md text-sm cursor-default ${!lightTheme && s == section && "border-gray-700 bg-gray-800"}  ${!lightTheme && s != section && "border-gray-800"} ${lightTheme && s == section && "border-gray-400 bg-gray-100"} ${lightTheme && s != section && "border-gray-200 hover:bg-gray-100"}`} onClick={() => setSection(s)}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className={`flex-1 border rounded-md p-1 relative ${!lightTheme ? "border-gray-500" : "border-gray-300"}`}>
          {section == "Overview" ? (
            <div className="h-full flex-1 flex relative">


              <div className="flex-1 h-full relative">
                <div className=" h-full flex flex-col gap-1 ">
                  <div className={`rounded-md${!lightTheme ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"}`}>
                    <div className="p-4 border-gray-200 flex items-center gap-2">
                      <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden relative">
                        <img src="/images/image.jpg" alt="profile-img" className="object-cover w-full h-full" />
                      </div>
                      <div className="">
                        <h1 className="whitespace-nowrap font-bold text-2xl">Ezeobi Prosper Chinaemezu </h1>
                        <p className="text-sm text-gray-500">Software Developer</p> 
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-1 gap-1">
                    <div className={`text-[0.8rem] flex justify-center items-center flex-1 border border-gray-200 rounded-md ${!lightTheme ? "border-gray-700" : "border-gray-200"}`}>
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                          <p className="cursor-pointer"><span className={`px-2 py-1  rounded-sm cursor-default ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>email</span> prosperezeobi77@gmail.com</p>
                          
                          <p className="flex gap-2 items-center"><span className={`px-2 py-1 bg-gray-200 rounded-sm ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>languages</span>JavaScript Python C++</p>
                          <div className="flex gap-2 items-center"><p className={`px-2 py-1 bg-gray-200 rounded-sm w-fit ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>links</p>
                          <div className="flex gap-2">
                            <a href="https://github.com" target="_blank">Github</a>
                            <a href="">LinkedIn</a>
                          </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button className={`border  flex justify-center py-2 w-full text-lg rounded-md ${!lightTheme ? "hover:bg-gray-800 border-gray-600" : "hover:bg-gray-100 border-gray-200"}`} onClick={() => setSection("Projects")}>
                            View Projects
                          </button>
                          {/* <button className="border border-gray-300 flex justify-center items-center py-2 px-4 text-xl rounded-md bg-gray-800 text-white" onClick={() => setMessage(!message)}>
                            <BiMessage />
                          </button> */}

                        </div>

                      </div>
                      
                    </div>

                    <div className={`w-[30%] flex justify-center items-center px-4 border rounded-md ${!lightTheme ? "border-gray-700" : "border-gray-200"}`}>
                      <div className="w-full">
                        <p className="py-2 px-4">Latest Project</p>

                        <div className={` p-2 rounded-lg ${!lightTheme ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}>
                          <Link href={latestProject.link} target="blank" noreferer noopener className="">
                            <div className="overflow-hidden">
                              <div className={`border h-[10rem]  rounded-md relative overflow-hidden ${!lightTheme ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
                                <div className={`absolute top-0 right-0  rounded-bl-md min-w-[5rem] flex justify-center py-1 ${!lightTheme ? "bg-gray-700" : "bg-gray-200"}`}>
                                <p className=" text-[0.7rem]">JavaScript</p>
                              </div>
                              </div>
                              <p className="text-[0.8rem]">{latestProject.title}</p>
                            </div>
                          </Link>

                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              
              
            </div>
          ) : section == "Projects" && (
            <div className="grid grid-cols-4 p-1 gap-x-1 gap-y-3">
              {projects.map((p, i) => (
                <a href={p.link} target="blank" noreferer noopener className={` p-2 rounded-lg ${!lightTheme ? "hover:bg-gray-800" : "hover:bg-gray-100"}`} key={i}>
                  <div className="overflow-hidden">
                    <div className={`border h-[10rem]  rounded-md relative overflow-hidden ${!lightTheme ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
                      <div className={`absolute top-0 right-0  rounded-bl-md min-w-[5rem] flex justify-center py-1 ${!lightTheme ? "bg-gray-700" : "bg-gray-200"}`}>
                      <p className=" text-[0.7rem]">JavaScript</p>
                    </div>
                    </div>
                    <p className="text-[0.8rem]">{p.title}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          <form className={`border-gray-400 rounded-md h-full absolute right-0 top-0  transition-all duration-200 ${message ? "block w-[28rem] border " : "w-0"} ${!lightTheme ? "bg-gray-900 text-white" : "bg-white"}`}>
            <div className="w-full h-full gap-2 flex flex-col overflow-hidden">
              <div className="w-full flex justify-center py-2">Contact Me</div>
              <input type="text"  className="px-3 py-2 border border-gray-300 text-sm w-full rounded-sm focus:outline-none" placeholder="Name"/>
              <input type="text"  className="px-3 py-2 border border-gray-300 text-sm w-full rounded-sm focus:outline-none" placeholder="Email"/>
              <textarea name="" id="" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none"></textarea>
              <button type="submit" className="w-full py-3 border border-gray-400 bg-gray-800 text-white text-sm rounded-md">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
