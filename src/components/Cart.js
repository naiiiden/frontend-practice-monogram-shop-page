import { ReactComponent as Arrow_left } from "../images/arrow_left.svg";

const Cart = () => {
    return (
        <section class="cart--modal" style={{background: "red"}}>
            <Arrow_left style={{fill: "#fff"}}/>
        </section>
    )
}

export default Cart;