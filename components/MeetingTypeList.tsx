"use client";
import Image from 'next/image';
import React from 'react'

const MeetingTypeList = () => {
  return (
    <section className=' grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <div className="bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px]
        min-h-[260px] rounded-[14px] cursor-pointer" 
        onClick={()=>{

        }}>
            <div className='flex-center glassmorphism
            size-12 rounded-[12px]'>
                <Image src='/icons/add-meeting.svg' alt='meeting' height={27} width={27} />

            </div>
        </div>
    </section>
  )
}

export default MeetingTypeList