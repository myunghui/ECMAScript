"use strict"

console.log("==============================");

const Sports = {

  getTitle() {
    console.log("스포츠");
  }

}
const Soccer = {

  getTitle() {
    super.getTitle(); // 상속구조 사용
    console.log("축구");
  }

}


Object.setPrototypeOf(Soccer, Sports)
Soccer.getTitle();

console.log("==============================");
