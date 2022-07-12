function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  var test = str.split('').reverse().join('');
  return test
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
