// Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
CountingSheep = (input) => {
  // base case
  if (input === 0) return console.log("All sheep jumped over the fence");
  // general case
  else console.log(input + ": Another sheep jumps over the fence");
  CountingSheep(input - 1);
};

//CountingSheep(4);

// Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
powerCalculator = (base, exponent) => {
  if (exponent < 0) return "exponent should be >= 0";
  if (exponent === 1) return base;
  else {
    return base * powerCalculator(base, exponent - 1);
  }
};

//console.log(powerCalculator(10, 3));

// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
reverseString = (string) => {
  if (string === "") return "";
  else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
};

//console.log(reverseString("hello"));

// nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
//number = sum of numbers from 1 to n
triangularNumber = (n) => {
  if (n === 0) return n;
  return n + triangularNumber(n - 1);
};

//console.log(triangularNumber(6));
