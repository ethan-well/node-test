// var canadianDollar = 0.91;
// function roundTwoDecimals(amount) {
//   return Math.round(amount);
// }

// exports.canadianToUS = function(canadian) {
//   return roundTwoDecimals(canadian * canadianDollar);
// }

// exports.UsToCanadian = function(us) {
//   return roundTwoDecimals(us / canadianDollar);
// }

var Currency = function(canadianDollar) {
  this.canadianDollar = canadianDollar;
}

Currency.prototype.roundTwoDecimals = function(amount) {
  return Math.round(amount);
}

Currency.prototype.canadianToUS = function(canadian) {
  return this.roundTwoDecimals(canadian * this.canadianDollar);
}

Currency.prototype.UsToCanadian = function(us) {
  return this.roundTwoDecimals(us / this.canadianDollar);
}

module.exports = Currency

