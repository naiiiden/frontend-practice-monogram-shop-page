import { ReactComponent as Monogram } from "../images/monogram.svg";
import { ReactComponent as Menu} from "../images/menu.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const updateMedia = () => setIsDesktop(window.innerWidth >= 1024);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
        {!isDesktop ? (<header>
            <Monogram className="monogram"/>
            <div className="header--buttons--container">
                <button aria-label="Open menu">
                    <Menu className="menu--icon"/>
                </button>
                <button aria-label="Go to checkout">
                    <Cart className="cart--icon"/>
                </button>
            </div>
            <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li><a href="https://monogramcc.com/how-it-works/">HOW IT WORKS</a></li>
                    <li><a href="https://monogramcc.com/workflows/photo/">WORKFLOWS</a></li>
                    <li className="link-padding-left"><a href="https://monogramcc.com/workflows/photo/">PHOTO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="https://monogramcc.com/workflows/video/">VIDEO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="https://monogramcc.com/workflows/audio/">AUDIO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="https://monogramcc.com/workflows/virtual-production/">VIRTUAL PRODUCTION</a></li>
                    <li className="link-padding-left"><a href="https://monogramcc.com/workflows/everyday-essentials/">MINI CONSOLE</a></li>
                    <li><a href="https://monogramcc.com/download/">DOWNLOAD</a></li>
                    <li><a href="https://monogramcc.com/blog/">BLOG</a></li>
                    <li><a href="https://support.monogramcc.com/">SUPPORT</a></li>
                    <li><a href="https://monogramcc.com/shop/" className="link--bold">SHOP</a></li>
                </ul>
            </nav>
        </header>) : (
            <header>
            <Monogram className="monogram"/>
            <div className="header--buttons--container">
                <button aria-label="Go to checkout">
                    <Cart className="cart--icon"/>
                </button>
            </div>
            <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li><a href="https://monogramcc.com/how-it-works/">HOW IT WORKS</a></li>
                    <li>
                        <a aria-haspopup="true" role="button" href="#" className="dropdown--link">WORKFLOWS</a>
                        <ul className="header--desktop--dropdown">
                            <li className="link-padding-left"><a href="https://monogramcc.com/workflows/photo/">PHOTO CONSOLE</a></li>
                            <li className="link-padding-left"><a href="https://monogramcc.com/workflows/video/">VIDEO CONSOLE</a></li>
                            <li className="link-padding-left"><a href="https://monogramcc.com/workflows/audio/">AUDIO CONSOLE</a></li>
                            <li className="link-padding-left"><a href="https://monogramcc.com/workflows/virtual-production/">VIRTUAL PRODUCTION</a></li>
                            <li className="link-padding-left"><a href="https://monogramcc.com/workflows/everyday-essentials/">MINI CONSOLE</a></li>
                        </ul>
                    </li>
                    <li><a href="https://monogramcc.com/download/">DOWNLOAD</a></li>
                    <li><a href="https://monogramcc.com/blog/">BLOG</a></li>
                    <li><a href="https://support.monogramcc.com/">SUPPORT</a></li>
                    <li><a href="https://monogramcc.com/shop/" className="link--bold">SHOP</a></li>
                </ul>
            </nav>
        </header>
        )}
        </>
    )
}

export default Header;