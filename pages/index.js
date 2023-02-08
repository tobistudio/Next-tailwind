import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'
import MIcon from "../assets/menu-icon.png"

const Test = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [menu, setMenu] = useState("grid")

  return (
        <div className={`${toggleMenu ? "w-[306px]" : "w-[56px]"}  transition-all`}>
      <div className={`bg-black flex flex-row p-2 rounded-[28px] "w-[306px]"`}>
          <div className='bg-white/25 cursor-pointer rounded-[38px] p-[10px] w-[40px] min-w-[40px] h-[40px] flex justify-center align-middle' onClick={() => setToggleMenu(!toggleMenu)}>
            <img src={MIcon.src} className="w-full h-full"/>
          </div>
         {
          toggleMenu && 
          setTimeout(() => {return (
            <div className={`flex flex-row gap-[8px] ${toggleMenu ? "w-[250px] opacity-1" : "w-0 opacity-0"} transition-all `}>
              <div className='ml-[8px] gap-[5px] bg-white/25 box-border h-full rounded-[38px] flex justify-center items-center align-middle'>
                <div className={`${menu === "grid" && "bg-[#333285]"} text-base text-white no-underline rounded-[38px] h-full px-[16px] flex items-center transition-all cursor-pointer`}onClick={() => setMenu("grid")}>Grid</div>
                <div className={`${menu === "updates" && "bg-[#333285]"} text-base text-white no-underline rounded-[38px] h-full px-[16px] flex items-center transition-all cursor-pointer`} onClick={() => setMenu("updates")}>Updates</div>
              </div>
              <div className='bg-[#FCBD68] px-[16px] flex items-center text-base w-[76px] text-white rounded-[38px]  break-keep cursor-pointer'>Log in</div>
            </div>
          )}, 10)
          
          }
        </div>
      </div>
  )
}

export default Test;