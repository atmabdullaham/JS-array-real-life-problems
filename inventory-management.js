// Inventory Management

// Description:
// Manage stock levels and identify low - stock items.

const inventory = [
 { item: "Laptop", stock: 5 },
 { item: "Mouse", stock: 20 },
 { item: "Keyboard", stock: 2 },
];

// Find low-stock items
const lowStockItems = inventory.filter(item => item.stock < 10);
// [{ item: "Laptop", stock: 5 }, { item: "Keyboard", stock: 2 }]
console.log(lowStockItems);