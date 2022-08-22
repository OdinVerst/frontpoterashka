import {data} from '../../data/index';
import {Picture} from "../picture/picture.conponent";

import './photo.styles.css';

export const Photo = () => {
    const { images: { photo } } = data;
    return (
        <div className="photo__wrapper">
            <p>I'm in real life</p>
            <div className="photo">
                <Picture imageObj={photo} />
            </div>
        </div>
    )
}