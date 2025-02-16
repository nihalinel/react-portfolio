import LogoTitle from '../../assets/images/logo_N.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    ihal
                    <br />
                    software developer
                </h1>
                <h2>
                    Computer Engineering & Management Student @ McMaster University
                </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home