"use strict"

console.log("Hellow Node JS");

const fs = require("fs");
console.log("1");
fs.readFile("./test.txt", (err, data) => {
  console.log("2");
  if (err) throw err;
  console.log(data);
  console.log("3");
});

//fs.unlinkSync("./test.txt");

console.log("4");
