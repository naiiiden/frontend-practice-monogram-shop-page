import { ReactComponent as Arrow } from "../images/arrow_down.svg";

const Hero = ({ h1Text, pText }) => {
    return (
        <div className="hero--container">
            <div className="hero--text">
                <h1>{h1Text}</h1>
                <p>{pText}</p>
            </div>
            <Arrow className="arrow"/>
        </div>
    )
}

export default Hero;