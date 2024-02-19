
import {  Link} from 'react-scroll'
import './NavBar.css'



import chat from '../../assets/chat.svg'
import myloge from '../../assets/mrLogo.png'
import menu from '../../assets/hamburgerMenu.svg'
import { useState } from 'react'

export default function NavBar() {
  const [showmenu, setShowMenu] = useState(false)
  const handleMenu = ()=>{

    setShowMenu(!showmenu)
    
  }

  console.log(showmenu)
  return (
   <nav className="navbar">
        <img src={myloge} className='logo' />
        <div className='desktopMenu '> 

          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Home </Link>
          <Link activeClass="active" to='portfolios' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'> Protfolio </Link>
          <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Skills </Link>
          <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Clients </Link>
          
        </div>
        <Link  to='contactForm'  smooth={true} offset={-200} duration={500} className='desktopMenuBtn'> <img src={chat} /> Contect Me</Link>
        <img src={menu} className='memu' onClick={handleMenu} />

        {showmenu &&<div className='forMob ' > 
              <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={handleMenu}> Home </Link>
              <Link activeClass="active" to='portfolios' spy={true} smooth={true} offset={-90} duration={500} className='listItem'onClick={handleMenu} > Portfolios </Link>
              <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={handleMenu}> Skills </Link>
              <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={handleMenu}> Clients </Link>
            </div>}

   </nav>
   
  )
}
 