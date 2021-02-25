import {data} from "../../data";
import './skills.styles.css';

export const Skills = () => {
    const { skills } = data;
    return (
        <div className="skills">
            <h2 className="title">Skills:</h2>
            <ul className="reset-list">
                {skills && skills.map((el, i) => <li className="skills__item" key={i}>{el}</li>)}
            </ul>
        </div>
    )
}