"use strict"

const Sports = function(){this.count = 123;}

Sports.prototype.getCount = function(){return this.count;};

// 상속
const protoObj = Object.setPrototypeOf({}, Sports.prototype);

console.log(typeof protoObj.__proto__);

const result = protoObj.getCount();
console.log(result);
console.log(protoObj.getCount());

