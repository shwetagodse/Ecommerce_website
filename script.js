// cart.js

// Array to hold cart items
let cartItems = [];

// Function to handle adding items to the cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Function to update the cart display (for simplicity, it logs to the console)
function updateCart() {
  const cartElement = document.querySelector(".nav-cart");
  cartElement.innerHTML = `Cart (${cartItems.length})`;
  console.log("Cart Items:", cartItems);
}

// Adding event listeners to "Shop now" buttons
document.addEventListener("DOMContentLoaded", () => {
  const shopButtons = document.querySelectorAll("[class^='Shopnow']");
  
  shopButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemName = event.target.previousElementSibling.textContent; // Getting the item name
      addToCart(itemName); // Add item to cart
      alert(`${itemName} added to cart!`); // Notify the user
    });
  });
});
