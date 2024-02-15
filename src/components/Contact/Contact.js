import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'


import walmart from '../../assets/walmart.jpg'

export default function Contact() {

  const [snackbarMsg, setSnackbarMsg ] = useState('')
  function myFunction() {

    var x = document.getElementById("snackbar");
 
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); setSnackbarMsg(''); console.log(snackbarMsg) }, 3000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xvtz2io', 'template_fr654do', form.current, {
        publicKey: 'XXZrFSJYWlMj2dU5s',
      })
      .then(
        () => {
          setSnackbarMsg('SUCCESS!')
          console.log('SUCCESS!');
        },
        (error) => {
          setSnackbarMsg('FAILED...')
          console.log('FAILED...', error.text);
          
        },
      );
      }
    useEffect(()=>{
      if(snackbarMsg){

        myFunction()
        
      }
    },[snackbarMsg])


  return (
    <section id="contactPage">
        
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I have had the oppertunity to work a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, vel.</p>

            <div className="clientsImgs">

                <img src={walmart} alt="" 
                className="clientImg" />
                <img src={walmart} alt="" 
                className="clientImg" />               
                <img src={walmart} alt="" 
                className="clientImg" /> 
                
                <img src={walmart} alt="" 
                className="clientImg" />
            </div>
            <div className="contect">
               <h1 className="contactPageTitle">Contact Me</h1> 
               <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
               <form className="contactForm" id='contactForm' onSubmit={sendEmail} ref={form}>
                <input type="text" className='name' placeholder='Your name' name="user_name" />
                <input type="email" className='email' placeholder='Your email' name="user_email"/>
                <textarea className='msg' name="message"   rows="5" placeholder='Your message' type="submit" ></textarea>
                <button type='submit' value='send' className='submitBtn' >Submit</button>
                
               </form>
            </div>

        </div>
        <div className="links">
                    <img src={facebookIcon} alt="" className="link" />
                    <img src={twitterIcon} alt="" className="link" />
                    <img src={youtubeIcon} alt="" className="link" />
                    <img src={instagramIcon} alt="" className="link" />
                </div>
      <div id="snackbar">{snackbarMsg}</div>
    </section>
  )
}
