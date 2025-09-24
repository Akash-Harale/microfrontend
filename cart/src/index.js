import faker from "faker";

const cartitems = faker.random.numeric(1);

document.querySelector(
  "#div-cart"
).innerHTML = `You have ${cartitems} items in your cart`;

console.log("cart");
