/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
number=0;
function countEvens(array) {
  for (let i=0; i<=array.length; i++){
    if (array[i]%2 == 0){
    number=number+1;
    }
  }
  return number;
}

if (require.main === module) {
  console.log(countEvens([1, 2, 3, 4, 5]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countEvens;
