import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { TbInfinity } from 'react-icons/tb';



function Breackthrough() {
    return (
        <div className='breackthrough-nav'>
            <div className='bt-body'>
                <div className='bt-item 1'>
                    <div className='rounding-items-1'><FaPlay size={15} /></div>
                    <p className='boldp'>Learn in-demand skills with over <br /> 213,000 video courses</p>

                </div>
                <div className='bt-item 2'>
                    <div className='rounding-items'><AiFillStar size={25}/></div>
                    <p className='boldp'>Choose courses taught by real-world<br /> experts</p>

                </div>
                <div className='bt-item 3'>
                    <div className='rounding-items'><TbInfinity size={25}/></div>
                    <p className='boldp'>Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>

                </div>
            </div>
            
        </div>
        
       
    )
}

export default Breackthrough