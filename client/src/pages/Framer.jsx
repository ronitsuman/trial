import React from 'react'
import {motion} from "motion/react"
import Index from './Index'

const Framer = () => {
  return (
    
    <>
    <Index/>
     
      <motion.div
      animate={{x:[0,600,600,0,0],
        y:[0,0,400,400,0],
        rotate:[0,360,0,-360]
      }}
      transition={{
        duration:4,
      
        ease:"anticipate",
        repeat:Infinity
      }}
      className='w-[100px] h-[200px] border '
      >

      </motion.div>
    </>
  )
}

export default Framer