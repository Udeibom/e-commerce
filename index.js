// Simple E-commerce Console Application in JavaScript

class Commodity {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.cart = [];
    }
  
    addItem(commodity, quantity = 1) {
      this.cart.push({ commodity, quantity });
      console.log(`${quantity} ${commodity.name}(s) added to the cart.`);
    }
  
    displayCart() {
      if (this.cart.length === 0) {
        console.log("Your cart is empty.");
      } else {
        console.log("----- Shopping Cart -----");
        this.cart.forEach((item) => {
          console.log(`${item.commodity} x ${item.commodity.name} - $${item.commodity.price}`);
        });
        console.log("-------------------------");
      }
    }
  
    checkout() {
      if (this.cart.length === 0) {
        console.log("Your cart is empty. Nothing to checkout.");
      } else {
        const totalAmount = this.cart.reduce(
          (total, item) => total + item.commodity.price * item.quantity,
          0
        );
        console.log(`Total amount to pay: $${totalAmount.toFixed(2)}`);
        console.log("Thank you for shopping with us!");
        this.cart = [];
      }
    }
  }
  
  // Sample products
  const product1 = new Commodity(1, "Rice", 10.99);
  const product2 = new Commodity(2, "Beans", 19.99);
  const product3 = new Commodity(3, "Garri", 5.99);
  
  // Sample usage
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addItem(product1, 2);
  shoppingCart.addItem(product2);
  shoppingCart.addItem(product3, 3);
  
  shoppingCart.displayCart();
  
  shoppingCart.checkout();
  