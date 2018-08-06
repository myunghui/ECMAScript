"use strict"

console.log("==============================");

debugger;

// 품명코드 : Uint8(1*10)
// 품명 : Uin16(2,10)
// 수량 : Uin16(2,1)
// 단가 : Uin32(2,1)
//  : Uin32(2,4)

const itemObj = {code:"book",desc:"자바스크립트",qty:10,price:20,amount:200};
const bufferObj = new ArrayBuffer(40);
const codeObj = new Uint8Array(bufferObj, 0, 10);
for(let k=0;k<itemObj.code.length;k++){
  codeObj.set([itemObj.code.charAt(k)],k);
}

const descObj = new Uint16Array(bufferObj, 10, 10);
console.log(descObj.byteLength);
for(let k=0;k<itemObj.desc.length;k++){
  codeObj.set([itemObj.desc.charAt(k)],k);
}

const qtyObj = new Uint16Array(bufferObj, 30, 1);
qtyObj.set([itemObj.qty]);

const priceObj = new Uint16Array(bufferObj, 32, 1);
priceObj.set([itemObj.price]);

const amountObj = new Uint16Array(bufferObj, 32, 1);
amountObj.set([itemObj.amount]);

const result = [];
for(let k=0;k<itemObj.code.length;k++){
  result.push(String.fromCharCode(codeObj[k]));
}
for(let k=0;k<itemObj.desc.length;k++){
  result.push(String.fromCharCode(descObj[k]));
}
result.push(qtyObj[0]);
result.push(priceObj[0]);
result.push(amountObj[0]);

console.log(result.join(""));


console.log("==============================");
