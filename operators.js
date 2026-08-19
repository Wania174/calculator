// ARITHMETIC OPERATORS
// let a = 10;
// let b = 20;
// let c = 30;
// let d = a + b + c;
// console.log("a = ", a, " & b = ", b, " & c = ", c); 
// ADDITION
// console.log("a + b + c = ", a + b + c); 
// SUBTRACTION
// console.log("a - b - c = ", a - b - c);
// MULTIPLICATION
// console.log("a * b * c = ", a * b * c);
// DIVISION
// console.log("a / b / c = ", a / b / c);
// MODULUS
// console.log("a % b % c = ", a % b % c);
// EXPONENTIATION
// let d = 5;
// let e = 2;
// console.log("d ** e  = ", d ** e);
// INCREMENT AND DECREMENT OPERATORS
// let a = 5;
// console.log("a = ", a);
// // a = a + 1;  instead of this we can use a++ ya a = a + 1;
// a++;
// console.log("a = ", a);

// let x = 5;
// console.log("x = ", x);
// // x = x - 1;  instead of this we can use x-- ya x = x - 1;
// x--;
// console.log("x = ", x);
 
// Increment and Decrement Operators Types
// let b = 5;
// console.log("b = ", b);
// console.log("++b = ", ++b); // pre-increment

// let c = 5;
// console.log("c++ = ", c++);  // post-increment
// console.log("c = ", c);

// let d = 5;
// console.log("--d = ", --d); // pre-decrement

// let e = 5;
// console.log("e-- = ", e--);  // post-decrement
// console.log("e = ", e);

// UNARY OPERATORS
// let a = 10;
// let b = 20;
// console.log("a = ", a, " & b = ", b);
// console.log("++a = ", ++a);
// console.log("--b = ", --b);

// BINARY OPERATORS
// let c = 30 + 10;
// console.log("c = ", c);

// ASSIGNMENT OPERATOR

// += Add & Assign
// let a = 10;    //= ka matlab hai 10 ko a mein assign karo.
// a += 5;  //  ya a = a + 5;
// console.log(a);  
// // SUBTRACT & ASSIGN
// let b = 10;
// b -= 3;
// console.log(b); 
//  //*= Multiply & Assign
//  let c = 10;
//  c *= 2;
// console.log(c); 
// // /= Divide & Assign
// let d = 10;
//  d/= 2;
// console.log(d); 
// // %= Remainder & Assign
// let e = 10;
// e %= 3;
// console.log(e); 
// **= EXPONENTIATION & ASSIGN
//  let f = 10;
//  f %= 3;
//  console.log(f); 
// COMPARISON OPERATORS
// let x = 5;
// let y = 2;
// console.log("x = ", x, " & y = ", y);
// // EQUAL TO
// console.log("x == y = ", x == y);   
// // NOT EQUAL TO 
// console.log("x != y = ", x != y);
// STRICT EQUAL TO
// console.log("x === y = ", x === y);
// STRICT NOT EQUAL TO
// console.log("x !== y = ", x !== y);   
// // GREATER THAN
// console.log("x > y = ", x > y);
// // LESS THAN
// console.log("x < y = ", x < y);
// // GREATER THAN OR EQUAL TO
// console.log("x >= y = ", x >= y);
 // LESS THAN OR EQUAL TO
// console.log("x <= y = ", x <= y);
// //LOGICAL OPERATORS
// let a = true;
// let b = false;
// console.log("a = ", a, " & b = ", b);
// // AND
// console.log("a && b = ", a && b);
// // OR
// console.log("a || b = ", a || b);
// // NOT
// console.log("!a = ", !a);

//LOGICAL OPERATORS
// console.log(10 > 5 && 10 < 20);
// console.log(10 > 20 || 40 === 40);
// console.log(!(10 > 20) , !( 40 === 40)); // true but false bcz NOT ! result ko ulta opposite kar deta hai.
// CONDITIONAL STATEMENTS
// IF STATEMENT
// let age = 18;
// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "blue";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);
// if (age >= 24) {
//     console.log("You can vote");
// }
// if (age < 20) {
//     console.log("You cannot vote");
// }
// IF-ELSE STATEMENT
// let age = 25;

// if (age >= 30) {
//    console.log("You can pass");   
// }
// else {
//     console.log("You cannot pass");
// }
// let num = 20;
// if (num % 2=== 0) {
//     console.log(num, "is even");
// } else  {
//     console.log(num, "is odd");
// }
// ELSE-IF STATEMENT
let marks = 75;

if (marks >= 80) {
    console.log("A Grade");
} else if (marks <= 60) {
    console.log("B Grade");
} else if (marks == 90) {
    console.log("C Grade");
} else  {
    console.log("Fail");
}
