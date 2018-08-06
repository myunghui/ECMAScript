"use strict"

console.log("==============================");

debugger;

function check(param) {
  return new Promise(function(resolve, reject){
    if (param === "ok") {
      resolve(param);
      console.log("resolve");
    } else {
      reject(param);
    }
  })
}

check("ok").then(
  function(param){console.log("성공", param)},
  function(param){console.log("실패", param)}
);

console.log("끝");
console.log("==============================");
