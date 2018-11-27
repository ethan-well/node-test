const Hello = require('./hello');
const { Hi } = require('./hello');

const hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();

const hi = new Hi();
hi.sayHi();