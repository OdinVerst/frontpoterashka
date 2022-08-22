import {data} from "../../data";
import {Picture} from "../picture/picture.conponent";

import './logo.styles.css';

export const Logo = () => {
    const { images: { logo } } = data;
    return (
        <div className="logo-wrapper">
            <Picture imageObj={logo} />
        </div>
    )
}