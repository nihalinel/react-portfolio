import './index.scss'
import { Link } from 'react-router-dom'
import LogoN from '../../assets/images/logo_N.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return (
        <div className="nav-bar">
        <Link 
          className="logo"
          to="/" >
          <img src={LogoN} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="NihalI" />
        </Link>
    </div>
    )
}

export default Sidebar