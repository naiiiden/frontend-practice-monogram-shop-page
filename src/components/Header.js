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
        {!isDesktop ? (
            <>
            <div className={`click--outside ${openCart ? "close" : ""} ${openMenu ? "close" : ""}`} onClick={() => (setOpenCart(false), setOpenMenu(false))}></div>
            <header aria-label="Header">
                <a href="https://monogramcc.com/" className="logo--link" aria-label="Go to homepage"><Monogram className="monogram"/></a>
                <div className="header--buttons--container">
                    <button aria-label="Open menu" aria-haspopup="true" aria-expanded={openMenu ? "true" : "false"} onClick={() => setOpenMenu(true)}>
                        <Menu className="menu--icon"/>
                    </button>
                    <button aria-label="Open checkout" aria-haspopup="true" aria-expanded={openCart ? "true" : "false"} onClick={() => setOpenCart(true)}>
                        <Cart className="cart--icon"/>
                    </button>
                </div>
                <CartModal className={`cart--modal ${openCart ? "show" : ""}`} onClick={() => setOpenCart(false)}/>
                <nav className="header--nav">
                    <ul className={`header--nav--ul ${openMenu ? "show" : ""}`} role="menubar">
                        <li role="none" className="logo--close--container">
                            <Monogram className="monogram"/>
                            <button aria-label="Close menu" onClick={() => setOpenMenu(false)} className="close--button">
                                <Close className="close"/>
                            </button>
                        </li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/how-it-works/">HOW IT WORKS</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/workflows/photo/">WORKFLOWS</a></li>
                        <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/photo/">PHOTO CONSOLE</a></li>
                        <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/video/">VIDEO CONSOLE</a></li>
                        <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/audio/">AUDIO CONSOLE</a></li>
                        <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/virtual-production/">VIRTUAL PRODUCTION</a></li>
                        <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/everyday-essentials/">MINI CONSOLE</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/download/">DOWNLOAD</a></li>
                        <li role="none"><a role="menuitem" href="https://monogramcc.com/blog/">BLOG</a></li>
                        <li role="none"><a role="menuitem" href="https://support.monogramcc.com/">SUPPORT</a></li>
                        <li role="none"><a role="menuitem" aria-current="page" href="#0" className="link--bold">SHOP</a></li>
                    </ul>
                </nav>
            </header>
            </>
        ) : (
            <>
            <div className={`click--outside ${openCart ? "close" : ""} ${openMenu ? "close" : ""}`} onClick={() => (setOpenCart(false), setOpenMenu(false))}></div>
            <header aria-label="Header">
            <a href="https://monogramcc.com/" className="logo--link" aria-label="Go to homepage"><Monogram className="monogram"/></a>
            <div className="header--buttons--container">
                <button aria-label="Go to checkout" onClick={() => setOpenCart(true)}>
                    <Cart className="cart--icon"/>
                </button>
            </div>
                <CartModal className={`cart--modal ${openCart ? "show" : ""}`} onClick={() => setOpenCart(false)}/>
            <nav className="header--nav">
                <ul className="header--nav--ul" role="menubar">
                    <li role="none"><a href="https://monogramcc.com/how-it-works/">HOW IT WORKS</a></li>
                    <li role="none" className={`dropdown--link ${openDesktopMenu ? "active" : ""}`}>
                        <a aria-haspopup="true" aria-expanded={openDesktopMenu ? "true" : "false"} role="menuitem" href="#0" className="dropdown--link" onClick={() => setOpenDesktopMenu(!openDesktopMenu)}>WORKFLOWS</a>
                        <ul role="menu" className={`header--desktop--dropdown ${openDesktopMenu ? "showDesktop" : ""}`}>
                            <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/photo/">PHOTO CONSOLE</a></li>
                            <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/video/">VIDEO CONSOLE</a></li>
                            <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/audio/">AUDIO CONSOLE</a></li>
                            <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/virtual-production/">VIRTUAL PRODUCTION</a></li>
                            <li role="none" className="link-padding-left"><a role="menuitem" href="https://monogramcc.com/workflows/everyday-essentials/">MINI CONSOLE</a></li>
                        </ul>
                    </li>
                    <li role="none"><a role="menuitem" href="https://monogramcc.com/download/">DOWNLOAD</a></li>
                    <li role="none"><a role="menuitem" href="https://monogramcc.com/blog/">BLOG</a></li>
                    <li role="none"><a role="menuitem" href="https://support.monogramcc.com/">SUPPORT</a></li>
                    <li role="none"><a role="menuitem" href="https://monogramcc.com/shop/" className="link--bold">SHOP</a></li>
                </ul>
            </nav>
        </header>
        </>
        )}
        </>
    )
}

export default Header;