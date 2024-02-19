import React, { useState } from "react";
import "./App.css";
import NavBar from './components/NavBar/NavBar'
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolios from "./components/Portfolios/Portfolios";

import memoryGame from './assets/screenImg/memoryGame.png'
import likeFacebook from './assets/screenImg/likeFacebook.png'

const myPortfolio = [
  {
    id: "1",
    title: "Memory Game",
    desc:"In this game you have to find two similar images.",
    attributes: [
      "react",
      "react/props/useState/useEffect",
      "HTML",
      "css",
      "JavaScript"
    ],
    image:memoryGame,
    linkOnlin:"https://mahdirez1.ir/portfolios/memorygame/",
    linkGithub:"https://github.com/mehdirez1i/memory_game"
  },
  {
    id: "2",
    title: "Ocialbook",
    desc:"It effectively communicates that the website's design resembles that of Facebook and is intended for use in desktop mode.",
    attributes: [
      "HTML",
      "css",
      "JavaScript"
    ],
    image:likeFacebook,
    linkOnlin:"https://mahdirez1.ir/portfolios/ocialbook/",
    linkGithub:"https://github.com/mehdirez1i/like_fb_website"
  }
]

function App() {


 
  return (
    <div className="App">
      
      <NavBar />
      <Intro />
      <Portfolios myPortfolio ={myPortfolio}/>
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
