import React from 'react'
import coursels1 from './components/coursels1'
import Slider from 'react-slick'
import {AiFillStar } from "react-icons/ai"
import {ImStarHalf} from "react-icons/im"
import Newsvg from './Surgery.svg'



function Thirdsection() {
    let settings ={
        dot: true,
        infinite: true,
        speed: 500,
        slidestoshow: 5,
        slidestoscrow: 1,
        cssEase: "linear"

    }
    return (
        <div className='thirdsection'>
            <div className='box1'>
                <p className='span4'>Expand your career opportunities with Python</p>
                <p className='span5'>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its
                 <br></br> simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll<br></br>
                 learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
                 <button className='trd-btn'> Explore Python</button>

                 <slider {...settings} >
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>
                    <div className='scrowbox'>
                        <div className='scrowimg'>
                            <img src={Newsvg} alt='' width={200} height={200}/>
                        </div>
                        <p>Learn Python: the complete <br/> Python programing course </p>
                        <p>Avainhash jain, the codex</p>
                        <p>4.2 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <ImStarHalf /></p>

                    </div>

                 </slider>
            </div>

        </div>
    )
}

export default Thirdsection