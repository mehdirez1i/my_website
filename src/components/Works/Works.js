import React from 'react'
import './Works.css'

import worksImg from '../../assets/workImg.jpeg'


export default function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle ">My Protfolio</h2>
      <span className="worksDesc">
        I take pride attention to the smallest detaile and works
      </span>
      <div className="worksImgs">
        <img src={worksImg} alt="works image" className="worksImg" />
        <img src={worksImg} alt="works image" className="worksImg" />
        <img src={worksImg} alt="works image" className="worksImg" />
        <img src={worksImg} alt="works image" className="worksImg" />
        <img src={worksImg} alt="works image" className="worksImg" />
        <img src={worksImg} alt="works image" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}
