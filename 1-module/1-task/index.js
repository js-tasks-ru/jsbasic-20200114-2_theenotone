/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n <= 1) 
  {
    return 1;
  } 
  else {
     let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}