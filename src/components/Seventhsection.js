import React from 'react'
import Woman from '../ub-1x-v3.jpg'
import Udemybuisness from '../logo-ub.svg'

function Seventhsection() {
  return (
    <div>
           <div className='seefinish'>
             <div className='ojiji'>
               <img src={Udemybuisness} alt='' width={250} />
                <p className='lilsmiz'>Get unlimited access to 19,000+ of Udemy’s <br></br>
                top courses for your team. Learn and improve <br></br>
                skills across business, tech, design, and more.
                </p>
                <button className='oga-box'> Get Udemy Business</button>
            </div>
            <div className='imagebox101'>
                <img src={Woman} alt='' width="100%" height="100%" />
            </div>
           
            </div>
    </div>
  )
}

export default Seventhsection