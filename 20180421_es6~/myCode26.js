"use strict"


const getAmount = function*(qty, price){
  const amount = Math.floor(qty * price);
  const discount = yield amount;
  yield amount - discount;
};

const getDiscount = function(amt) {
  return amt * (amt > 1000 ? 0.2 : 0.1);
};

const amountObj = getAmount(10, 60);
let result = amountObj.next();
console.log(result);
const dcAmount = getDiscount(result.value);
console.log(dcAmount);
result = amountObj.next(dcAmount);
console.log(result);

console.log("==============================");

function* gen(){
  yield* [10, 20];
};

const  genObj = gen();
result = genObj.next();
console.log(result);
result = genObj.next(77);
console.log(result);
