import React from 'react'
import Index from './Index'

const ResponsiveDesign = () => {
  return (
    <>
    <Index/>
    <div className='border bg-green-200 p-2 flex items-center flex-col gap-2 md:flex-row md:bg-yellow-200'>
        <div className='w-[50%] flex gap-2 flex-col'>
            <h1 className='border p-2'>Licef Health Care</h1>
            <p className='border p-2 '>A Promising Health care</p>
        </div>
        <div className='w-[50%] roundex-2xl '>
            <img src="ball.jpg"  width='100%' className='rounded-xl'  alt="" />
        </div>
    </div>
    </>
  )
}

export default ResponsiveDesign