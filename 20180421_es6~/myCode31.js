"use strict"

console.log("==============================");


class ExtendArray extends Array {

  constructor() {
    super();
  }

  getTotal() {
    let total = 0;
    for (const value of this) {
      total += value;
    }
    return total;
  }

}

const obj = new ExtendArray();
obj.push(10, 20, 30);

const res = obj.getTotal();
console.log(res);

console.log("==============================");
