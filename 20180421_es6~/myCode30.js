"use strict"

console.log("==============================");

class Sports {
  constructor(member) {
    this.member = member;
  }
  setItem(item) {
    this.item = item;
  }
}

class Soccer extends Sports {

  constructor(member) {
    super(member);
  }
  
  setGround(ground) {
    this.ground = ground;
  }
  setItemSub(item) {
    super.setItem(item);
  }
}

const obj = new Soccer(11);
obj.setItem("축구")
obj.setGround("상암")

console.log(obj.member);
console.log(obj.item);
console.log(obj.ground);

obj.setItemSub("부산");
console.log(obj.item);

console.log("==============================");
