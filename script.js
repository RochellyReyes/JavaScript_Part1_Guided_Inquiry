// Very Easy: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”.  2 ways 

/* 
var numA = 6;
var numB = 2;
var numC = numA - numB;
console.log(`The difference between ${numA} and ${numB} is ${numA - numB}.`)

var numA = 6;
var numB = 2;

function add(val1, val2) {
    return val1 + val2;
}

add(numA, numB);

numC = add(numA, numB);
*/

// Easy: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: "The name Thomas is longer than john by 2 characters"

/* 
var name1 = "Thomas";
var name2 = "John"; 
var lettersname1 = 6;
var lettersname2 = 4;
console.log (`${name1} is longer than ${name2} by ${lettersname1 - lettersname2} letters.`)
*/

// Medium:  Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
/*
var mediumInput = prompt("How's it going?"); 
if (!mediumInput || mediumInput === '') {
    alert("You didn't say anything, refresh the page and try again")
} else if (mediumInput === mediumInput.toUpperCase()) {
    alert('You are shouting!');
} else if (mediumInput === mediumInput.toLowerCase()){
    alert('You are whispering');
} else {
    alert('Thank you for typing normally');
}*/


// Hard: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
/**/
'use strict'
function add(value1, value2) {
    return`${value1} + ${value2} = ${value1 + value2}`;
};
// console.log(add(5, 5));

function subtract(value1, value2) {
    return`${value1} - ${value2} = ${value1 - value2}`
};
// console.log(subtract(5, 5));

function multiply(value1, value2) {
    return`${value1} * ${value2} = ${value1 * value2}`
};
// console.log(multiply(5, 5));

function divide(value1, value2) {
    return`${value1} / ${value2} = ${value1 / value2}`
};
// console.log(divide(5, 5));

// Very Hard: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


var userNum1 = Number(prompt('Give me your first number'));
var userOperator = prompt('Give me an operator (+, -, /, *)');
var userNum2 = Number(prompt('Give me your second number'));

switch(userOperator) {
    case '+': 
      var result = add(userNum1, userNum2);
      alert(result);
      break;
    case '-':
        var result = subtract(userNum1, userNum2);
        alert(result);       
        break;
    case '*':
        var result = multiply(userNum1, userNum2);
        alert(result);        
        break;
    case '/':
        var result = divide(userNum1, userNum2);
        alert(result);        
        break;
    default:
        alert('Not valid input');
        break;
}

