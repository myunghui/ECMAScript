"use strict"

/*

let res = [1,2,3].find(
  fucntion(val, idx, all) {
    return val ==1 && value === this.kety;
  }
)
;
console.log(res);
*/

/*
function* sports(param1, param2){
  console.log("함수 블럭");
  yield one + two;
};
const genObj = sports(10, 20);
const result = genObj.next();
cosole.log(result);
*/

function* sports(one){
  const two = yield one;
  const param = yield two + one;
  yield param + one;
};

const genObj = sports(10);
let res = genObj.next();
console.log(res);
res = genObj.next();
console.log(res);
res = genObj.next(20);
console.log(res);


const gen = function*(value){
  value = value + 10;
  yield ++value;
  value = value + 7;
  yield ++value;
};

const genObj2 = gen(1);
let res2 = genObj2.next();
console.log(res2);
res = genObj2.next();
console.log(res2);
res = genObj2.next();
console.log(res2);
