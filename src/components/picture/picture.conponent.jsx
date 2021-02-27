import './picture.styles.css';
import {useContext} from "react";
import ThemeContext from "../../context/theme/themeContext";

const dir = '/images/';

const collectName = (theme, imageObj) => {
    const { name, dark } = imageObj;
    if (dark && theme === 'dark') {
        return `${dir}${name}-dark`
    }
    return `${dir}${name}`
}

const collectRetina = (name, retina, format) => {
    if (retina) {
        return `${name}@2x.${format} 2x`
    }
    return '';
}


export const Picture = ({ imageObj }) => {
    const themeContext = useContext(ThemeContext);
    const { theme } = themeContext;

    const { format, webp, alt, avif, retina } = imageObj;
    return (
        <picture className="picture">
            {avif && <source srcSet={`${collectName(theme, imageObj)}.avif 1x, ${collectRetina(collectName(theme, imageObj), retina, 'avif')}`} type="image/avif"/>}
            {webp && <source srcSet={`${collectName(theme, imageObj)}.webp 1x, ${collectRetina(collectName(theme, imageObj), retina, 'webp')}`} type="image/webp"/>}
            <img src={`${collectName(theme, imageObj)}.${format}`} alt={alt}/>
        </picture>
    )
}