import LogoN from '../../../assets/images/logo_N.png';
import './index.scss';

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo animate" src={LogoN} alt="N Logo" />
        </div>
    )
}

export default Logo