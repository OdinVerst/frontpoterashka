import {data} from "../../data";
import './bio.styles.css';

export const BIO = () => {
    return (
        <div className="bio">
            <div className="bio__first">
                <h1 className="bio__name">{data.name}</h1><span>({data.age} y.o.)</span>
            </div>
            <div className="bio__job-title job-title">
                <p className="job-title__value">{data.jobTitle}</p>
            </div>
            <p className="bio__birthday">{data.birthdayDescription}</p>
        </div>
    )
}