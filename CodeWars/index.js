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

function solution(str){
    return str.split("").reverse().join("")
}