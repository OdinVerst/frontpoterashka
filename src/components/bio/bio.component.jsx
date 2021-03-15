import './bio.styles.css';

export const BIO = () => {
    return (
        <div className="bio">
            <div className="bio__first">
                <h1 className="bio__name">Sergey Razdolyanskiy</h1><span>(25 y.o.)</span>
            </div>
            <div className="bio__job-title job-title">
                <p className="job-title__value">FRONT-END DEVELOPER</p>
            </div>
            <p className="bio__birthday">Birthday party every year 21.07</p>
        </div>
    )
}