"use strict"



console.log("==============================");

class Member {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  get getName2() {
    return this.name + "******";
  }

  set setName(name) {
    return this.name = name;
  }

}

const memberObj = new Member("스포츠");

console.log(memberObj.getName());


memberObj.setName = "축구";

const result = memberObj.getName();

console.log(result);

console.log(memberObj.getName2);


console.log("==============================");
