import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from 'react'
import { faGitAlt, faJsSquare, faReact, faHtml5, faCss3, faPython } from "@fortawesome/free-brands-svg-icons";
import './index.scss'
import Loader from "react-loaders";

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
            const timerId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000); //set the delay to 3 seconds
    
            return () => {
                clearTimeout(timerId);
            };
        }, []);

    return (
        <>
        <div className="container about-page" >

            {/* left side of the about page */}

            <div className="text-zone" >
                <h1 >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am a Computer Engineering and Management student at McMaster University, 
                passionate about leveraging technology and data-driven decision-making 
                to optimize systems and drive business transformation. 
                With co-op experience in software development, research, and project management, 
                I have worked across diverse teams and departments to actively contribute to technical projects and codebases.
                </p>
                <p align="LEFT">
                My background combines engineering expertise, business acumen, and problem-solving skills, 
                allowing me to bridge the gap between technology and strategy. 
                I am particularly interested in software development, data science, automation, and digital communication tools.
                </p>
                <p>
                Beyond the classroom, I stay engaged through leadership roles and part-time work, 
                including my role as a Communications Assistant for the Engineering & Management department. 
                Currently finishing my internship at Brock Solutions, 
                I am seeking Summer 2025 opportunities at the intersection of engineering and business development.
                </p>
            </div>

        {/* right side of the about page */}

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#DD0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div> 
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>                
            </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About