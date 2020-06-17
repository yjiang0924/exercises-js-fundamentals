/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */


function allPositive(numbers){
  for (let i = 0; i< numbers.length; i++){
    if (numbers[i]<=0){
      return false;
    }
  }
  return true;
}

if (require.main === module) {
  console.log(allPositive([1, 2, -3, 4, 5]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = allPositive;
