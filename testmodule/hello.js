function Hello() {
  var name;
  this.setName = function(thyName) {
    name = thyName;
  };
  this.sayHello = function() {
    console.log('Hello ' + name);
  };
}

function Hi () {
  this.sayHi = function() {
    console.log('Hi');
  };
}

module.exports = Hello;
module.exports.Hi = Hi;