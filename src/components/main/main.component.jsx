import {data} from '../../data/index';
import './main.styles.css';
import {SectionMain} from "./section-main.component";

export const Main = () => {
    const { main } = data;
    return (
        <div className="main-content">
            { main  && main.map((item, index) => <SectionMain key={index} item={item} />)}
        </div>
    )
}