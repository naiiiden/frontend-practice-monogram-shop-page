import { ReactComponent as Arrow } from "../images/arrow_down.svg";

const Hero = ({ h1Text, pText, href }) => {
    return (
        <div className="hero--container">
            <div className="hero--text">
                <h1>{h1Text}</h1>
                <p>{pText}</p>
            </div>
            <a href={href} aria-label="Go to products"><Arrow className="arrow"/></a>
        </div>
    )
}

export default Hero;