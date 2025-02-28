import './index.scss'

// React Imports
import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';

// Custom Imports
import workData from '../../data/work.json'
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

    const renderWork = (work) => {
        return (
            <div className="images-container">
                {
                    work.map((port, idx) => {
                        return (
                            <div key={idx} className="image-box" >
                                <img 
                                src={port.cover}
                                className="work-image"
                                alt="work" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="company">{port.company}</h4>
                                    <h5 className="duration">{port.duration}</h5>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

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
            <div>{renderWork(workData.work)}</div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Work
