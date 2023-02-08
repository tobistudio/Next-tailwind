import React, {useState} from 'react'
import MIcon from "../../assets/menu-icon.png";


export default function Expand() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [menu, setMenu] = useState("grid")

  return (
    <div className={`w-[357px]`}>
        <div className={`bg-black flex flex-col p-2 rounded-[28px] transition-all ${!toggleMenu ? "h-[56px]" : "h-[236px]"}`}>
            {
            toggleMenu &&
                <div className={`flex flex-col gap-[8px] ${toggleMenu ? "h-[210px] opacity-1" : "w-0 opacity-0"} transition-all justify-around p-2 pl-[40px]`}>
                    <div className='text-white text-xl hover:text-[#009473] cursor-pointer'>Back to OneGrid</div>
                    <div className='text-white text-xl hover:text-[#009473] cursor-pointer'>KOTE CLUB</div>
                    <div className='text-white text-xl hover:text-[#009473] cursor-pointer'>Grid setting</div>
                    <div className='text-white text-xl hover:text-[#009473] cursor-pointer'>Admin</div>
                </div>
            }
            <div className='bg-white/25 cursor-pointer rounded-[38px] p-[10px] w-full min-w-[40px] h-[40px] flex justify-start items-center' onClick={() => setToggleMenu(!toggleMenu)}>
              <img src={MIcon.src} className="w-[20px] h-[20px]" />
              <div className='ml-[10px] text-center text-white text-lg'>Menu</div>
              <div className="border-none text-white text-2xl ml-[225px]">X</div>
            </div>
            
        </div>
    </div>
  )
}
