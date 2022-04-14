// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// Ex2.2 - One and Zero - Binary  
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. 

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. 

// Examples: 

// Testing: [0, 0, 0, 1] ==> 1 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 0, 1] ==> 5 
// Testing: [1, 0, 0, 1] ==> 9 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 1, 0] ==> 6 
// Testing: [1, 1, 1, 1] ==> 15 
// Testing: [1, 0, 1, 1] ==> 11 
// However, the arrays can have varying lengths, not just limited to 4.
// Ex2.3 - Find the Next Perfect Square 

// You might know some pretty large perfect squares. But what about the NEXT one? 

// Complete the findNextSquare method that finds the next integral perfect square after the one 
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
// also an integer. 

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
// parameter is positive. 

// Examples: 

// findNextSquare(121) --> returns 144 
// findNextSquare(625) --> returns 676 
// findNextSquare(114) --> returns -1 since 114 is not a perfect
// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers.
let num = 1900
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let math = {
    sum2LowestNums: function(array) {
        let min1 = array[0];
        let min2 = array[array.length - 1];

        for (let i = 0; i < array.length; i++) {
            array[i] < min1 && (min1 = array[i]);
        }
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] < min2 && array[i] !== min1) min2 = array[i];
        }
        return min1 + min2
    },
    binaryToHex: function(array) {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 1) {
                sum += 2 ** (array.length - 1 - i);
            }
        }
        return sum
    },
    perfectPower: function(n) {
        if (n < 0) {
            return 'Please enter possitive number.'
        }
        if (Math.sqrt(n) % 1 === 0) {
            return (Math.sqrt(n) + 1) ** 2
        }
        return -1;
    },
    uniqeNumber: function(array) {
        let uniqeNumber;
        let sameNumber;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[i + 1]) {
                sameNumber = array[i]
                i = array.length;
            }
        }
        for (let j = 0; j < array.length; j++) {
            array[j] !== sameNumber && (uniqeNumber = array[j])
        }
        return uniqeNumber;
    },
    sommation: function(num) {
        return num * (num + 1) / 2
    },
    centryNumber: function(num) {
        return ((num - (num % 100)) / 100) + 1
    },
    basicMath: function(char, num1, num2) {
        if (char === "+") return num1 + num2
        if (char === "-") return num1 - num2
        if (char === "/") return num1 / num2
        if (char === "*") return num1 * num2

    },
}


console.log(math.basicMath("+", 5, 42))