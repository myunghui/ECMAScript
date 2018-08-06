"use strict"

function args(){
  return Array.from(arguments);
}

const arrayObj = args(1, 2, 3);
console.log(arrayObj);

const nodes = document.querySelectorAll("li");
Array.from(nodes).forEach((node)=>{console.log(node);});

/*
const one = Array.prototype.copyWithin.call(
  {0:"영", 1:"일", 2:"이", 3:"삼"}, 0, 01
);
*/
const vals = [10, 20, 30];
const it = vals.entries();
console.log(it);
for (const [key,value] of it) {
  console.log(key, ":", value);
};

const it2 = vals.keys();
for (const keys of it2) {
  console.log(keys);
};

const it3 = vals.values();
for (const keys of it3) {
  console.log(values);
};
