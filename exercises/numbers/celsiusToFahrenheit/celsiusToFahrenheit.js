/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  temp=temp+32;
  return temp;   //I don't know why return to boolean
}

if (require.main === module) {
  console.log(celsiusToFahrenheit(3));

  // Your sanity checks go here.
}

module.exports = celsiusToFahrenheit;
