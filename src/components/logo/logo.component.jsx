import './logo.styles.css';
import { data } from "../../data";
import {Picture} from "../picture/picture.conponent";

export const Logo = () => {
    const { images: { logo } } = data;
    return (
        <div className="logo-wrapper">
            <Picture imageObj={logo} />
        </div>
    )
}