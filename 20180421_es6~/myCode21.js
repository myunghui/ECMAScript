"use strict"

const Sports = function () {
  this.count = 123;
}

Sports.prototype.getCount = function() {return this.count;};

const protoObj = Object.setPrototypeOf({}, Sports.prototype);

console.log(typeof protoObj.__proto__);
const res = protoObj.getCount();
console.log(res);
