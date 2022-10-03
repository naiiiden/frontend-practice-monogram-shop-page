import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Youtube } from "../images/youtube.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <nav aria-label="Footer" className="footer--nav">
                <div className="footer--nav--ul">
                    <h4>MONOGRAM</h4>
                    <ul className="footer--nav--ul">
                        <li>
                            <address>
                            305 King St. W.<br/>
                            Suite 502<br/>
                            Kitchener, ON<br/>
                            Canada
                            </address>
                        </li>
                    </ul>
                </div>
                <div className="footer--nav--ul">
                    <h4>QUICK LINKS</h4>
                    <ul className="footer--nav--ul" role="menu">
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/">Home</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/how-it-works/">How it Works</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/shop/">Shop</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/download/">Download</a></li>
                    </ul>
                </div>
                <div className="footer--nav--ul">
                    <h4>HELP</h4>
                    <ul className="footer--nav--ul" role="menu">
                        <li role="none"><a role="menuitem" href="https://support.monogramcc.com/hc/en-us/sections/203555177-Frequently-Asked-Questions">FAQs</a></li>
                        <li role="none"><a role="menuitem" href="https://support.monogramcc.com/">Support Center</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/shipping-and-sales/">Shipping and Sales</a></li>
                    </ul>
                </div>
                <div className="footer--nav--ul">
                    <h4>INFORMATION</h4>
                    <ul className="footer--nav--ul" role="menu">
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/about/">About Us</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/about/#jobs">Work with us</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/privacy/">Privacy Policy</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/site-terms/">Terms of Use</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/sales-terms/">Terms of Sale</a></li>
                        <li role="none"><a role="menuitem" href="https://bit.ly/MonogramPress2021">Press Kit</a></li>
                    </ul>
                </div>
                <div className="footer--nav--ul">
                    <h4>SUBSCRIBE TO MONOGRAM</h4>
                    <ul className="footer--nav--ul">
                        <li><p>Master productivity With Creative Console and get all the latest Monogram news.</p></li>
                        <li>
                            <form className="footer--form">
                                <input type="email" placeholder="Email Address" aria-label="Email Address"/>
                                <input type="submit" value="SUBMIT"/>
                            </form>
                        </li>
                        <ul className="footer--socials" role="menu">
                            <li role="none"><a role="menuitem" href="https://instagram.com/monogramcc" aria-label="Our Instagram"><Instagram className="social"/></a></li>
                            <li role="none"><a role="menuitem" href="https://twitter.com/monogramcc" aria-label="Our Twitter"><Twitter className="social"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.facebook.com/monogramcc" aria-label="Our Facebook"><Facebook className="social"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.youtube.com/user/paletteUI" aria-label="Our Youtube"><Youtube className="social"/></a></li>
                        </ul>
                        <li><p>© Monogram 2022</p></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;