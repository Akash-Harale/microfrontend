import faker from "faker";

const cartitems = faker.datatype.number(20);

document.querySelector(
  "#div-cart"
).innerHTML = `You have ${cartitems} items in your cart`;

console.log("cart");
