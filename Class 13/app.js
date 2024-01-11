//********************PROMPT */

// prompt("What is your name?")

// var myName = prompt("Enter Name", "sabih")

// alert(myName)
// console.log(myName)

// var myName = prompt("Enter your name:")
// var myAge = +prompt("Enter your age:")

// console.log(myName)
// console.log(myAge)
//by typing plus(+) infront of a command we can make the string a number

//*************************IF ELSE STATEMENTS */

// var age = prompt("Enter your age:")

// if(age == 20){
//     alert("You are allowed")
// }
// else{
//     alert("You are not allowed")
// }

//*********************triple equal check if the data type is same or not
//*********************else if statments */

// var age = +prompt("Enter your age:")
// if(age === 20){
//     alert("You are allowed")
// }
// else if(age === 15){
//     alert("You are allowed")
// }
// else if(age === 12){
//     alert("You are 12 years old ")
// }
// else{
//     alert("You are not allowed")
// }
// console.log(age)

//*****************************greater than and less than */

// var num1 = 20;
// var num2 = 40;

// if(num1 >= num2){
//     alert("ABCD")
// }
// else if(num2 > num1){
//     alert("run")
// }

// if(num1 !== num2){
//     alert("ABCD")
// }

// var age = +prompt("Enter your age:")
// var schoolClass = +prompt("Enter class:")
// var roll = +prompt("Enter roll no:")

//*****************OR CONDITION */
// if(age < 20 || schoolClass > 10){
//     alert("You are allowed")
// }
// else{
//     alert("You are not allowed")
// }

//******************AND CONDITION */
// if(age < 20 && schoolClass > 10){
//     alert("You are allowed")
// }
// else{
//     alert("You are not allowed")
// }

// if(age < 20 && (schoolClass > 10 || roll === 2121)){
//     alert("You are allowed")
// }
// else{
//     alert("You are not allowed")
// }

// if(age === 20){
//     if(roll === 1){
//         alert("Nested if")
//     }
// }
// else{
//     if(age !== 20){
//         alert("Not run in else")
//     }
// }

// console.log(age, schoolClass, roll)

//*******************ARRAYS */

var fruits = ["Mango", "Apple", "Kela", "Nashpati", "Kharbooza"]
fruits.push("Orange")
// ? for removing last element
fruits.pop();
// ? for removing first element 
fruits.shift();
fruits.unshift("Banana")
console.log(fruits, "Console first")

var colors = ["Red", "Green", "Yellow", 3, true, false]

// console.log(fruits)
// console.log(colors)
// console.log(fruits[fruits.length-1])
