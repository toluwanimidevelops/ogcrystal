import React from 'react'
import { HiOutlineClipboardList } from 'react-icons/hi';

const DashboardCard = ({special, name, count, iconBgColor, icon }:{special?: boolean, name: string, count:number|string, iconBgColor: string, icon: React.ReactNode}) => {
  return (
      <div className={`w-full p-5 shadow-xl shadow-grey-100/10 ${special? "bg-linear-to-br from-[#071a3d]/60 to-[#071a3d]" : "bg-white"}     rounded-3xl flex flex-col justify-between h-30  `}>
          <div className="flex justify-between">
            
              <h1 className={`text-md ${!special? "text-black":""} `}>{name}</h1>
              <div className={`${iconBgColor} size-10 rounded-full flex justify-center items-center`}>
                    {icon}
                  </div>
          </div>
          <div className="flex items-end justify-between">
            
              <h1 className={`text-2xl leading-none font-medium ${!special? "text-[#071a3d]":""} `}>{count}</h1>
                  <div className={`flex ${!special? "text-black/50":""} text-sm leading-none gap-3 cursor-pointer items-center`}><HiOutlineClipboardList  /> See List</div>
          </div>
            </div>
  )
}

export default DashboardCard