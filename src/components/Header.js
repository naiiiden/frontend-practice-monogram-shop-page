import { ReactComponent as Monogram } from "../images/monogram.svg";
import { ReactComponent as Menu} from "../images/menu.svg";
import { ReactComponent as Cart } from "../images/cart.svg";

const Header = () => {
    return (
        <header>
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
                    <li><a href="#">HOW IT WORKS</a></li>
                    <li><a href="#">WORKFLOWS</a></li>
                    <li className="link-padding-left"><a href="#">PHOTO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="#">VIDEO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="#">AUDIO CONSOLE</a></li>
                    <li className="link-padding-left"><a href="#">VIRTUAL PRODUCTION</a></li>
                    <li className="link-padding-left"><a href="#">MINI CONSOLE</a></li>
                    <li><a href="#">DOWNLOAD</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">SUPPORT</a></li>
                    <li><a href="#" className="link--bold">SHOP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;