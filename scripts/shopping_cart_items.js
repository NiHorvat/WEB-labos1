let shopping_cart;

function update_shoppingcart() {
  const stored_cart = localStorage.getItem("shopping_cart_items");
  if (stored_cart == null) {
    shopping_cart = new Map();
  } else {
    const entries = JSON.parse(stored_cart);
    shopping_cart = new Map(entries);
  }
}

function save_shoppingcart() {
  const entries = Array.from(shopping_cart.entries());
  localStorage.setItem("shopping_cart_items", JSON.stringify(entries));
}



