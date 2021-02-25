import LogoIMG from './img/logo.png';
import './logo.styles.css';

export const Logo = () => {
    return (
        <div className="logo-wrapper">
            <img className="logo" src={LogoIMG} alt="" />
        </div>
    )
}