"use strict"

// Number.EPSILON


const total = 0.1 + 0.2;
console.log("0.1 + 0.2 : ", total);
console.log("total===0.3 : ", total===0.3);
console.log("EPSILON USE : ", total-0.3 < Number.EPSILON);

const val = (Math.pow(10,1) * 0.1) + (Math.pow(10,1) * 0.2);
console.log("연산 보완 : ", val);
