//  Student Grading System

// Description:
// Store student scores, find top scorers, and calculate averages.

const students = [
 { name: "John", score: 85 },
 { name: "Jane", score: 92 },
 { name: "Jim", score: 78 },
];

// Find top scorer
const topScorer = students.reduce((top, student) =>
 student.score > top.score ? student : top
);
// { name: "Jane", score: 92 }

// Calculate average score
const averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
// 85
console.log(topScorer);
console.log(averageScore);