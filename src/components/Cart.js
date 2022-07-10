import { ReactComponent as ArrowLeft } from "../images/arrow_left.svg";
import Guarantee from "../images/cart_better_editing.svg";
import { ReactComponent as AE } from "../images/american_express.svg";
import { ReactComponent as MC } from "../images/mastercard.svg";
import { ReactComponent as Visa } from "../images/visa.svg";
import { ReactComponent as AP } from "../images/apple_pay.svg";
import { ReactComponent as GP } from "../images/google_pay.svg";
import { ReactComponent as SP } from "../images/shop_pay.svg";




const Cart = ({ onClick, className }) => {
    return (
        <section className={className}>
            <div className="arrow--container">
                <button onClick={onClick}>
                    <ArrowLeft className="arrow"/>
                    CONTINUE SHOPPING
                </button>
            </div>
            <section className="items--container">
                <div className="empty--cart--text">
                    <h3>NOTHING IN YOUR BAG!</h3>
                    <p><a href="https://monogramcc.com/shop/">Start shopping</a> to see if you qualify for free shipping.</p>
                </div>
                <div className="guarantee--container">
                    <img src={Guarantee} alt=""/>
                    <div className="guarantee--text--container">
                        <h4>MONOGRAM BETTER EDITING GUARANTEE</h4>
                        <p>Try Monogram Creative Console in your own workflow for 30 days. If it does not improve your editing experience, you can return it for a full&nbsp;refund.</p>
                    </div>
                </div>
                <div className="payments--container">
                    <p><small>SECURE PAYMENTS</small></p>
                    <ul className="available--payments">
                        <li><AE/></li>
                        <li><MC/></li>
                        <li><Visa/></li>
                        <li><AP/></li>
                        <li><GP/></li>
                        <li><SP/></li>
                    </ul>
                </div>
            </section>
            <section className="checkout--container">
                <div className="price--container">
                    <h5>SUBTOTAL</h5>
                    <p>$0</p>
                </div>
                <div className="checkout--button">
                    <button>CHECKOUT</button>
                </div>
                <button>GIFT CARD OR DISCOUNT CODE</button>
            </section>
        </section>
    )
}

export default Cart;