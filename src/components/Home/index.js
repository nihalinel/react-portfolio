import './index.scss'

// React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Custom Imports
import LogoTitle from '../../assets/images/logo_N.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate') // default animation name is text-animate
    const nameArray = ['i', 'h', 'a', 'l']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
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
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={16}
                    />
                </h1>
                <h2>
                    Computer Engineering & Management Student @ McMaster University
                </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
                <Logo />
        </div>
    )
}

export default Home