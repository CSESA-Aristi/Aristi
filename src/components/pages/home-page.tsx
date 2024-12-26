import Image from 'next/image';
import React from 'react'

function HomePage() {
  return (
    <div className=' relative w-full min-h-screen grid grid-rows-4 pt-3'>
        <video autoPlay loop muted className='w-full h-full absolute -z-10 object-cover'>
            <source src='./background.mp4' type='video/mp4' />
        </video>
        <div className='w-full row-span-1 flex justify-center'>
            <Image 
                src='./college.svg' 
                alt='college-logo' 
                width={100} 
                height={50} 
                className='bg-transparent w-2/3' 
            />
        </div>
        
        <div className='w-full row-span-3 flex flex-col items-center justify-center'>
            <h1 className='text-6xl md:text-8xl font-bold'>Aristi 2024</h1>
            <p className='text-lg md:text-2xl'>CSE Iot</p>
        </div>
    </div>
  )
}

export default HomePage;