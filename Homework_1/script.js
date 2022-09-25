//* Homework 1

//! Task 1

/*
Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit 
already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

// ( °C × 9/5) + 32 =  °F

// Imperative

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Declarative

const convertCtoF2 = celsius => (celsius * 9/5) + 32;


//! Task 2

/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

// Imperative

function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str
}

// Declarative

const reverseString2 = str => str.split('').reverse().join('');

//! Task 3

/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

// Imperative
//! Подсмотрел в интернете 

function factorialize(num) {
  if (num === 1) return 1
  else { 
    return num * factorialize(num - 1);
  }
}

// Declarative

const factorialize2 = num => num != 1 ? num * factorialize2(num - 1) : 1;

//! Task 4

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// Imperative

function findLongestWordLength(str) {
  let arrWords = str.split(' ');
  let max = 0, i, len = arrWords.length;

  for(i = 0; i < len; i += 1) {
    if(arrWords[i].length > max) {
      max = arrWords[i].length
    }
  }
  return max;
}

// Declarative

const findLongestWordLength2 = str => Number(str.split(' ').map(s => s.length).sort().slice(-1))

//! Task 5

/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// Imperative

function largestOfFour(arr) {
  let maxArr = [];
  arr.forEach(elem => {
    let max = 0;
    elem.forEach(num => {
      if(num > max) {
        max = num;
      }
      return max;
    })
    return maxArr.push(max);
  });
  return maxArr;
}

// Declarative

const largestOfFour2 = arr => arr.map(subArr => Math.max(...subArr))

//! Task 6

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// Imperative

function confirmEnding(str, target) {
  let len = target.length;
  let ends = str.slice(-len)
  if(ends === target) {
    return true
  } else {
    return false
  }
}

// Declarative

const confirmEnding2 = (str, target) => str.endsWith(target)

//! Task 7

/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method
*/

// Imperative

function repeatStringNumTimes(str, num) {
  if(num > 0) {
    let strOut = "", i;
  for(i = 0; i < num; i += 1) {
    strOut += str;
  }
  return strOut
  } else {
    return ""
  }
}

// Declarative

const repeatStringNumTimes2 = (str, num) => num > 0 ? str.repeat(num) : "";

//! Task 8

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

// Imperative

function truncateString(str, num) {
  let word = '', i;
  for(i = 0; i < num; i += 1) {
    word += str[i];
  }
  return word + "...";
}

// Declarative

const truncateString2 = (str, num) => str.slice(0, num).concat("...");

//! Task 9

/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

// Imperative

function findElement(arr, func) {
  let num = 0, i;
  
  for(i = 0; i < arr.length; i += 1) {
    if(func(arr[i]) === true) {
      num = arr[i];
      break
    } else {
      return undefined
    }
  }
  return num;
}

// Declarative

const findElement2 = (arr, func) => arr.find(elem => func(elem))

//! Task 10

/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

// Imperative

function booWho(bool) {
  if(typeof(bool) === 'boolean') {
    return true 
  } else {
    return false
  }
}

// Declarative

const booWho2 = (bool) => typeof(bool) === 'boolean' ? true : false;

//! Task 11

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

// Imperative

function titleCase(str) {
  let arr = str.split(" ")
  arr = arr.map(elem => elem.toLowerCase())
  arr = arr.map(elem => elem[0].toUpperCase() + elem.slice(1))
  str = arr.join(" ")
  console.log(str)
  return str
}

// Declarative

const titleCase2 = str => str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' ')

//! Task 12

/*
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

// Imperative

function frankenSplice(arr1, arr2, n) {
  let finalArr = [...arr2];
  finalArr.splice(n, 0, ...arr1);
  return finalArr;
}

// Declarative

//! Task 13

/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

// Imperative

function bouncer(arr) {
  let newArr = [];
  arr.forEach(el => {
    if(Boolean(el)) {
      newArr.push(el)
    }
  })
  return newArr;
}

// Declarative

const bouncer2 = arr => arr.filter(el => Boolean(el))

//! Task 14

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

// Imperative

function getIndexToIns(arr, num) {
  let newArr = [...arr]
  newArr.push(num)
  newArr.sort(function(a, b) {
    return a - b;
  });
  return newArr.indexOf(num)
}

// Declarative

//! Task 15

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

// Imperative

function mutation(arr) {

}

console.log(mutation(["hello", "hey"]))

// Declarative
