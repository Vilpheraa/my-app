import React from 'react'
import LaunchCore from './Images/launchyourcor.jpg'

const LaunchCourse = () => {
  return (
    <div className='nav_div'>
      <img className='launch_img' src={LaunchCore} alt='' />
      <div>
        <p className='gather_word'>Gather your first ratings and reviews by <br /> 
        promoting your course through social media <br /> and your professional networks. <br /> <br />
        Your course will be discoverable in our <br /> marketplace where you earn revenue from <br />
         each paid enrollment.</p>
         <h4>How we help you</h4>

         <p className='custom_word'>Our custom coupon tool lets you offer <br />
          enrollment incentives while our global <br /> promotions drive traffic to courses. There’s <br />
           even more opportunity for courses chosen for <br />
            Udemy Business.</p>
      </div>
    </div>
  )
}

export default LaunchCourse