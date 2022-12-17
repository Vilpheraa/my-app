import React from 'react'
import {AiFillStar } from "react-icons/ai"
import {ImStarHalf} from "react-icons/im"
import Newsvg from '../Surgery.svg'
import Goat from '../Designer Life.svg'
import Pig from '../Data extraction.svg'
import Dog from '../First day of school.svg'


function Thirdsection() {
  return (
    <div className='thirdsection'>
            <div className='box1'>
                <p className='span4'>Expand your career opportunities with Python</p>
                <p className='span5'>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its
                 <br></br> simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll<br></br>
                 learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
                 <button className='trd-btn'> Explore Python</button>

                 <slider className="scrowmenu">
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width="100%" height="100%"/>
                        </div>
                        <p className='boldp'>Learn Python: the complete <br/> Python programing course </p>
                        <p  className='lilp'>Avainhash jain, the codex</p>
                
                        <p>4.2 <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10}/></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Goat} alt='' width="100%" height="100%"/>
                        </div>
                        <p className='boldp'>Learn Python: the complete <br/> Analysis and Visualization </p>
                        <p className='lilp'>john prohile</p>
                        <p>4.2<AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10} /> </p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Pig} alt='' width="100%" height="100%"/>
                        </div>
                        <p className='boldp'>Learn Python: the complete  <br/> Programing from scrath </p>
                        <p className='lilp'>Edwin daiz, coding facility </p>
                        <p>4.2 <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10} /> </p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Dog} alt='' width="100%" height="100%"/>
                        </div>
                        <p className='boldp'>Learn Python: the complete <br/> Selenuim Webdriver </p>
                        <p className='lilp' >Adams kinfu</p>
                        <p>4.2<AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10} />  </p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width="100%" height="100%"/>
                        </div>
                        <p className='boldp'>Teach your kids to code: Learn <br/> To program at any age </p>
                        <p className='lilp'>Bryson Pynya</p>
                        <p>4.2 <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10} /> </p>

                    </div>
                    {/* <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width="100%" height="100%"/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <AiFillStar size={10}/> <ImStarHalf size={10} /> </p>

                    </div> */}
                    

                 </slider>
            </div>

        </div>
  )
}

export default Thirdsection