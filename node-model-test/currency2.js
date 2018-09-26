var canadianDollar = 0.91;
function roundTwoDecimals(amount) {
  return Math.round(amount);
}

exports.canadianToUS = function(canadian) {
  return roundTwoDecimals(canadian * canadianDollar);
}

exports.UsToCanadian = function(us) {
  return roundTwoDecimals(us / canadianDollar);
}


