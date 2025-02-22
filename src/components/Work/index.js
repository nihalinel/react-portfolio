import './index.scss'

// React Imports
import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';

// Custom Imports
import AnimatedLetters from '../AnimatedLetters';

const Work = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
        
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); //set the delay to 3 seconds

        return () => {
            clearTimeout(timerId);
        }
    });

    return (
        
        <>
        <div className="container work-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Work Experience".split("")}
                    idx={15}
                />
            </h1>
            {/*
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
            */}
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Work
