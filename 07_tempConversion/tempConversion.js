const convertToCelsius = function(fahrDegree) {
  return Math.round(((fahrDegree - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(celDegree) {
  return  Math.round(((9/5 * celDegree) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
