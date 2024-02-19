import React from 'react'
import './Works.css'

import worksImg from '../../assets/workImg.jpeg'
import cssLogo from '../../assets/skills/css.png'
import htmlLogo from '../../assets/skills/html.png'
import jsLogo from '../../assets/skills/js.png'
import nextLogo from '../../assets/skills/next.png'
import reactLogo from '../../assets/skills/react.png'
import pythonLogo from '../../assets/skills/python.png'


export default function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle ">My Skills</h2>
      <span className="worksDesc">
      My most important skills
      </span>
      <div className="worksImgs">
        <div className='imgFream' > <img src={htmlLogo} alt="works image" className="worksImg" /></div>
        <div className='imgFream'> <img src={cssLogo} alt="works image" className="worksImg" /></div>
        <div className='imgFream'> <img src={jsLogo} alt="works image" className="worksImg" /></div>
        <div className='imgFream'> <img src={reactLogo} alt="works image" className="worksImg" /></div>
        <div className='imgFream'> <img src={nextLogo} alt="works image" className="worksImg" /></div>
        <div className='imgFream'> <img src={pythonLogo} alt="works image" className="worksImg" /></div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}
