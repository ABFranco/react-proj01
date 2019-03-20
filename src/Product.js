import React from "react";

const Product = props => {
  let count = 0;
  function addToCart(name) {
    count += 1;
    if (props.limit === 0) {
      alert("This item is out of stock!");
    } else if (count > props.limit) {
      alert("There are too many " + name + "s in your cart!");
    } else {
      alert("There are " + count + " " + name + "s in your cart!");
    }
  }

  return (
    <div class="card">
      <div class="content">
        <div class="header">{props.productName}</div>
        <div class="description">Price: ${props.price}</div>
      </div>
      <div
        class="ui bottom attached button"
        onClick={() => addToCart(props.productName)}
      >
        <i class="add icon" />
        Add to Cart
      </div>
    </div>
  );
};

export default Product;
