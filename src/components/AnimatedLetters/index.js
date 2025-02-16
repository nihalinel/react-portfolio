import './index.scss';

// component will receive 3 arguments
// letterClass: the class we want to apply to  our characters
// strArray: array of characters itself
// idx: starting point, sets the delay of our letters and the animation
const AnimatedLetters = ({ letterClass, strArray, idx }) => { 
    return ( // we are returning a span - since we want it to an inline element as these individual letters need to form a letter and a word
        <span>
            {
                strArray.map((char, i) => ( // every single map inside of the react needs to have a key index
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters
