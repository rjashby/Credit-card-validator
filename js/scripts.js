// UTILITY FUNCTIONS

function numToArray(number) {
  let myArray = Array.from(String(number), Number);
  console.log(typeof myArray[0]);
  return myArray;
}

function arrReducer(numberArray) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return numberArray.reduce(reducer);
}

function checkLastDigit(number) {
  let numCheck = number % 10;
  if (numCheck === 0) {
    return "Valid Card Number"
  } 
    return "Invalid Card Number"
}

// FOR EACH LOOP METHOD

function validator() {
  const numArray = [1, 2, 3, 5, 5, 3, 2, 1, 1, 2, 3, 5, 5, 3, 2, 1]
  let newArray = [];
  numArray.forEach(function(number, i){
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
