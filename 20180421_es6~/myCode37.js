"use strict"

console.log("==============================");

class ExtendArray extends Array {

  static get [Symbol.species]() {
    return Array;// Array의 생성자 반환
  }

}

const oneInstance = new  ExtendArray(1, 2, 3);

//  Array 반환
let twoInstance = oneInstance.slice(1, 2);

console.log(oneInstance instanceof ExtendArray);
console.log(twoInstance instanceof Array);
console.log(twoInstance instanceof ExtendArray);


const obj = {

  [Symbol.toPrimitive](hint){
    if (hint == "number") {
      return 30;
    }
    if (hint == "string") {
      return "문자열";
    }
    return "default";
  }
  
}


console.log(20 * obj);

console.log("==============================");
