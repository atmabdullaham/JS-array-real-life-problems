//  Restaurant Order Management

// Description:
// Track orders, find pending orders, and calculate revenue.

const orders = [
 { id: 1, item: "Pizza", status: "Delivered", price: 15 },
 { id: 2, item: "Burger", status: "Pending", price: 10 },
 { id: 3, item: "Pasta", status: "Delivered", price: 12 },
];

// Find pending orders
const pendingOrders = orders.filter(order => order.status === "Pending");
// [{ id: 2, item: "Burger", status: "Pending", price: 10 }]

// Calculate total revenue
const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
// 37
console.log(pendingOrders);
console.log(totalRevenue);