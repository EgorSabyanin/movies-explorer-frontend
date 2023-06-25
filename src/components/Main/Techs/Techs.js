import Tech from '../Tech/Tech';

import './Techs.css';

function Techs() {
    return (
        <section id="techs" className="techs">
            <div className="page__wrapper">
                <p className="techs__text">Технологии</p>
                <hr className="techs__break-line" />
                <div className="techs__wrapper">
                    <h2 className="techs__title">7 Технологий</h2>
                    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="techs__stack">
                    <Tech title="HTML" />
                    <Tech title="CSS" />
                    <Tech title="JS" />
                    <Tech title="React" />
                    <Tech title="Git" />
                    <Tech title="Express.js" />
                    <Tech title="mongoDB" />
                </div>
            </div>
        </section>
    );
}

export default Techs;