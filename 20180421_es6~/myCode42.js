"use strict"

console.log("==============================");

debugger;

const target = {event:"축구"};
const handler = {
  ground : "축구장",
  set(target, key, value, receiver) {
    console.log(this.ground);
    this.home = "서울";
    return true;
  }
};

const sportsProxy = new Proxy(target, handler);

sportsProxy.ground = "그라운드";
//sportsProxy.home = "홈";
console.log(sportsProxy.ground);
console.log(sportsProxy.home);

console.log("==============================");
