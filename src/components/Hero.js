const Hero = ({ h1Text, pText }) => {
    return (
        <div className="hero--container">
            <div className="hero--text">
                <h1>{h1Text}</h1>
                <p>{pText}</p>
            </div>
        </div>
    )
}

export default Hero;