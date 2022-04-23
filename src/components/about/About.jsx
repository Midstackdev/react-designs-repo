import React from 'react'
import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="a-img" 
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I am a Tech Savvy, with advance Web developer skills, 
                I use my knowledge of programming and software engineering to 
                develop solutions to help organizations increase productivity and 
                accelerate business performance.
            </p>
            <p className="a-desc">
                As a software engineer I am experienced in leveraging agile 
                frameworks to provide robust solutions. I love challenges, 
                new projects, and solving problems. 
                I enjoy working with teams that foster collaborative thinking to 
                further the overall value proposition.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design</h4>
                    <p className="a-award-dec">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Tempora quae maxime aspernatur iusto.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About