import React from 'react'
import myImage from '../../assets/myImage.png'
import work from '../../assets/work.svg'
import { Link } from 'react-scroll'
import './Intro.css'


export default function Intro() {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Mahdi</span> </span>
            <p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websit</p>
            <Link ><button className='btn'><img src={work} className='btnImg' />Hire me </button></Link>
        </div>
        <img src={myImage} className='bg'/>
    </section>
  )
}
 