import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from 'react'

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
                    I'm a very ambitious software developer looking for a role in 
                    established engineering company with the opportunity to work with the latest 
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, mother of a cutie cat, a gym fanatic, and tech-obsessed!!!
                </p>
            </div>

        {/* right side of the about page */}

        </div>
    )
}

export default About