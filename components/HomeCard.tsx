import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface HomeProps{
  className : string,
  img: string,
  title: string,
  description: string,
  handleClick : () => void;

}

const HomeCard = ({ className ,img , title , description , handleClick } : HomeProps ) => {
  return (
    <div 
      className={
        cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)
      }

    onClick={ handleClick }>
    <div className='flex-center glassmorphism
        size-12 rounded-[12px]'>
      <Image src={img} alt='meeting' height={27} width={27} />

    </div>
    <div className="flex flex-col gap-2">
      <h1 className='text-2xl font-bold'>  {title}</h1>
      <p className="text-lg font-normal"> {description}</p>
    </div>
  </div>
  )
}

export default HomeCard