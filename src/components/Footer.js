import React from 'react'
import Udemy from '../logo-udemy-inverted.svg'

function Footer() {
  return (
    <div className='Footer'>
        <div className='First-f'>
            <div className='eachtagbody'>
                <a className='lasta'>Udemy buisness</a>
                <a className='lasta'> Teach On Udemy</a>
                <a className='lasta'>Get The App</a>
                <a className='lasta'> About Us</a>
                <a className='lasta'>Contact Us</a>
            </div>
            <div className='eachtagbody'>
                <a className='lasta'>Careers </a>
                <a className='lasta'>Blog</a>
                <a className='lasta'>Help & Support</a>
                <a className='lasta'>Affiate</a>
                <a className='lasta'>Investors</a>
            </div>
            <div className='eachtagbody'>
                <a className='lasta'>Terms </a>
                <a className='lasta'> Privacy & Policy</a>
                <a className='lasta'>Cookie setings </a>
                <a className='lasta'> SiteMaps</a>
                <a className='lasta'>Assesebility Statements</a>
            </div>
            <div className='eachtagbody'>
              <button className='Languagebtn'>English </button>
            </div>

        </div>
        <div className='Second-f'>
            <img src={Udemy} alt='' width={70} height={70}  />
            <p className='lastp'>© 2022 Udemy, Inc.</p>

        </div>
    </div>
  )
}

export default Footer