function HeadSection({ title }) {
    return (
        <div className="section">
            <p className="section__title">{title}</p>
            <hr className="section__break-line" />
        </div>
    )
}

export default HeadSection;