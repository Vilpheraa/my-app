import React from 'react'
import image1 from '../image1.jpg'
import image2 from '../image2.jpg'
import image3 from '../image3.jpg'
import image4 from '../image4.jpg'
import image5 from '../image5.jpg'
import image6 from '../image6.jpg'
import image7 from '../image7.jpg'
import image8 from '../image8.jpg'


function Imagebox() {
    return (
        <div className='image-box'>
            <div className='image-box-div'>
           <p className='image-box-text'>Top categories</p>
            </div>
            <div className='someofthem'>
                
                <div className='imagebox-son'>
                    <img src={image1} alt='' className='imagehimself' />
                    <p className='text-101'>Design</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image2} alt='' className='imagehimself' />
                    <p className='text-101'>Development</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image3} alt='' className='imagehimself' />
                    <p className='text-101'>Marketing</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image4} alt='' className='imagehimself' />
                    <p className='text-101'>IT and Software</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image5} alt='' className='imagehimself' />
                    <p className='text-101'>Personal Development</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image6} alt='' className='imagehimself' />
                    <p className='text-101'>Business</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image7} alt='' className='imagehimself' />
                    <p className='text-101'>Photography</p>
                </div>
                

                <div className='imagebox-son'>
                    <img src={image8} alt='' className='imagehimself' />
                    <p className='text-101'>Music</p>
                </div>
                
            </div>
        </div>
    )
}

export default Imagebox