import './picture.styles.css';

const dir = '/images/';

const collectRetina = (imageObj, format) => {
    const { name, retina } = imageObj;
    if (retina) {
        return `${dir}${name}@2x.${format} 2x`
    }
    return '';
}

export const Picture = ({ imageObj }) => {
    const { name, format, webp, alt, avif } = imageObj;
    return (
        <picture className="picture">
            {avif && <source srcset={`${dir}${name}.avif 1x, ${collectRetina(imageObj, 'avif')}`} type="image/avif"/>}
            {webp && <source srcset={`${dir}${name}.webp 1x, ${collectRetina(imageObj, 'webp')}`} type="image/webp"/>}
            <img src={`${dir}${name}.${format}`} alt={alt}/>
        </picture>
    )
}