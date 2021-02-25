import {data} from '../../data/index';
import './contacts.styles.css';

export const Contacts = () => {
    const {contacts} = data;
    return (
        <div className="wrapper contacts">
            <div/>
            <div className="contacts__content">
                <h2 className="contacts__title">Contacts:</h2>
                <ul className="contacts__list reset-list">
                    {contacts && contacts.map(el => <li className="contacts__item"
                        key={el.id}>{el.name} : <a className="contacts__href" href={el.link}>{el.value}</a></li>)}
                </ul>
            </div>
        </div>
    )
}