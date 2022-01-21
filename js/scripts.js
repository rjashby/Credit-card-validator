// SAMPLE CARD NUMBERS

let AMEX = [3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let AMEX2 = [3, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let notAMEX = [3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let VISA = [4, 4, 5, 6, 4, 4, 5, 6, 4, 4, 5, 6, 4, 4, 5, 6];
let MASTER = [5, 5, 6, 5, 5, 5, 6, 5, 5, 5, 6, 5, 5, 5, 6, 5];
let DISCOVER = [6, 7, 8, 9, 6, 7, 8, 9, 6, 7, 8, 9, 6, 7, 8, 9];

// UTILITY FUNCTIONS

function numToArray(number) { //  CHANGES DIGITS IN A ROW INTO AN ARRAY
  let myArray = Array.from(String(number), Number);
  console.log(typeof myArray[0]);
  return myArray;
}


function arrReducer(numberArray) { // ADDS ALL DIGITS IN ARRAY AND RETURNS SUM
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return numberArray.reduce(reducer);
}

function checkLastDigit(number) { // CHECKS TO SEE IF LAST DIGIT IS A 0 OR NOT
  let numCheck = number % 10;
  if (numCheck === 0) {
    return "Valid Card Number"
  } 
    return "Invalid Card Number"
}

// CHECK CREDIT COMPANY AND VALID CARD USING SPLICE - BUGGED

function checkCompany(numberArray) {
  if (numberArray.length = 16) {
    console.log(numberArray.length);
    let spliceSixteen = numberArray.splice(0, 1)
    let spliceFifteen = numberArray.splice(0, 2)
    // console.log(spliceSixteen);
    // console.log(spliceFifteen);
    if (spliceSixteen === 4) {
      console.log(spliceSixteen);
      return "You have a valid Visa Card."
    } else if (spliceSixteen === 5) {
      return "You have a valid Mastercard."
    } else if (spliceSixteen === 6) {
      return "You have a valid Discover Card."
    } else {
      return "Invalid Card Number."
    }
  } else if (numberArray.length = 15) {
    if (spliceFifteen === 34 || spliceFifteen === 37) {
      return "You have a valid American Express Card."
    }
  } else {
    return "Invalid Card Number."
  }
}

// SLICE METHOD ON CHECK COMPANY

function checkCompany(numberArray) {
  if (numberArray.length = 16) {
    console.log(numberArray.length);
    let sliceSixteen = numberArray.slice(0, 1);
    let sliceFifteen = numberArray.slice(0, 2);
    console.log(sliceSixteen);
    console.log(sliceFifteen);
    if (sliceSixteen === 4) {
      console.log(sliceSixteen);
      return "You have a valid Visa Card."
    } else if (sliceSixteen === 5) {
      return "You have a valid Mastercard."
    } else if (sliceSixteen === 6) {
      return "You have a valid Discover Card."
    } else {
      return "Invalid Card Number."
    }
  } else if (numberArray.length = 15) {
    if (sliceFifteen === 34 || sliceFifteen === 37) {
      return "You have a valid American Express Card."
    }
  } else {
    return "Invalid Card Number."
  }
}

// SLICE ATTEMPT 2

function checkCompany(numberArray) {
  let sliceSixteen = numberArray.slice(0, 1);
  let sliceFifteen = numberArray.slice(0, 2);
  console.log(numberArray.length);
  console.log(sliceSixteen);
  console.log(sliceFifteen);
  let result = ""
  if (numberArray.length = 16 && sliceSixteen === 4) {
    console.log(numberArray.length);
    console.log(sliceSixteen);
    console.log(sliceFifteen);
    result = "You have a valid Visa Card."
  } else if (numberArray.length = 16 && sliceSixteen === 5) {
    result = "You have a valid Mastercard."
  } else if (numberArray.length = 16 && sliceSixteen === 6) {
    result = "You have a valid Discover Card."
  } else if ((numberArray.length = 15 && sliceFifteen === 34) || (numberArray.length = 15 && sliceFifteen === 37)) {
    result = "You have a valid American Express Card."
  } else {
    result = "Invalid Card Number."
  }
  return result;
}

// FOR EACH LOOP METHOD

function validator() {
  const numArray = [1, 2, 3, 5, 5, 3, 2, 1, 1, 2, 3, 5, 5, 3, 2, 1]
  let newArray = [];
  numArray.forEach(function(number, i) {
    if ((i % 2) === 1) {
      console.log("string length check", (number * 2).length === 2);
      console.log((number * 2));
      console.log(typeof number);
      let newString = (number * 2).toString().split("");
      if (newString.length === 2) {
        let newNumber = parseInt(newString[0]) + parseInt(newString[1]);
        newArray.push(newNumber);
      } else {
        newArray.push(number * 2);
      }
    } else if ((i % 2) === 0) {
      newArray.push(number);
    }
  })
  return newArray;
}
// INITIAL FUNCTION - NOT ACCOUNTING FOR DOUBLE DIGIT NUMBERS

function validator() {
  const numArray = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
  let newNumber = [];
  numArray.forEach(function(number, i){
    if (i % 2 === 1) {
      newNumber.push(number * 2);
    } else if (i % 2 === 0) {
      newNumber.push(number);
    }
  })
  return newNumber;
}
