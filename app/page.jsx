"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCopy, BiMenu, BiMessage, BiMoon, BiSun } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaFacebook, FaMessage } from "react-icons/fa6";
import { FcDocument, FcSettings } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { RiMessage2Line } from "react-icons/ri";

export default function Home() {
  const [section, setSection] = useState("Overview")
  const [message, setMessage] = useState(false)
  const [menu, setMenu] = useState(false)
  const [lightTheme, setLightTheme] = useState(true)
  const [copied, setCopied] = useState(false)

  const [senderEmail, setSenderEmail] = useState("")
  const [senderName, setSenderName] = useState("")

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

  function copyText() {
    const text = document.getElementById("text-to-copy").innerText
    navigator.clipboard.writeText(text)
      // .then(() => {
      //   alert("Text copied to clipboard")
      // })
      // .catch(err => {
      //   console.error("Failed to copy text: ", err)
      // })
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
  }

  return (
    <>
      {/* <nav className={`flex justify-end items-center gap-5 p-2 ${!lightTheme && darkTheme}`}>
        <div>
          <button className={`text-[0.8rem] px-3 py-1 rounded-md bg-gray-100 border border-gray-400  ${!lightTheme && darkTheme} ${!lightTheme ? "hover:bg-gray-800" : "hover:bg-gray-200"}`} onClick={() =>setMessage(!message)}>Contact Me</button>
        </div>
        <div className="flex gap-1 relative">
          <button className={`text-lg hover:bg-gray-100 p-1 rounded-md ${!lightTheme ? "hover:bg-gray-600" : "hover:bg-gray-200"} ${lightTheme && menu && "bg-gray-200"} ${!lightTheme && menu && "bg-gray-600"}`} onClick={() => setMenu(!menu)}><BiMenu /></button>

          {menu && (
            <div className={`absolute right-0 top-8  text-sm p-2 z-10 border border-gray-500 rounded-md flex items-center gap-3  ${!lightTheme ? "bg-gray-900" : "bg-white"}`}>
              <p>theme</p>
              <div className={`border  py-1 px-2 rounded-md  cursor-pointer min-w-[4rem] flex justify-center ${!lightTheme ? "hover:bg-gray-800 border-gray-700" : "hover:bg-gray-200 border-gray-300"}`} onClick= {() => setLightTheme(!lightTheme)}>{lightTheme ? "light" : "dark"}</div>
            </div>
          )}
          
        </div>
      </nav> */}

      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen max-h-screen overflow-hidden">
        <div className={`flex-1 flex p-1 gap-1 overflow-hidden  ${!lightTheme && darkTheme}`}>
          <div className={` min-w-[20%] rounded-md overflow-hidden relative ${!lightTheme ? "border-gray-500" : "border-gray-300"}`}>
            <p className="px-4 pt-10 pb-7 text-3xl font-bold">Portfolio</p>

            <div className="px-1 flex flex-col gap-2">
              {sections.map((s, i) => (
                <div key={i} className={`flex pl-6 py-2 gap-2 border rounded-lg text-sm cursor-default 
                ${!lightTheme && s == section && "border-gray-700 bg-gray-800"}  
                ${!lightTheme && s != section && "border-gray-800"} 
                ${lightTheme && s == section && "border-gray-400 bg-white"} 
                ${lightTheme && s != section && "border-gray-50 hover:bg-gray-100"}`} onClick={() => setSection(s)}>
                  {s}
                </div>
              ))}
            </div>

            <div className="flex gap-1 absolute bottom-2 left-2">
              <button className={`p-1 rounded-md flex items-center text-sm gap-2 px-2 ${!lightTheme ? "hover:bg-gray-600" : "hover:bg-gray-200"} ${lightTheme && menu && "bg-gray-200"} ${!lightTheme && menu && "bg-gray-600"} ${section == "Menu" && lightTheme && "bg-gray-200"}`} onClick={() => setSection("Menu")}><LuSettings /> settings</button>
            </div>
          </div>

          <div className={`flex-1 border rounded-lg relative ${!lightTheme ? "border-gray-500" : "border-gray-800 bg-white"}`}>
            {section == "Overview" && (
              <div className="h-full flex-1 flex relative">


                <div className="flex-1 h-full relative">
                  <div className=" h-full flex flex-col  ">
                    <div className={`border-b ${!lightTheme ? "border-gray-700 bg-gray-800" : "border-gray-400"}`}>
                      <div className="p-4 rounded-md border-gray-200 flex items-center gap-2">
                        <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden relative">
                          <img src="/images/image.jpg" alt="profile-img" className="object-cover w-full h-full" />
                        </div>
                        <div className="">
                          <h1 className="whitespace-nowrap  text-2xl">Ezeobi Prosper Chinaemezu</h1>
                          <p className="text-sm text-gray-500">Software Developer</p> 
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-1 gap-2 p-2">
                      <div className={`text-[0.8rem] flex justify-center items-center flex-1 border border-gray-200 rounded-md ${!lightTheme ? "border-gray-700" : "border-gray-200"}`}>
                        <div className="flex flex-col gap-5">
                          <div className="flex flex-col gap-4">
                            <div className="cursor-pointer flex gap-2 items-center relative"><p className={`px-2 py-1  rounded-sm cursor-default w-fit ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>email</p> <p className="" id="text-to-copy" onClick={copyText}>prosperezeobi77@gmail.com</p>
                            <p className={`absolute left-full px-2 py-0.5 mx-2 rounded-sm text-xs bg-gray-300 ${copied ? "block" : "hidden"}`}>copied</p>
                            </div>
                            
                            <p className="flex gap-2 items-center"><span className={`px-2 py-1 bg-gray-200 rounded-sm ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>languages</span>JavaScript Python C++</p>
                            <p className="flex gap-2 items-center"><span className={`px-2 py-1 bg-gray-200 rounded-sm ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>tech stack</span>Next.js Express PostgreSQL Supabase</p>
                            <div className="flex gap-2 items-center"><p className={`px-2 py-1 bg-gray-200 rounded-sm w-fit ${!lightTheme ? "bg-gray-800" : "bg-gray-200"}`}>links</p>
                            <div className="flex gap-2">
                              <a href="https://github.com" target="_blank">Github</a>
                              <a href="">LinkedIn</a>
                            </div>
                            </div>
                            
                          </div>

                          <div className="flex gap-3">
                            <button className={`border  flex justify-center py-2 w-full text-sm rounded-md ${!lightTheme ? "hover:bg-gray-800 border-gray-600" : "hover:bg-gray-100 border-gray-200"}`} onClick={() => setSection("Projects")}>
                              View Projects
                            </button>
                            <button className="border border-gray-300 flex justify-center items-center py-2 px-4 text-sm rounded-md bg-gray-800 text-white whitespace-nowrap" onClick={() => setMessage(!message)}>
                              Contact Me
                            </button>

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
            )}
            {section == "Projects" && (
              <div className="grid grid-cols-4 p-1 gap-x-1 h-full gap-y-3 overflow-auto">
                {projects.map((p, i) => (
                  <a href={p.link} target="blank" noreferer noopener className={` p-2 rounded-lg h-fit ${!lightTheme ? "hover:bg-gray-800" : "hover:bg-gray-100"}`} key={i}>
                    <div className="overflow-hidden">
                      <div className={`border h-[10rem]  rounded-md relative overflow-hidden ${!lightTheme ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
                        {/* <div className={`absolute top-0 right-0  rounded-bl-md min-w-[5rem] flex justify-center py-1 ${!lightTheme ? "bg-gray-700" : "bg-gray-200"}`}>
                          <p className=" text-[0.7rem]">{p.language}</p>
                        </div> */}
                      </div>
                      <p className="text-[0.8rem]">{p.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
            {section == "Menu" && (
              <div className=" p-1">
                <div className={`text-md py-10 px-4 z-10 rounded-lg flex items-center gap-5 ${!lightTheme ? "bg-gray-900" : "bg-white border border-gray-200"}`}>
                  <p>theme</p>
                  <div className={`border  py-1 px-2 rounded-md  cursor-pointer min-w-[4rem] flex justify-center ${!lightTheme ? "hover:bg-gray-800 border-gray-700" : "hover:bg-gray-100 border-gray-300"}`} onClick= {() => setLightTheme(!lightTheme)}>{lightTheme ? "light" : "dark"}</div>
                </div>

              </div>
            )}

            <div className={`rounded-md absolute right-0 top-0 pt-2 pb-2 h-full bg-white transition-all duration-200 ${message ? "block w-[32rem] pr-2" : "w-0"}`}>
              <form className={`border-gray-400 rounded-lg h-full p-2 border shadow-xl ${message ? "" : "hidden "}  ${!lightTheme ? "bg-gray-900 text-white" : "bg-white"}`}>
                <div className="w-full h-full gap-2 flex flex-col overflow-hidden">
                  <div className="w-full flex justify-center py-4 text-xl">Contact Form</div>
                  <div className="flex gap-2 text-sm items-center">
                    <label htmlFor="" className="pr-4">To:</label>
                    <div type="text"  className="px-3 py-2 border border-gray-300 text-sm w-full rounded-sm bg-gray-200">prosperezeobi77@gmail.com</div>
                  </div>
                  <div className="flex gap-2 text-sm items-center">
                    <label htmlFor="">From:</label>
                    <input type="text"  className="px-3 py-2 border border-gray-300 text-sm w-full rounded-sm focus:outline-none" placeholder="Email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)}/>
                  </div>
                  <div className="flex gap-2 text-sm items-center">
                    <label htmlFor="">Name:</label>
                    <input type="text"  className="px-3 py-2 border border-gray-300 text-sm w-full rounded-sm focus:outline-none" placeholder="Full Name" value={senderName} onChange={(e) => setSenderName(e.target.value)}/>
                  </div>
                  <textarea name="" id="" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none" placeholder="Type a message..."></textarea>
                  <button type="submit" className="w-full py-3 border border-gray-400 bg-gray-900 text-white text-sm rounded-lg" disabled={true}>Send</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}
