function validator() {
  numArray = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
  let newNumber = [];
  for (let i = 1; i <= numArray.length - 1; i +=2) {
   newNumber.push(numArray[i] * 2);
  }
  return newNumber;
};
