import './main.styles.css';

const createMarkup = (text) => {
    return {__html: text};
}

const collectContent = (type, data) => {
    if (type === 'text') {
        return <p dangerouslySetInnerHTML={createMarkup(data)} />
    } else if (type === 'list') {
        return data.map((el, index) => {
            const {title, values} = el;
            return (
                <div key={index}>
                    <p>{title}</p>
                    <ul>
                        {values.map ((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)}
                    </ul>
                </div>
            )
        })
    }
    return '';
}

export const SectionMain = ({item}) => {
    const {name, type, data} = item;

    return (
        <section>
            <h2 className="title">{name}: </h2>
            {collectContent(type, data)}
        </section>
    )
}