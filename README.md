TESTS

Describe: validator()

Test: "It should take in a 16 digit number and return a number where every other digit is doubled."
Code:
const number = "1234 4321 1234 4321"
validator(number)
Expected Output: "48 62 48 62"

Test: "It should take in a 16 digit number in an array, returning the original number for odd indices, and doubling every number at even indices."
Code:
const number = [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
validator(number)
Expected Output: [1, 4, 3, 8, 4, 6, 2, 2, 1, 4, 3, 8, 4, 6, 2, 2]