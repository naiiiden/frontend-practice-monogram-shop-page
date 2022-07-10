import { ReactComponent as Arrow_left } from "../images/arrow_left.svg";

const Cart = ({ onClick, className }) => {
    return (
        <section className={className}>
            <div className="arrow--container">
                <button onClick={onClick}>
                    <Arrow_left className="arrow"/>
                    CONTINUE SHOPPING
                </button>
            </div>
        </section>
    )
}

export default Cart;