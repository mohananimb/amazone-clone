import React from "react";
import "./Product.css";

export default function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="">{title}</p>
        <p className="product__price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((item, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="TLS" />
      <button className="">Add to Basket</button>
    </div>
  );
}
