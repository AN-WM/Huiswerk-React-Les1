import React from "react";
import './App.css'

function Product({label, image, name, price}) {
    return (
        <article>
            <span>
                {label}
            </span>

            <img src={image} alt="product"/>

            <p>
                {name}
            </p>

            <h4>
                {price}
            </h4>
        </article>
    )
}

export default Product;