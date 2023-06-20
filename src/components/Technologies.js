import Technology from './Technology';

function Technologies() {
    return (
        <section className="technology">
            <div className="page__wrapper">
                <p className="technology__text">Технологии</p>
                <hr className="technology__break-line" />
                <div className="technology__wrapper">
                    <h2 className="technology__title">7 Технологий</h2>
                    <p className="technology__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="technology__stack">
                    <Technology title="HTML" />
                    <Technology title="CSS" />
                    <Technology title="JS" />
                    <Technology title="React" />
                    <Technology title="Git" />
                    <Technology title="Express.js" />
                    <Technology title="mongoDB" />
                </div>
            </div>
        </section>
    );
}

export default Technologies;