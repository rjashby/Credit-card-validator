// FOR EACH LOOP

function validator2() {
  const numArray = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
  let newNumber = [];
  numArray.forEach(function(number, i){
    if ((i) % 2 === 1) {
      newNumber.push(number * 2);
    } else if ((i) % 2 === 0) {
      newNumber.push(number);
    }
  })
  return newNumber;
}

// TESTING AREA

function validator2() {
  const numArray = [1, 2, 3, 5, 5, 3, 2, 1, 1, 2, 3, 5, 5, 3, 2, 1]
  let newArray = [];
  numArray.forEach(function(number, i){
    if ((i) % 2 === 1) {
      if ((number * 2).length === 2) {
        let splitNumber = number[i].toString().split("");
        let newNumber = parseInt(splitNumber[0]) + parseInt(splitNumber[1]);
        console.log(newNumber);
        newArray.push(newNumber);
      } else {
        newArray.push(number);
      }
    } else if ((i) % 2 === 0) {
      newArray.push(number);
    }
  })
  console.log(newNumber);
  return newArray;
}

// USING FOR LOOP - BUGGED

// function validator() {
//   const numArray = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
//   let newNumber = [];
//   for (let i = 1; i <= numArray.length - 1; i +=2) {
//    newNumber.push(numArray[i] * 2);
//   }
//   return newNumber;
// };