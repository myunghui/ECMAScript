"use strict"


const book = {item:{title:"자바스크립트"}};
const bookCopy = {};
Object.assign(bookCopy, book);
console.log(bookCopy.item.title);

bookCopy.item.title = "국어";

console.log("원본:" + book.item.title);
console.log("복제:" + bookCopy.item.title);

