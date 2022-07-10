import { ReactComponent as Arrow_left } from "../images/arrow_left.svg";

const Cart = ({ onClick }) => {
    return (
        <section class="cart--modal" style={{background: "red"}}>
            <button onClick={onClick}>
                <Arrow_left style={{fill: "#fff"}}/>
            </button>
        </section>
    )
}

export default Cart;