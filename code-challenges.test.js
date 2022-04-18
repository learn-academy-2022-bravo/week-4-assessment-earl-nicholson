// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe('newArray', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    expect(newArray(colors1)).toEqual(expect.arrayContaining(colors1));
    expect(newArray(colors2)).toEqual(expect.arrayContaining(colors2));
  });
});

// ● newArray › takes in an array, removes the first item from the array and shuffles the remaining content
//
//    ReferenceError: newArray is not defined

//const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
//const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.
// create a function
// use shift to remove the first item in an array
// use sort to shuffle the array after removing the first item
// look up different ways to use sort to shuffle the array

const newArray = (array) => {
  array.shift()
  array.sort((a, b) => 0.6 - Math.random())
  return array
}

// PASS  ./code-challenges.test.js
//  newArray
//    ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.325 s, estimated 1 s

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe('minMax', () => {
  const nums1 = [3, 56, 90, -8, 0, 23, 6]
  const nums2 = [109, 5, 9, 67, 8, 24]
  it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
    expect(minMax(nums1)).toEqual([-8, 90]);
    expect(minMax(nums2)).toEqual([5, 109]);
  });
});

// ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//
//     ReferenceError: minMax is not defined


//const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
//const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


//b) Create the function that makes the test pass.

// create a funstion called minMax
// make an empty array
// use .push to push the min and max into the empty array
// use Math.min and Math.max to get the max and min
// using both methods at the same time didnt work, to fix i seperated them and did two pushes first min and then max


const minMax = (array) => {
  let newArray = []
  newArray.push(Math.min(...array))
  newArray.push(Math.max(...array))
  return newArray
}

// PASS  ./code-challenges.test.js
//   newArray
//     ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
//   minMax
//     ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.239 s, estimated 1 s


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('removeD', () => {
  const testArray1 = [3, 7, 10, 5, 4, 3, 3]
  const testArray2 = [7, 8, 2, 3, 1, 5, 4]
  it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
    expect(removeD(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
  });
});

// ● removeD › takes in two arrays as arguments and returns one array with no duplicate values
//
//    ReferenceError: removeD is not defined

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

// create a funstion called removeD
// use the spread operator to combine the two arrays
// use new Set method to remove duplicates

const removeD = (array1, array2) => {
  array1 = [...new Set([...array1, ...array2])]
  return array1
}


// PASS  ./code-challenges.test.js
//  newArray
//    ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
//  minMax
//    ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
//  removeD
//    ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.329 s, estimated 1 s
