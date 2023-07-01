import './Techs.css';

function Techs() {
    const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"]
    return (
        <section id="techs" className="techs">
            <div className="page__wrapper">
                <p className="section__title">Технологии</p>
                <hr className="section__break-line" />
                <div className="techs__wrapper">
                    <h2 className="techs__title">7 Технологий</h2>
                    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <ul className="techs__list">
                    {
                        techs.map((tech, index) => {
                            return <li className="techs__item" key={ index }> { tech } </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Techs;