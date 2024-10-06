function Products({products, onClick}) {
    return (
        <div className="product-list">
            <ul className="item-list">{products.map((product) =>
                <li key={product.id} className="item">
                    <h2>{product.title}</h2>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                    <div className="button-field">
                        <button className="decrement">-</button>
                        <button className="increment">+</button>
                    </div>
                    <button className="addButton" onClick={() => onClick(product)}>Add to Cart</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Products;