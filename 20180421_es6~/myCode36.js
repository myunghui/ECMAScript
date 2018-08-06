"use strict"

console.log("==============================");

const sym = Symbol("123");
const obj = {[sym]:"456"};
console.log(obj);

let res = obj[sym];
console.log(res);



console.log("==============================");
