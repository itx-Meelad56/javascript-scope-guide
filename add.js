// ==========================
// 1. Global Scope 🌍
// ==========================
// Jo variable function ke bahar banate ho, wo poori file me accessible hota hai.

let myName = "Meelad Raza"; // Global variable

function printName() {
    console.log("My Name is: " + myName);  // ✅ Accessible here
}

printName();
console.log("My Name is: " + myName);      // ✅ Accessible here

// 🔹 Rule:
// Global variables kahin se bhi access ho sakte hain.


// ==========================
// 2. Function Scope (Local Scope) 🔒
// ==========================
// Jo variable function ke andar banate ho, wo sirf usi function ke andar accessible hota hai.

function showAge() {
    let myAge = 18;  // Local variable
    console.log("My Age is: " + myAge);  // ✅ Accessible here
}

showAge();
// console.log(myAge);  // ❌ Error: myAge is not defined (local variable bahar access nahi hota)

// 🔹 Rule:
// Function ke andar banaya variable sirf usi function tak limited hota hai.


// ==========================
// 3. Block Scope (let & const) 🧩
// ==========================
// Block {} ka matlab curly braces ke andar ka area — jaise if, for, while, ya sirf { }.
// let & const → sirf block ke andar hi accessible ✅
// var → block ko ignore karta hai ❌

if (true) {
    let yourAge = 18;
    console.log("Your Age is: " + yourAge);  // ✅ Accessible here
}

// console.log(yourAge);  // ❌ Error: yourAge is not defined


// ======= var Example (Block Ignored) =======
if (true) {
    var yourName = "Meelad";
}

console.log("Your Name is: " + yourName);  // ✅ Accessible here (var ignores block scope)


// 🔹 Rule Summary:
// let & const → Block Scoped ✅
// var → Function Scoped ❌


// ==========================
// 4. Mini Practice Challenge 🏆
// ==========================

let userName = "Meelad";

function outer() {
    let course = "JavaScript";

    function inner() {
        console.log("Course: " + course);      // ✅ Access from parent
        console.log("User: " + userName);      // ✅ Access from global
    }

    inner();
}

outer();


// ==========================
// 5. Advanced Practice Challenge 🏆
// ==========================

let user_name = "Meelad";

function first() {
    let user_name = "Ali";

    function second() {
        console.log("Inside Function: " + user_name);  // ✅ Function finds closest variable → "Ali"
    }

    second();
}

first();

console.log("Outside Function: " + user_name);  // ✅ Accesses global → "Meelad"
