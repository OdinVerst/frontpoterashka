import {data} from '../../data/index';
import {SectionMain} from "./section-main.component";

import './main.styles.css';

export const Main = () => {
    const { main } = data;
    return (
        <div className="main-content">
            { main  && main.map((item, index) => <SectionMain key={index} item={item} />)}
        </div>
    )
}