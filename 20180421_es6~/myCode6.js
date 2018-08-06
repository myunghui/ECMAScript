"use strict";

let arrObj = [];
let result = arrObj[Symbol.iterator];
console.log(result);

let objectObj = {};
result = objectObj[Symbol.iterator];
console.log(result);

arrObj = [1, 2];
let it = arrObj[Symbol.iterator]();
console.log(typeof it);
console.log(it.next());
console.log(it.next());
console.log(it.next());

