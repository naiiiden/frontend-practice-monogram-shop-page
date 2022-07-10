import { ReactComponent as ArrowLeft } from "../images/arrow_left.svg";

const Cart = ({ onClick, className }) => {
    return (
        <section className={className}>
            <div className="arrow--container">
                <button onClick={onClick}>
                    <ArrowLeft className="arrow"/>
                    CONTINUE SHOPPING
                </button>
            </div>
        </section>
    )
}

export default Cart;