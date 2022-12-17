import React from 'react'
import Recordvideo from './Images/recordvid.jpg'

const RecVid = () => {
  return (
    <div className='nav_div'>
      <img className='girl_withlaptop' src={Recordvideo} alt='' />
      <div>
        <p className='basic_toolsword'>Use basic tools like a smartphone or a DSLR 
          camera. Add a good microphone and you’re 
          ready to start.
          <br /> <br />
          If you don’t like being on camera, just capture 
           your screen. Either way, we recommend two <br />
            hours or more of video for a paid course.</p>
            <h3>How we help you</h3>

            <p className='support_word'>Our support team is available to help you <br /> 
            throughout the process and provide feedback <br /> 
            on test videos.</p>
      </div>
    </div>
  )
}

export default RecVid