const Banner = ({ h2Text, pText }) => {
    return (
        <section className="banner--container">
            <div className="banner--text">
                <h2>{h2Text}</h2>
                <p>{pText}</p>
            </div>
        </section>
    )
}

export default Banner;