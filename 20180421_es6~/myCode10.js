"use strict";

let one, two, five, plus;
fuction total({one, two, five=5}) {
	console.log(one + two + five);
}
//total();

// 키값 동일하게 정의시
const sameKey = {key:1, key:2};

// ES5 strict모드에선 에러
// ES6 strict모드 무관하게 에러 발생 않음
//     뒤에 작성한 프로퍼티 값로 대체

console.log(sameKey);


const oneN = 1, twoN = 2;
const vals = {one, two};

console.log(vals);

const obj = {
	getTotal(param){
		return param + 123;
	}
};

// ES5 형태
getTotal:function(param){
		return param + 123;
	}
;


var obj = {};
Object.defineProperty(obj, "book", {get:function(){return "책";});
console.log(obj.book);
Object.defineProperty(obj, "item", {set:function(param){this.book=param;});
obj.book = "도서;
console.log(obj.book);
