import HeadSection from './HeadSection';

function AboutProject() {
    return (
        <section id="aboutProject" className="about-project">
            <div className="page__wrapper">
                <HeadSection title="О проекте" />
                <div className="about-project__wrapper">
                    <div className="about-project__column">
                        <h2 className="about-project__title">Дипломный проект включал 5 этапов</h2>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about-project__column'>
                        <h2 className="about-project__title">На выполнение диплома ушло 5 недель</h2>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__timeline">
                    <p className="about-project__timeline_stage_backend">
                        1 неделя
                    </p>
                    <p className="about-project__timeline_stage_frontend">
                        4 недели
                    </p>
                </div>
                <div className="about-project__timeline">
                    <p className="about-project__label about-project__label_stage_backend">Back-end</p>
                    <p className="about-project__label about-project__label_stage_frontend">Front-end</p>
                </div>
            </div>    
        </section>
    );
}

export default AboutProject;