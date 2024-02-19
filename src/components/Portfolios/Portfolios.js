import React from 'react'
import './Portfolios.css'
import testimg from '../../assets/screenImg/memoryGame.png'


export default function Portfolios({myPortfolio}) {
  return (
    <section id='portfolios'>

        <h2 >My Portfolio</h2>
        <p className='dec'>I am very interested in making strong and beautiful design work, I hope you like it.</p>
        {myPortfolio.map(d =>(

            <div key={d.id} className='pro'>
            <h3>{d.title}</h3>
            <div className="content">
                <div className='contentImg'>
                    <img src={d.image} alt="" />

                </div>
                <div className="contentDes">
                    <p> {d.desc} </p>
                    {d.attributes.map(att =>(
                        <ul key={att}>
                            <li> {att} </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="links">
                <a href={d.linkOnlin} target="_blank" >See online</a>
                <a href={d.linkGithub } target="_blank">Source code in github</a>
            </div>
        </div>
        ))}

    </section>
  )
}
