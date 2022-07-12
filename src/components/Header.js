import { ReactComponent as Monogram } from "../images/monogram.svg";
import { ReactComponent as Menu} from "../images/menu.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import { ReactComponent as Close } from "../images/close.svg";
import { useState, useEffect } from "react";
import CartModal from "./Cart";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const [openMenu, setOpenMenu] = useState(false); 
    const [openDesktopMenu, setOpenDesktopMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    openCart || openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    openCart || openMenu ? document.body.style.pointerEvents = "none" : document.body.style.pointerEvents = "";
    openCart || openMenu ? document.body.style.userSelect = "none" : document.body.style.pointerEvents = "";

    const updateMedia = () => setIsDesktop(window.innerWidth >= 1024);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
        {!isDesktop ? (<header>
            <a href="https://monogramcc.com/" className="logo--link"><Monogram className="monogram"/></a>
            <div className="header--buttons--container">
                <button aria-label="Open menu" onClick={() => setOpenMenu(true)}>
                    <Menu className="menu--icon"/>
                </button>
                <button aria-label="Go to checkout" onClick={() => setOpenCart(true)}>
                    <Cart className="cart--icon"/>
                </button>
            </div>
            <CartModal className={`cart--modal ${openCart ? "show" : ""}`} onClick={() => setOpenCart(false)}/>
            <nav className="header--nav">
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`}>
                    <li className="logo--close--container">
                        <Monogram className="monogram"/>
                        <button aria-label="Close menu" onClick={() => setOpenMenu(false)} className="close--button">
                            <Close className="close"/>
                        </button>
                    </li>
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
                    <li><a aria-current="page" href="#0" className="link--bold">SHOP</a></li>
                </ul>
            </nav>
        </header>) : (
            <>
            <div className={`click--outside ${openCart ? "close" : ""}`} onClick={() => setOpenCart(false)}>
            </div>
            <header>
            <a href="https://monogramcc.com/" className="logo--link"><Monogram className="monogram"/></a>
            <div className="header--buttons--container">
                <button aria-label="Go to checkout" onClick={() => setOpenCart(true)}>
                    <Cart className="cart--icon"/>
                </button>
            </div>
                <CartModal className={`cart--modal ${openCart ? "show" : ""}`} onClick={() => setOpenCart(false)}/>
            <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li><a href="https://monogramcc.com/how-it-works/">HOW IT WORKS</a></li>
                    <li className={`dropdown--link ${openDesktopMenu ? "active" : ""}`}>
                        <a aria-haspopup="true" role="button" href="#0" className="dropdown--link" onClick={() => setOpenDesktopMenu(!openDesktopMenu)}>WORKFLOWS</a>
                        <ul className={`header--desktop--dropdown ${openDesktopMenu ? "showDesktop" : ""}`}>
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
        </>
        )}
        </>
    )
}

export default Header;