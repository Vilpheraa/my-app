import React from 'react'
import plancurrimg from './Images/plancurriculum.jpg'

const PlanNav = () => {
  return (
    <div className='nav_div'>
      <img className='girl_coding' src={plancurrimg} alt='' />
      <div className='plan_word'>
        <p className='you_startword'>You start with your passion and knowledge. <br /> Then choose a promising topic with the help of <br /> our Marketplace Insights tool. <br /> <br /> The way that you teach — what you bring to it <br /> — is up to you.</p>
        <h4 className='help_word'>How we help you</h4>
        <p className='offer_word'>We offer plenty of resources on how to create <br />
         your first course. And, our instructor dashboard <br />
          and curriculum pages help keep you organized.</p>
      </div>
    </div>
  )
}

export default PlanNav