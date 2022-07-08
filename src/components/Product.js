import { useState } from "react";

const Product = ({ src1, src2,  preOrder, productName, price, desc, href }) => {

    const [hoverImage, setHoverImage] = useState(true);

    return (
        <article onMouseEnter={() => setHoverImage(false)} onMouseLeave={() => setHoverImage(true)}>
            <a href={href} className="product--container">
                <div className="img--container">
                    <img src={hoverImage ? src1 : src2} alt=""/>
                    {preOrder ? <div className="pre-order">PRE-ORDER</div> : ""}
                </div>
                <div className="product--desc--container">
                    <div className="product--price--container">
                        <h3>{productName}</h3>
                        <div>{hoverImage ? price : <button>SHOP NOW</button>}</div>
                    </div>
                    <p>{desc}</p>
                </div>
            </a>
        </article>
    )
}

export default Product;