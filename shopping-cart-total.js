// Shopping cart total:

const cart = [
 { name: "Laptop", quantity: 1, price: 1000 },
 { name: "Phone", quantity: 2, price: 500 },
];
const cartTotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
// 2000
console.log(cartTotal)
