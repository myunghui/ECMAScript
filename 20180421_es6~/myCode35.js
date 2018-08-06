"use strict"

console.log("==============================");

class ExtendsImage extends Image{

  constructor() {
    super();
  }

  setProperty() {

    this.src = "Double-alaskan-rainbow.jpg";
    this.alt = "무지개가 있는 겨울 풍경";
    this.title = "무지개";

  }
}

const obj = new ExtendsImage();
obj.setProperty();

document.querySelector("body").appendChild(obj);




console.log("==============================");
