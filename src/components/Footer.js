import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Youtube } from "../images/youtube.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li><h4>MONOGRAM</h4></li>
                    <li>
                        <address>
                        305 King St. W.<br/>
                        Suite 502<br/>
                        Kitchener, ON<br/>
                        Canada
                        </address>
                    </li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h4>QUICK LINKS</h4></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Download</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h4>HELP</h4></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Support Center</a></li>
                    <li><a href="#">Shipping and Sales</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h4>INFORMATION</h4></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Work with us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Terms of Sale</a></li>
                    <li><a href="#">Press Kit</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li><h4>SUBSCRIBE TO MONOGRAM</h4></li>
                    <li><p>Master productivity With Creative Console and get all the latest Monogram news.</p></li>
                    <li>
                        <form className="footer--form">
                            <input type="email" placeholder="Email Address"/>
                            <input type="submit" value="SUBMIT"/>
                        </form>
                    </li>
                    <ul className="footer--socials">
                        <li><a href="#"><Instagram className="social"/></a></li>
                        <li><a href="#"><Twitter className="social"/></a></li>
                        <li><a href="#"><Facebook className="social"/></a></li>
                        <li><a href="#"><Youtube className="social"/></a></li>
                    </ul>
                    <li><p>© Monogram 2022</p></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;