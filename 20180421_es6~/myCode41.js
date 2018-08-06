"use strict"

console.log("==============================");

debugger;

const json = JSON;
console.log(json);

try {
  const proxyObj = Proxy;
} catch(e){

}


const tgt = {};
const newProxy = new Proxy(tgt, {});
newProxy.sports = "축구";
console.log(newProxy);
console.log(tgt);

const tgt2 = {};
const musicProxy = new Proxy(tgt2, {
set(target, key, value, receiver) {
  console.log(tgt2);
  console.log(key + ":" + value);
  // Setter 로직 필요
  target[key] = value;

  return true;
}

});


musicProxy.music = "음악";
console.log(musicProxy.music);

console.log("==============================");
