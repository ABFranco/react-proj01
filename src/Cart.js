import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    //this.state.cartItems = new Array();
    // this.state = { quote: "" };

    this.state = {
      cartItems: [
        {
          productName: "Apple",
          price: 1,
          count: 2
        },
        {
          productName: "Orange",
          price: 2,
          count: 1
        }
      ]
    };
  }

  // handleAddToCart(productName, price) {
  //   console.log();
  //   let itemsCopy = [...this.state.cartItems];
  //   for (let item in itemsCopy) {
  //     if (item.productName === productName) {
  //       item.count = item.count + 1;
  //       console.log(item);
  //     } else {
  //       itemsCopy.push([{ productName: productName, price: price, count: 1 }]);
  //     }
  //   }
  //   this.setState({ cartItems: itemsCopy });
  //   console.log(this.state);
  // }

  render() {
    return (
      <div className="page-content">
        {/* <h2>Add your products here!</h2> */}
        <div class="ui cards">
          {ProductData.products.map(product => (
            <Product
              productName={product.name}
              price={product.cost}
              onAddToCart={(productName, price) => {
                let itemsCopy = [...this.state.cartItems];
                let added = false;
                for (let i = 0; i < itemsCopy.length; i++) {
                  let item = itemsCopy[i];
                  if (item.productName === productName) {
                    item.count = item.count + 1;
                    added = true;
                  }
                }

                if (!added) {
                  itemsCopy.push({
                    productName: productName,
                    price: price,
                    count: 1
                  });
                }
                this.setState({ cartItems: itemsCopy });
              }}
              onRemoveFromCart={(productName, price) => {
                let itemsCopy = [...this.state.cartItems];
                let removed = false;
                for (let i = 0; i < itemsCopy.length; i++) {
                  let item = itemsCopy[i];
                  if (item.productName === productName) {
                    item.count = item.count - 1;
                    if (item.count <= 0) {
                      removed = true;
                    }
                  }
                }
                if (removed) {
                  itemsCopy = itemsCopy.filter(
                    item => item.productName !== productName
                  );
                }
                this.setState({ cartItems: itemsCopy });
              }}
              // limit={product.stock}
            />
          ))}
        </div>
        <div>
          <Receipt items={this.state.cartItems} />
        </div>
      </div>
    );
  }
}

export default Cart;
