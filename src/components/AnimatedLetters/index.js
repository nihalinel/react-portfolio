import './index.scss';
import { useState, useEffect } from 'react';

// component will receive 3 arguments
// letterClass: the class we want to apply to  our characters
// strArray: array of characters itself
// idx: starting point, sets the delay of our letters and the animation
const AnimatedLetters = ({ letterClass, strArray, idx, shouldReanimate = false }) => { 
    const [localLetterClass, setLocalLetterClass] = useState('text-animate');

    useEffect(() => {
        if (shouldReanimate) {
            // Reset animation when strArray changes
            setLocalLetterClass('text-animate');
            
            // After animation completes, switch to hover class
            const timer = setTimeout(() => {
                setLocalLetterClass(letterClass);
            }, 2000 + (strArray.length * 100));
            
            return () => clearTimeout(timer);
        } else {
            // Just use the passed letterClass without re-animating
            setLocalLetterClass(letterClass);
        }
    }, [strArray, letterClass, shouldReanimate]);

    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${localLetterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters;
