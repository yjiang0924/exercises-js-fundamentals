/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(number) {
  for (let i = 0; i< number.length; i++){
    if(number[i]<=0){
      return false;

    }


  }
  return true;

}

if (require.main === module) {
  console.log(anyPositive([10, 10, 10]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = anyPositive;
