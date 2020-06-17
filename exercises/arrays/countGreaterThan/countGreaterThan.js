/**
 * Given an array of numbers and a threshold number, return the count of
 * elements in the array strictly greater than the threshold number.
 *
 * "Strictly greater than" means we want numbers greater than (>) and not
 * greater than or equal to (>=).
 *
 * @example
 * countGreaterThan([1, 2, 3, 4, 5], 2); // => 3
 * countGreaterThan([1, 2, 3, 4, 5], 17); // => 0
 * countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 5
 * countGreaterThan([10, 10, 10, -10, 15], 10); // => 1
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for counting
 * @returns {number} The number of elements in the array greater than threshold
 */
number=0;
function countGreaterThan(array, threshold) {
  for (let i=0; i<=array.length; i++){
    if(array[i]>threshold){
      number=number+1;
    }


  }
  return number;
}

if (require.main === module) {
  console.log(countGreaterThan([1, 2, 3, 4, 5], 2));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countGreaterThan;
