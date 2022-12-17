import React from 'react'
import Nasdaq from '../nasdaq-dark.svg'
import Volkwagen from '../volkswagen-dark.svg'
import netapp from '../netapp-dark.svg'
import tcs from '../tcs-dark.svg'

function Sixthsection() {
  return (
    <div className='Tundethegreat'>
         <div className='brownsection'>
            <p className='james-brown-jr'>Trusted by over 13,400 great teams</p>
            <p className='lilsmiz'>Leading companies use the same courses to help employees keep their skills fresh.</p>
         </div>
         <div className='anothernav'>
             <img src={Nasdaq} alt='' />
             <img src={Volkwagen} alt='' />
             <img src={netapp} alt='' />
             <img src={tcs} alt='' />


         </div>
    </div>
  )
}

export default Sixthsection