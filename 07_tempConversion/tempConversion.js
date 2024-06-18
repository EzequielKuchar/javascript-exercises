const convertToCelsius = function(fahrDegree) {
  return (fahrDegree -32) * 5/9)
};

const convertToFahrenheit = function(celDegree) {
  return (celDegree * 9/5 + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
