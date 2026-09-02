import Header from '@/components/About/Header'
import React from 'react'
import { Ear } from 'lucide-react';
import { FaBrain, FaCompass } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import OurValues from '@/components/Home/OurValues';
const lists = [
  { icon: <Ear />, id: 1, title: "Listen", description: "We start by hearing you out and understanding your context." },
  { icon: <FaBrain />, id: 2, title: "Understand", description: "We look beneath the surface to identify what is really happening." },
  { icon: <FaCompass />, id: 3, title: "Guide", description: "We bring expertise, perspective and practical recommendations." },
  { icon: <FiRefreshCw />, id: 4, title: "Transform", description: "We help turn recommendations into meaningful action and better outcomes." }
]
const page = () => {
  return (
    <div>
      <Header small="The Process" text='Our Approach' />
      <div className="max-w-full my-20 gap-5  grid grid-cols-3 w-7xl px-6 md:px-12 mx-auto">
        {
          lists.map((list, index) => (
            <div key={index} className='flex rounded-2xl p-10 bg-[#EAF2FB]/50 items-center text-center gap-4 max-md:gap-2 flex-col  '>
              <div className=' p-4 bg-[#EAF2FB] rounded-full text-[#071A3D] text-[30px] max-md:text-[20px]'>
                {list.icon}
              </div>
              <div>
                <h3 className='text-[#071a3d]
                   font-mulish text-[20px] max-md:text-[20px] tracking-tighter font-semibold'>{list.title}</h3>
                <p className="max-sm:text-[14px] font-light max-lg:text-[15px] text-[#7a7a7a]">{list.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <OurValues noPadding={true}/>
    </div>
  )
}

export default page