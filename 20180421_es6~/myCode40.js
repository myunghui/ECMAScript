"use strict"

console.log("==============================");

debugger;

const target = {"food":"밥"};
const middle = new Proxy(
  target,
  {
  get(target, key) {
    return target[key] + ",수저";
  }
});

const left = middle.food;

console.log(left);

console.log("==============================");
