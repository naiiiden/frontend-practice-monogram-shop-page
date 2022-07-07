const Product = ({ src, preOrder, productName, price, desc, href, onMouseEnter, onMouseLeave }) => {

    return (
        <article>
            <a href={href} className="product--container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="img--container" style={{position: "relative"}}>
                    <img src={src} alt=""/>
                    {preOrder ? <div className="pre-order" style={{position: "absolute", top: "0", right: "0"}}>PRE-ORDER</div> : ""}
                </div>
                <div className="product--desc--container">
                    <div className="product--price--container" style={{display: "flex", justifyContent: "space-between"}}>
                        <h3>{productName}</h3>
                        <div>{price}</div>
                    </div>
                    <p>{desc}</p>
                </div>
            </a>
        </article>
    )
}

export default Product;