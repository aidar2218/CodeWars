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

// function getAge(inputString){
//     return Number(inputString[0]);
// }
/////////////////////////////////////////////////////////////////



// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all
// three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
//////////////////////////////////////////////////////////////////////



// The starship Enterprise has run into some problem when creating a
// program to greet everyone as they come aboard. It is your job to fix
// the code and get the program working again!
// Example output:
// Hello, Mr. Spock

// function sayHello(name) {
//     return 'Hello, ' + name;
// }
/////////////////////////////////////////////////////////////////////



// Write a function that takes an array of words and smashes them
// together into a sentence and returns the sentence. You can ignore
// any need to sanitize words or add punctuation, but you should add
// spaces between each word. Be careful, there shouldn't be a space at
// the beginning or the end of the sentence!

// function smash (words) {
//     return words.join(" ");
// };
//////////////////////////////////////////////////////////////////////



// Take an array and remove every second element from the array. Always
// keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] -->
// ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about
// that!

// function removeEveryOther(arr){
//     let newArray = [];
//     for (i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
///////////////////////////////////////////////////////////////////



// Bob needs a fast way to calculate the volume of a cuboid with three
// values: the length, width and height of the cuboid. Write a function
// to help Bob with this calculation.

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height;
//     }
// }
///////////////////////////////////////////////////////////////////////



// Your task is to make a function that can take any non-negative
// integer as an argument and return it with its digits in descending
// order. Essentially, rearrange the digits to create the highest
// possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     let str = String(n);
//     let arr = str.split("").sort().reverse();
//     let result = arr.join("");
//     return Number(result);
// }
///////////////////////////////////////////////////////////////////////



// Very simple, given an integer or a floating-point number, find its
// opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     if (number < 0) {
//         number = 0 + Math.abs(number);
//     } else if (number > 0) {
//         number = 0 - number;
//     }
//     return number;
// }
/////////////////////////////////////////////////////////////////////



// In this simple exercise, you will create a program that will take two
// lists of integers, a and b. Each list will consist of 3 positive
// integers above 0, representing the dimensions of cuboids a and b. You
// must find the difference of the cuboids' volumes regardless of which
// is bigger.

// function findDifference(a, b) {
//     let sumA = a[0] * a[1] * a[2];
//     let sumB = b[0] * b[1] * b[2];
//     let result;

//     if (sumA > sumB) {
//         result = sumA - sumB;
//     } else {
//         result = sumB - sumA;
//     }
//     return result;
// }
/////////////////////////////////////////////////////////////////////



// Make a program that takes a value (x) and returns "Bang" if the
// number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom"
// if it divisible by 3 and 5, and "Miss" if it isn't divisible by any
// of them. Note: Your program should only return one value

// function multiple(x) {
//     if (x % 3 == 0 && x % 5 == 0) {
//         return "BangBoom";
//     }
//     else if (x % 3 == 0) {
//         return "Bang";
//     } else if (x % 5 == 0) {
//         return "Boom";
//     } else {
//         return "Miss";
//     }
// }
////////////////////////////////////////////////////////////////////////



// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son
// (or in how many years he will be twice as old). The answer is always
// greater or equal to 0, no matter if it was in the past or it is in
// the future.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs((sonYearsOld * 2) - dadYearsOld);
// }
/////////////////////////////////////////////////////////////////////



// We need a function that can transform a number (integer) into a
// string.

// function numberToString(num) {
//     return String(num);
// }
/////////////////////////////////////////////////////////////////////



// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items. We want to
// create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of
// people that like an item. It must return the display text as shown in
// the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//     if (names.length == 1) {
//         return names[0] + " likes this";
//     } else if (names.length == 2) {
//         return names[0] + " and " + names[1] + " like this";
//     } else if (names.length == 3) {
//         return names[0] + ", " + names[1] + " and " + names [2] + " like this";
//     } else if (names.length > 3) {
//         return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
//     } else {
//         return "no one likes this"
//     }
// }
//////////////////////////////////////////////////////////////////////



// A hero is on his way to the castle to complete his mission. However,
// he's been told that the castle is surrounded with a couple of
// powerful dragons! each dragon takes 2 bullets to be defeated, our
// hero has no idea how many bullets he should carry.. Assuming he's
// gonna grab a specific given number of bullets and move forward to
// fight another specific given number of dragons, will he survive?

// function hero(bullets, dragons){
//     if (bullets < dragons * 2) {
//         return false;
//     } else {
//         return true;
//     }
// }



// Write a function to convert a name into initials. This kata strictly
// takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//     let arr = name.split(" ");
//     let firstName = arr[0].toUpperCase();
//     let lastName = arr[1].toUpperCase();
//     return firstName[0] + "." + lastName[0];
// }
//////////////////////////////////////////////////////////////////////



// Bob is working as a bus driver. However, he has become extremely
// popular amongst the city's residents. With so many passengers wanting
// to get aboard his bus, he sometimes has to face the problem of not
// enough space left on the bus! He wants you to write a simple program
// telling him if he will be able to fit all the passengers.
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding
// the driver.
// If there is enough space, return 0, and if there isn't, return the
// number of passengers he can't take.

// function enough(cap, on, wait) {
//     if (on + wait > cap) {
//         return Math.abs(cap - (on + wait))
//     } else {
//         return 0;
//     }
// }

// console.log(enough(100, 60, 50));
//////////////////////////////////////////////////////////////////////



// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//     return 180 - (a + b);
// }
/////////////////////////////////////////////////////////////////////



// Let's play! You have to return which player won! In case of a draw
// return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//     if (p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock" || p1 == "rock" && p2 == "scissors") {
//         return "Player 1 won!";
//     } else if (p1 == "scissors" && p2 == "scissors" || p1 == "paper" && p2 == "paper" || p1 == "rock" && p2 == "rock") {
//         return "Draw!";
//     } else {
//         return "Player 2 won!";
//     }
// };
/////////////////////////////////////////////////////////////////////



// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for
// this kata.

// function testEven(n) {
//     return n % 2 == 0;
// }
////////////////////////////////////////////////////////////////////



// If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a
// murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid,
// i.e. no negative integers.

// var countSheep = function (num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(i + " sheep...")
//     }
//     return arr.join("");
// }
//////////////////////////////////////////////////////////////////////



// Create a function that accepts a string and a single character, and 
// returns an integer of the count of occurrences the 2nd argument is 
// found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// function strCount(str, letter){  
//     let realCount = 0;
//     let arr = str.split("");

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == letter) {
//             realCount++;
//         }
//     }

//     return realCount;
// }
//////////////////////////////////////////////////////////////////////



// Complete the function that takes two integers (a, b, where a < b) and 
// return an array of all integers between the input parameters, 
// including them.

// function between(a, b) {
//     let arr = [];
//     for (i = a; i <= b; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
///////////////////////////////////////////////////////////////////////



// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or 
// spaces.

// function getCount(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         for(let j = 0; j < vowels.length; j++) {
//             if (str[i] == vowels[j]) {
//                 count++
//             }
//         }
//     }

//     return count;
// }
//////////////////////////////////////////////////////////////////////



// Check to see if a string has the same amount of 'x's and 'o's. The 
// method must return a boolean and be case insensitive. The string can 
// contain any char.

// function XO(str) {
//     let arr = str.toLowerCase().split("");
//     let countX = 0;
//     let countO = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === "x") {
//             countX++;
//         } else if (arr[i] === "o") {
//             countO++;
//         }
//     }
//     return countX == countO;
// }
//////////////////////////////////////////////////////////////////////



// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

// function checkForFactor (base, factor) {
//     return base % factor == 0;
// }
//////////////////////////////////////////////////////////////////////



// You will be given an array a and a value x. All you need to do is 
// check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// function check(a, x) {
//     let count = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i] == x) {
//             count++;
//         }
//     }
//     return count > 0;
// }
//////////////////////////////////////////////////////////////////////



// You're writing code to control your town's traffic lights. You need 
// a function to handle each change from green, to yellow, to red, and 
// then to green again.
// Complete the function that takes a string as an argument 
// representing the current state of the light and returns a string 
// representing the state the light should change to.
// For example, when the input is green, output should be yellow.

// function updateLight(current) {
//     if (current == "green") {
//         return "yellow";
//     } else if (current == "yellow") {
//         return "red";
//     } else {
//         return "green";
//     }
// }
/////////////////////////////////////////////////////////////////////



// In this simple assignment you are given a number and have to make it 
// negative. But maybe the number is already negative?

// function makeNegative(num) {
//     if (num > 0) {
//         return 0 - num;
//     } else {
//         return num;
//     }
// }



// Create a function that checks if a number n is divisible by two 
// numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}