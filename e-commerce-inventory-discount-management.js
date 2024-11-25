/**
 * E-Commerce Inventory and Discount Management
 * 
Problem Description:
An online e-commerce platform sells products from various categories such as electronics, clothing, and furniture. The platform needs an automated way to manage inventory and offer dynamic discounts during promotional events.

The store manager has the following requirements:

 -Products must be categorized by type, price, and stock availability.
 -During promotional events, all items under a specific category (e.g., clothing) must have a flat discount applied.
 -Products that are out of stock should automatically be marked as unavailable.
 -The system should calculate the total revenue for all sold items based on sales data.
 -The manager also wants to filter items based on price range for restocking decisions.
 */
// Sample Data
const inventory = [
 { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
 { id: 2, name: "T-Shirt", category: "Clothing", price: 20, stock: 0 },
 { id: 3, name: "Sofa", category: "Furniture", price: 500, stock: 3 },
 { id: 4, name: "Headphones", category: "Electronics", price: 50, stock: 10 },
];

// Apply a flat 10% discount on Clothing
inventory.forEach(item => {
 if (item.category === "Clothing") {
  item.price = item.price * 0.9; // 10% discount
 }
});

// Mark out-of-stock items as unavailable
const updatedInventory = inventory.map(item => ({
 ...item,
 availability: item.stock > 0 ? "Available" : "Unavailable",
}));

// Calculate total revenue
const sales = [
 { productId: 1, quantity: 2 }, // Sold 2 Laptops
 { productId: 4, quantity: 5 }, // Sold 5 Headphones
];

const totalRevenue = sales.reduce((total, sale) => {
 const product = inventory.find(item => item.id === sale.productId);
 return total + (product.price * sale.quantity);
}, 0);

// Filter items for restocking based on price range
const restockCandidates = inventory.filter(item => item.price < 100 && item.stock < 5);

console.log("Updated Inventory:", updatedInventory);
console.log("Total Revenue:", totalRevenue);
console.log("Restock Candidates:", restockCandidates);
