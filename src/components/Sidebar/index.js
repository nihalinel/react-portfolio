import './index.scss'

// React Imports
import { Link, NavLink } from 'react-router-dom'
import { useState} from 'react'

// Image Imports
import LogoN from '../../assets/images/logo_N.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptop, faSuitcase,faLaptopFile, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
          <Link 
            className="logo"
            to="/" 
            onClick={() => setShowNav(false)}>
            <img src={LogoN} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="NihalI" />
          </Link>
        <nav className={showNav ? "mobile-show" : ''}>
          <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faLaptopFile} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)} // Close the nav when clicked
            icon={faClose}
            color="#f095ca"
            size="3x"
            className='close-icon' />
        </nav>
        <ul>
          <li> {/* Creating the LinkedIn link */}
            <a 
              target="_blank"
              rel='noreferrer'
              href='https://www.linkedin.com/in/nihal-inel/'
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>

          <li> {/* Creating the GitHub link */}
            <a 
              target="_blank"
              rel='noreferrer'
              href='https://github.com/nihalinel'
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>

          <li> {/* Creating the Notion link */}
            <a 
              target="_blank"
              rel='noreferrer'
              href='https://aysenihal.notion.site/Welcome-to-My-Portfolio-454cda91a79747a9a008cf1449dc28ee'
            >
              <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#f095ca"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar