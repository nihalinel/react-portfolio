import './index.scss'

// React Imports
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'

// Custom Imports
import AnimatedLetters from '../AnimatedLetters'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const strArray = "Contact me".split("")
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
        
        useEffect(() => {
            const timerId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000); //set the delay to 3 seconds

            return () => {
                clearTimeout(timerId);
            };
        }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again")
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={strArray} 
                            idx={15} //1.5 seconds delay of animation
                        />
                    </h1>
                    <p>
                        Feel free to reach out if you are interested in collaborating, discussing opportunities, 
                        or connecting over shared interests in engineering, technology, and business. 
                        I'm always open to meaningful conversations and new opportunities :)
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className = "half">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        required />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder='Subject'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Message'
                                        name='message'
                                        required                                    
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact