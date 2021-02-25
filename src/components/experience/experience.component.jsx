import {data} from '../../data/index';
import './experience.styles.css';

export const Experience = () => {
    const {contacts} = data;
    return (
        <div>
            <section>
                <h2 className="title">Experience: </h2>
                Have commercial projects:
                Sample (Sample/Sample/Sample)
                and
                Sample (Sample)

                Create some small
                landing pages
                Sample (Sample/Sample/Sample)
                Sample (Sample/Sample/Sample)
                Sample (Sample/Sample/Sample)
            </section>
            <section>
                <h2>Education:</h2>
                Russia, Orel state, Orel
                Oryol State University
                of Economics and Trade,
                Information Technology and
                Management, Business Informatics
            </section>
            <section>
                <h2>My projects:</h2>
                Sample
                Sample
                Sample
            </section>
        </div>
    )
}