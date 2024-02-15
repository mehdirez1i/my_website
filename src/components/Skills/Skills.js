import './Skills.css'

import ui from '../../assets/UI.png'

export default function Skills() {
  return (
    <section id='skills'> 
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm skilled and passionate Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, suscipit blanditiis! Odio sint dolorum voluptatum, nesciunt perferendis eum nulla voluptates..</span>
        <div className="skillBars">
            <div className='skillBar'>
                <img src={ui} alt="" className="skillBarImg" />
            
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, minus?</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ui} alt="" className="skillBarImg" />
            
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in?</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ui}alt="" className="skillBarImg" />
            
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic.</p>
                </div>
            </div>
           
        </div>
    </section>
  )
}
