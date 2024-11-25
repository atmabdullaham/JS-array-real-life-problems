/**
 * E-commerce Price Filter
 * 
Description:
Filter products by price range.
 */
const products = [
 { name: "Shoes", price: 50 },
 { name: "Bag", price: 30 },
 { name: "Watch", price: 100 },
];

// Products under $50
const affordableProducts = products.filter(product => product.price <= 50);
// [{ name: "Shoes", price: 50 }, { name: "Bag", price: 30 }]
console.log(affordableProducts);
