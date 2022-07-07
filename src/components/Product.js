const Product = ({ src, preOrder, productName, price, desc, href, onMouseEnter, onMouseLeave }) => {

    return (
        <article>
            <a href={href} className="product--container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="img--container">
                    <img src={src} alt=""/>
                    {preOrder ? <div className="pre-order">PRE-ORDER</div> : ""}
                </div>
                <div className="product--desc--container">
                    <div className="product--price--container">
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