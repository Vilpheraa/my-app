import React from 'react'
import ladyimg from '../ladysmiling.jpg';
import handonboard from './Images/hand on board.jpg'
import spaceimg from './Images/aeoroe space.jpg'
import awardimg from './Images/award.jpg';
import TeamWork from './Images/support1.jpg'
import { Link } from 'react-router-dom'
import NasLogo from './Logo img/nasdaq-light.svg'
import VolksLogo from './Logo img/volkswagen-light.svg'
import BoxLogo from './Logo img/box-light.svg'
import NetLogo from './Logo img/netapp-light.svg'
import EvenLogo from './Logo img/eventbrite-light.svg'
import UdemyFooterLogo from './Logo img/udemylogo.svg'
import {HiOutlineShoppingCart } from "react-icons/hi"
import {AiOutlineGlobal } from "react-icons/ai"
import UdemyLogo from './Logo img/logoudemy .svg'
// import NavComp from '../Nav Items/nav';

const TeachPage = () => {
  return (
    <>
    <header>
    <div className='header_div'>
      {/* <img className='udemy_logo' src={udemylogo} alt='' height={55}/>
      <img className='shoppingcart_icon' src={shoppingcarticon} alt='' /> */}
    <nav>
      <img className='header_logo' src={UdemyLogo} alt='' />
      <a href='./ca' className='nav_itemm'>Categories</a>
      <a href='/ud' className='nav_item2'>Udemy Buisness</a>
      <a href='/tc' className='nav_item3'>Teach on Udemy</a>
      <HiOutlineShoppingCart className='shoppingcart_icon'/>
    </nav>
    <input type='text' placeholder='search anything' className='search_inp'/>
    <button className='login_btn'>Log In</button>
    <button className='signup_btn'>Sign Up</button>
    <button className='globe_btn'><AiOutlineGlobal /></button>
</div> 
</header>
    <main>
        <div className='div_1'>
                        <h1 className='come_word'>Come teach</h1>
                        <h1 className='withus-word'>With us</h1>
                        <p className='become_word'>Become an instructor and change  lives -- including your own</p>
                        <button className='get_startedbtn'>Get Started</button>
            <img className='lady_smilingimg' src={ladyimg} alt="" />
        </div>
        <div className='div_2'>
          <h2 className='so_word'>So many reasons to start</h2>
          <div className='child_div'>
            <img className='handonb_img' src={handonboard} alt='' />
            <h1 className='teach_word'>Teach your way</h1>
            <img className='space_img' src={spaceimg} alt='' />
            <h1 className='inspire_word'>Inspire learners</h1>
            <img className='award_img' src={awardimg} alt='' />
            <h1 className='get_rewarded'>Get rewarded</h1>
          </div>
          <div className='publish_div'>
                        Publish the course you want, in the way you <br />want, and always have control of your own <br /> content.
                    </div>
                    <div className='Teach_div'>
                            Teach what you know and help learners explore <br /> their interests, gain new skills, and advance <br /> their careers.
                        </div>
                        <div className='expand_div'>
                            Expand your professional network, build your  expertise, and earn money on each paid  enrollment.
                        </div>
        </div>
        <div className='div_3'>
            <div className='number_div'>
            <h1 className='numb_1'>57M</h1>
            <h4 className='students_word'>Students</h4>
          </div>
          <h1 className='numb_2'>75+</h1>
          <h4 className='language_word'>Languages</h4>
          <h1 className='numb_3'>773M</h1>
          <h4 className='enroll_word'>Enrollments</h4>
          <h1 className='numb_4'>180+</h1>
          <h4 className='countries_word'>Countries</h4>
          <h1 className='numb_5'>13,400+</h1>
          <h4 className='enterprise_word'>Enterprise</h4>
        </div>
        <div className='next_div'>
          <h1 className='how_word'>How to begin</h1>
        </div>
        <div className='img_div'>
          <img className='teamwork_img' src={TeamWork} alt='' />
        </div>
        <div className='head_worddiv'>
          <h1 className='head_word'>You won't have to do it alone</h1>
        </div>
  
        <div className='instructor_word'>
        Our <b>Instructor Support Team</b> is here to answer your questions and <br />
         review your test video, while our <b>Teaching Center</b> gives you plenty of <br />
          resources to help you through the process. Plus, get the support of <br />
            <n className='experienced_word'>experienced instructors in our <b>online community.</b></n>
            <nav>
              <Link className='link_items' to='/'><b>Need more detials before you start? Learn more.</b></Link>
            </nav>
        </div>
        <div className='instructor_div'>
          <div className='become_div'>
            <h1>Become an instructor today</h1>
          </div>
          <div className='join_div'>
            <p>Join one of the world's largest online learning marketplaces.</p>
            <button className='getstarted_btn'>Get Started</button>
          </div>
        </div>
    </main>
    <footer>
      <div className='word2_div'>
        <b className='top_word'>Top companies choose <b className='udemyb_word'>Udemy Buisness</b> to build in-demand career skills.</b>
      </div>
      <div className='logo_div'>
        <img src={NasLogo} alt='' />
        <img className='logo_1' src={VolksLogo} alt='' />
        <img className='logo_2' src={BoxLogo} alt='' />
        <img className='logo_3' src={NetLogo} alt='' />
        <img className='logo_4' src={EvenLogo} alt='' />
      </div>
      <div className='border_line'>
      </div>
      <div className='footernav_div'>
        <nav className='nav'>
          <Link className='link_item1'>Udemy Business</Link><br />
          <Link className='link_item2'>Teach on Udemy</Link><br />
          <Link className='link_item3'>Get the app</Link><br />
          <Link className='link_item4'>About us</Link><br />
          <Link className='link_item5'>Contact us</Link>
        </nav>
        <nav className='nav_1'>
          <Link className='link_item6'>Career</Link><br />
          <Link className='link_item7'>Blog</Link><br />
          <Link className='link_item8'>Help and Suppport</Link><br />
          <Link className='link_item9'>Affiliate</Link><br />
          <Link className='link_item10'>Investors</Link>
        </nav>
        <nav className='nav_2'>
          <Link className='link_item11'>Terms</Link><br />
          <Link className='link_item12'>Privacy policy</Link><br />
          <Link className='link_item13'>Cookie settings</Link><br />
          <Link className='link_item14'>Sitemap</Link><br />
          <Link className='link_item15'>Accessibility statement</Link>
        </nav>
        <img className='udemyfooter_logo' src={UdemyFooterLogo} alt='' />
        <p className='copyright_word'>@2022 Udemy Copyright</p>
      </div>
    </footer>
    </>
  )
}

export default TeachPage