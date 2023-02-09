// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
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

let arrrr = [2, 6, 3];

function maps(arr){
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2; 
    }
    return arr;
}