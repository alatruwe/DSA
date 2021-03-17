// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
// => O(1) constant

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
// => O(n) linear

// What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// => O(1), constant. only 1 mathematical operation no matter what

// What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
  // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    // loop through arr 2
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// => O(n^2), polynomial, it's a nested loop, there's 2 level of looping

// What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// O(n), linear, goes through whole array

// What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
// => O(n) linear, goes through whole array

// What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // loop again
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
// => O(n^2), polynomial, it's a nested loop, there's 2 level of looping

// What does the following algorithm do? What is its runtime complexity? Explain your answer
function compute(num) {
  let result = [];
  //loop
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      // add to array
      result.push(0);
    } else if (i === 2) {
      // add to array
      result.push(1);
    } else {
      // add to array
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
// => O(n) linear, goes through whole array

// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];
    // because the array is sorted
    if (currentElement < item) {
      // cut in half
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      // cut in half
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}
// => O(log(n)). logarithmic.

// What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// => O(1), constant

// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
  // check if n is less than 2 or if n is greater than 1
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // loop through 2 to n
  for (let i = 2; i < n; ++i) {
    // check if n is divisible
    if (n % i === 0) return false;
  }
  return true;
}
// => O(n), linear?
