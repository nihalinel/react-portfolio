import './index.scss'

// React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Custom Imports
import LogoTitle from '../../assets/images/logo_N.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'h', 'a', 'l']
    
    const jobTitles = [
        ['a', 'n', ' ', 'a', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'],
        ['a',  ' ', 'b', 'u', 'i', 'l', 'd', 'e', 'r', '.'],
        ['a', ' ', 'p', 'r', 'o', 'b', 'l', 'e', 'm', ' ', 's', 'o', 'l', 'v', 'e', 'r', '.'],
        ['a' , ' ', 	'l' , 	'e' , 	'a' , 	'd' , 	'e' , 	'r' , 	'.'],
        ['a' , ' ',	'm' , 	'e' , 	'n' , 	't' , 	'o' , 	'r' ,'.'],
    ]
    
    const [currentJobIndex, setCurrentJobIndex] = useState(0)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        const jobRotation = setInterval(() => {
            setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length)
        }, 6000)

        return () => clearInterval(jobRotation)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _9`}>i,</span>
                    <br />
                    <span className={`${letterClass} _10`}>I</span>
                    <span className={`${letterClass} _11`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={12}
                        shouldReanimate={false}  // Name stays static
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobTitles[currentJobIndex]}
                        idx={0}
                        shouldReanimate={true}  // Job title re-animates
                    />
                </h1>
                <h2>
                    Computer Engineering & Management Student @ McMaster University
                </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home