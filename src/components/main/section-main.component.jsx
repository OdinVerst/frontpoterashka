import './main.styles.css';

const collectContent = (type, data) => {
    if (type === 'text') {
        return <p>{data}</p>
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