import React from "react"
import "../css/Product.css"

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>The Lean Startup</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<div className="product__rating">
					<p>⭐</p>
				</div>
			</div>
			<img
				src="https://m.media-amazon.com/images/P/B004J4XGN6.01._SCLZZZZZZZ_SX500_.jpg"
				alt=""
			/>
			<button>Add to Cart</button>
		</div>
	)
}

export default Product
