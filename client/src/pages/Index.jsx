import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <ul className='flex border items-center justify-between'>
            <Link to='/responsive'>1 . Responsive Design</Link>
            <Link to='/animation'>2. css Animation </Link>
            <Link to='/framer'>3. framer animation </Link>

            
        </ul>
    </div>
  )
}

export default Index