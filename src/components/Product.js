const Product = ({ src, preOrder, productName, price, desc, onMouseOver }) => {

    return (
        <a className="product--container" onMouseOver={onMouseOver} style={{width: "30rem", display: "block"}}>
            <div className="img--container" style={{position: "relative"}}>
                <img src={src} alt=""/>
                {preOrder ? <div className="pre-order" style={{position: "absolute", top: "0", right: "0"}}>PRE-ORDER</div> : ""}
            </div>
            <div className="product--desc--container">
                <div className="product--price--container" style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>{productName}</h3>
                    <span>{price}</span>
                </div>
                <p>{desc}</p>
            </div>
        </a>
    )
}

export default Product;