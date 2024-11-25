/**
 * Grouping Data
 * 
Description:
Group products by category
 */

const items = [
 { name: "Laptop", category: "Electronics" },
 { name: "Shirt", category: "Clothing" },
 { name: "Phone", category: "Electronics" },
];

// Group by category
const groupedByCategory = items.reduce((groups, item) => {
 if (!groups[item.category]) groups[item.category] = [];
 groups[item.category].push(item);
 return groups;
}, {});
/*
{
  Electronics: [{ name: "Laptop", ... }, { name: "Phone", ... }],
  Clothing: [{ name: "Shirt", ... }]
}
*/
console.log(groupedByCategory);