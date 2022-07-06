import { useState } from "react";

const Product = ({ src, preOrder, onMouseOver }) => {
    // const [hoverImage, setHoverImage] = useState(true);

    return (
        <a className="product--container" onMouseOver={onMouseOver}>
            <div className="img--container">
                <img src={src} alt="" style={{width: "30rem"}}/>
                {preOrder ? <div className="pre-order">PRE-ORDER</div> : ""}
            </div>
        </a>
    )
}

export default Product;