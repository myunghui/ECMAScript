"use strict";

let one, two, three, four, spd;

[one, two, [three, four]] = [1,2,[100, 200]];
console.log([one,two,three,four]);

[one, two, three, four] = [1,2,3,4];

console.log([one,four]);

[one, ...spd] = [1,2,3,4];

console.log([one,two,three,four]);

