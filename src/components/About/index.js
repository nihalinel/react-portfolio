import './index.scss'

// React Imports
import { useState, useEffect } from 'react'
import Loader from "react-loaders";

// Custom Imports
import AnimatedLetters from "../AnimatedLetters"

// Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faJsSquare, faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import 'devicon/devicon.min.css';

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
                        strArray={"About me".split("")}
                        idx={15}
                    />
                </h1>
                <p>
                I’m a Computer Engineering and Management student at McMaster University, 
                passionate about using technology and data-driven decision-making to optimize systems and drive business transformation. 
                With co-op experience in software development, research, and project management, 
                I’ve contributed to technical projects and codebases across diverse teams and departments.
                </p>
                <p align="LEFT">
                My interdisciplinary background blends engineering expertise with business strategy, 
                enabling me to effectively bridge the gap between technical implementation and strategic impact. 
                I’m particularly interested in software development, data science, automation, and digital communication tools.
                </p>
                <p>
                Outside the classroom, I stay engaged through leadership and community-building initiatives. 
                I currently serve as President of the McMaster Engineering & Management Society and am a proud Cansbridge Scholar.
                </p>
                <p>
                This summer, I’m gaining hands-on experience as a Software Developer at ATS Corporation, 
                and I’ll be returning to school in Fall 2025 to complete my degree.
                </p>
            </div>

        {/* right side of the about page aka the cube spinner */}

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#DD0031" />
                </div>
                <div className="face2">
                    <i className="devicon-csharp-plain colored"></i>
                </div>
                <div className="face3">
                    <i className="devicon-cplusplus-plain colored"></i>
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