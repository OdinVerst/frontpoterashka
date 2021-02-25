import './photo.styles.css';
import PhotoIMG from './img/photo.jpeg';

export const Photo = () => {
    return (
        <div className="photo__wrapper">
            <p>I'm in real life</p>
            <img className="photo" src={PhotoIMG}/>
        </div>
    )
}