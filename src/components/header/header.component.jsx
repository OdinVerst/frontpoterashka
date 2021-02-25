import {Logo} from "../logo/logo.component";
import {BIO} from "../bio/bio.component";
import {Theme} from "../theme/theme.component";

import './header.styles.css';

export const Header = () => {
    return (
        <header className="wrapper header">
            <Logo/>
            <div className="header__content">
                <Theme />
                <BIO/>
            </div>
        </header>
    )
}