// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
  if (age > 18) {
    return true;
  };
  return false;
};

console.log(checkAge(22));

// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
   if (a < b) {
     return a;
   };
   return b;
  };

console.log(min(3, -1));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {
    let result = 1;
    for (i = 0; i < n; i++) {
      result *= x;
    };
    return result;
  };

console.log(pow(3, 3));