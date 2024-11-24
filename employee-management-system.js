//  Employee Management System

//  Description:
//  Store and manage employee details in an organization.

const employees = [
 { id: 1, name: "Alice", role: "Manager", salary: 80000 },
 { id: 2, name: "Bob", role: "Developer", salary: 60000 },
 { id: 3, name: "Charlie", role: "Designer", salary: 50000 },
];

// Step 1: Calculate total salary
const totalSalary = employees.reduce(function (sum, emp) {
 return sum + emp.salary;
}, 0);
console.log("Total Salary:", totalSalary); // Output: 190000

// Step 2: Promote Bob to Senior Developer
const bob = employees.find(function (emp) {
 return emp.name === "Bob";
});
if (bob) {
 bob.role = "Senior Developer";
}
console.log("Updated Employees:", employees);

