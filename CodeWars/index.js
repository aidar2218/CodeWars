// Given a month as an integer from 1 to 12, return to which 
// quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; and month 11 (November), 
// is part of the fourth quarter.

// Constraint:   1 <= month <= 12



// const quarterOf = (month) => {
//     if (month > 0 && month <= 3) {
//         return 1;
//     } else if (month > 3 && month <= 6) {
//         return 2;
//     } else if (month > 6 && month <= 9) {
//         return 3;
//     } else if (month > 9 && month <= 12) {
//         return 4
//     }
// }
////////////////////////////////////////////////////////////////



// Given an array of integers, return a new array with each value doubled.
// For example: [1, 2, 3] --> [2, 4, 6]

// let arrrr = [2, 6, 3];

// function maps(arr){
//     for (i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2; 
//     }
//     return arr;
// }
/////////////////////////////////////////////////////////////////////



// You were camping with your friends far away from home, but when it's 
// time to go back, you realize that your fuel is running out and the 
// nearest pump is 50 miles away! You know that on average, your car runs 
// on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is 
// possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (distanceToPump > (mpg * fuelLeft)) {
//         return false;
//     } else {
//         return true;
//     }
// };
//////////////////////////////////////////////////////////////////////



// Write a function that accepts an integer n and a string s as 
// parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//     return s.repeat(n);
// }
//////////////////////////////////////////////////////////////////////


// Write a function to split a string and convert it into an 
// array of words.

// function stringToArray(string){
//     return string.split(" ");
// }
//////////////////////////////////////////////////////////////////////



// Given an array of integers as strings and numbers, return the sum of 
// the array values as if all were numbers.
// Return your answer as a number.

// function sumMix(x) {
//     let result = 0;
//     for (i = 0; i < x.length; i++) {
//         result += Number(x[i]);
//     }
//     return result;
// }
////////////////////////////////////////////////////////////////////



// Given a set of numbers, return the additive inverse of each. Each 
// positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input 
// array/list.

// function invert(array) {
//     for(let i = 0; i < array.length; i++) {
//         array[i] *= -1;
//     }
//     return array;
// }
///////////////////////////////////////////////////////////////////



// Create a function with two arguments that will return an array of the 
// first n multiples of x.
// Assume both the given number and the number of times to count will be 
// positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// function countBy(x, n) {
//     let z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }
///////////////////////////////////////////////////////////////////



// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better 
// than the average student in your class.
// You receive an array with your peers' test scores. Now calculate 
// the average and compare your score!
// Return True if you're better, else False!
// Note: Your points are not included in the array of your class's 
// points. For calculating the average point you may add your point 
// to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     let average = 0;

//     for (i = 0; i < classPoints.length; i++) {
//         average += classPoints[i];
//     }
//     average = average / classPoints.length;

//     if (yourPoints > average) {
//         return true;
//     } else {
//         return false;
//     }
// }
////////////////////////////////////////////////////////////////////



// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 
// (1 * 1) + (2 * 2) + (2 * 2) = 9

// function squareSum(numbers){
//     let newArr = 0;
//     for (i = 0; i < numbers.length; i++) {
//         newArr += Math.pow(numbers[i], 2);
//     }
//     return newArr;
// }
///////////////////////////////////////////////////////////////////



// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     return str.split("").reverse().join("")
// }
////////////////////////////////////////////////////////////////////



// This function should take two arguments: exam - grade for exam 
// (from 0 to 100); projects - number of completed projects
// (from 0 and above);
// This function should return a number (final grade). There are four 
// types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of 
// completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of 
// completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of 
// completed projects is minimum 2.
// 0, in other cases.

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10) return 100;
//     if(exam > 75 & projects >= 5) return 90;
//     if(exam > 50 & projects >= 2) return 75;
//     return 0;
// }

// console.log(finalGrade(55, 4));
////////////////////////////////////////////////////////////////



// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd"
//     }
// }
///////////////////////////////////////////////////////////////////



// Alex just got a new hula hoop, he loves it but feels discouraged 
// because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes 
// round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string 
// "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string 
// "Keep at it until you get it".

// function hoopCount (n) {
//     if (n >= 10) {
//         return "Great, now move on to tricks";
//     } else {
//         return "Keep, at it until you get it";
//     }
// }
/////////////////////////////////////////////////////////////////////



// Complete the function so that it finds the average of the three scores 
// passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check 
// for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//     let result = (s1 + s2 + s3) / 3;

//     if (result >= 90 && result <= 100) {
//         return "A";
//     } else if (result >= 80 && result < 90) {
//         return "B";
//     } else if (result >= 70 && result < 80) {
//         return "C";
//     } else if (result >= 60 && result < 70) {
//         return "D";
//     } else if (result >= 0 && result < 60) {
//         return "F";
//     }
// }
////////////////////////////////////////////////////////////////////////



// You are given the length and width of a 4-sided polygon. The polygon 
// can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its 
// perimeter.

// const areaOrPerimeter = function(l , w) {
//     if (l == w) {
//         return l * w;
//     } else {
//         return (l * 2) + (w * 2);
//     }
// };
/////////////////////////////////////////////////////////////////////



// Complete the function which takes two arguments and returns all 
// numbers which are divisible by the given divisor. First argument 
// is an array of numbers and the second is the divisor.

// function divisibleBy(numbers, divisor){
//     let arrDivisors = [];
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] % divisor == 0) {
//             arrDivisors.push(numbers[i]);
//         }
//     }
//     return arrDivisors;
// }

// console.log();
/////////////////////////////////////////////////////////////////////



// The first century spans from the year 1 up to and including the year 
// 100, the second century - from the year 101 up to and including the 
// year 200, etc.
// Given a year, return the century it is in.

// function century(year) {
//     return Math.ceil(year / 100);
// }
///////////////////////////////////////////////////////////////////



// Given a list of integers, determine whether the sum of its elements 
// is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
//     let arrSum = 0;

//     for (i = 0; i < array.length; i++) {
//         arrSum += array[i];
//     }
    
//     if (arrSum % 2 == 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//////////////////////////////////////////////////////////////////


// Write a function that takes an array of numbers and returns the sum 
// of the numbers. The numbers can be negative or non-integer. If the 
// array does not contain any numbers then you should return 0.

// function sum(numbers) {
//     let sumNum = 0;
//     for (i = 0; i < numbers.length; i++) {
//         sumNum += numbers[i];

//     }
//     return sumNum;
// };
//////////////////////////////////////////////////////////////////



// You get an array of numbers, return the sum of all of the positives 
// ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let result = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += arr[i];
//         }
//     }
//     return result;
// }
///////////////////////////////////////////////////////////////////



// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 
// litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of 
// litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time * 0.5)
// }
/////////////////////////////////////////////////////////////////////



// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are 
// playing banjo!
// The function takes a name as its only argument, and returns one of 
// the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

// function areYouPlayingBanjo(name) {
//     if (name[0] == "R" || name[0] == "r") {
//         return name + " plays banjo"
//     } else {
//         return name + " does not play banjo"
//     }
// }
////////////////////////////////////////////////////////////////////



// Implement a function that accepts 3 integer values a, b, c. The 
// function should return true if a triangle can be built with the sides 
// of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be 
// accepted).

// function isTriangle(a,b,c) {
//     return a + b > c && a + c > b && b + c > a;
// }
/////////////////////////////////////////////////////////////////////



// After a hard quarter in the office you decide to get some rest on a 
// vacation. So you will book a flight for you and your girlfriend and 
// try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your 
// vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or 
// more days, you get $50 off your total. Alternatively, if you rent 
// the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//     let cost = 40 * d;
//     let result;
//     if (d >= 7) {
//         result = cost - 50;
//     } else if (d >= 3) {
//         result = cost - 20;
//     } else {
//         return cost;
//     }
//     return result;
// }
/////////////////////////////////////////////////////////////////////


// function func(num) {
//     num = num || 3;

//     return num * num;
// }

// console.log(func());
///////////////////////////////////////////////////////////////////



// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Note you should only return a number, the count of divisors. The 
// numbers between parentheses are shown only for you to see which 
// numbers are counted in each case.

// function getDivisorsCnt(n){
//     let divisors = 0;
//     for (i = 1; i <= n; i++) {
//       if (n % i == 0) {
//         divisors++;
//       }
//     }
//     return divisors;
// }



// Given a non-empty array of integers, return the result of 
// multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     let num = 1;
//     for (i = 0; i < x.length; i++) {
//         num *= x[i];
//     }
//     return num;
// }
///////////////////////////////////////////////////////////////////////



// Jenny is 9 years old. She is the youngest detective in North America. 
// Jenny is a 3rd grader student, so when a new mission comes up, she 
// gets a code to decipher in a form of a sticker (with numbers) in her 
// math notebook and a comment (a sentence) in her writing notebook. All 
// she needs to do is to figure out one word, from there she already 
// knows what to do. And here comes your role - you can help Jenny find 
// out what the word is!
//      In order to find out what the word is, you should use the sticker 
// (array of 3 numbers) to retrive 3 letters from the comment (string) 
// that create the word.
//      Each of the numbers in the array refers to the position of a letter 
// in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return 
// "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" 
// (0 = "i", 3 = "v", 5 = "y")

// function missingWord(nums, str) {
//     let newString = str.split(" ").join("").split("");
//     let newNumber = nums.sort();
//     let resultStrArr = [];

//     for (i = 0; i < newString.length; i++) {
//         for (j = 0; j < newNumber.length; j++) {
//             if (i == newNumber[j]) {
//                 resultStrArr.push(newString[i]);
//             } else if (newNumber[j] > newString.length) {
//                 return "No mission today"
//             }

//         }
//     }

//     let result = resultStrArr.join("");

//     return result.toLowerCase();
// }



// Character recognition software is widely used to digitise printed 
// texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), 
// are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have 
// to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(string) {
//     let array = string.split("");
// 	for (i = 0; i < array.length; i++) {
//         if (array[i] === "5") {
//             array[i] = "S";
//         } else if (array[i] === "0") {
//             array[i] = "O";
//         } else if (array[i] === "1") {
//             array[i] = "I";
//         }
//     }
//     return array.join("");
// }
///////////////////////////////////////////////////////////////////



// You ask a small girl,"How old are you?" She always says, "x years 
// old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, 
// the test input may be "1 year old" or "5 years old". The first 
// character in the string is always a number.

function getAge(inputString){
    return Number(inputString[0]);
}