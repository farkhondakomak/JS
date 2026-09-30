// Part 1: Student Information
let studentName = "Farkhonda";
let age = "24";
let score = "95";

//Part 2: String Methods
console.log(studentName.trim());
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.length);

//Part 3: Type Conversion
let numberAge = Number(age);
let numberScore = Number(score);

console.log(numberAge);
console.log(numberScore);

console.log(typeof numberAge);
console.log(typeof numberScore );

//Part 4: NaN
let result = Number("Hello");
console.log(result);
console.log(typeof result);

//Part 5: Type Coercion
console.log("10" + 5);
console.log("10" - 2);
console.log("10" * 2);

//Part 6: Debugging Challange

// Wrong code
// console.log(studentname);
// console.log("Hello");
let studentName2="Farkhonda";
console.log(studentName2);
console.log("Hello");

//Part 7:Student Information Formatter
console.log("Student: " +studentName.trim().toUpperCase());
console.log("Age: " + numberAge);
console.log("Score: " + numberScore);