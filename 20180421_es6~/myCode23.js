"use strict"

console.log(`123\n456가나다라`);
console.log(`${1+99}`);


const one = 1, two = 2;

function eachOne(text, value) {

  console.log("1:" + text[0]);
  console.log("2:" + value);
  console.log("3:" + text[1]);

}

eachOne `1+2=${one + two}`;
