"use strict";
/* 
var es5 = 
function(one, two){
	return one + tow;
};


let es6 = (one, tow) => { // 줄바꿈은 대괄호 뒤에서
	one + tow
}


let tot = (one, two) => one + two;
console.log(tot(1+2));

let  get = vla => val + 10;
let result = get(20);


let get () => 3 + 4;
let result = get(20);

let spo = () => {};	// undefined 반환

let get = param => ({sports:"축구"});
let res = get();

for (let key in res) {
	onsole.log(key + ":" + res.key);
}

let  get = (one, ...rest) => rest;
let res = get(1, 2, 3, 4);
console.log(res);

*/

let get = () => 123;
debugger;
get();

let sports = param => {
	try {
	
		let args = arguments;
	
	} catch(e) {
	
		console.log(e);
		
	}
}


fuction book() {

	let music = param => {
		const aa = arguments.length;
		for (var k=0; k<aa; k++){
			console.log(arguments[k]);
		}
		music();
	}
	
	
}



let Sports = function(){this.count = 20;};

Sports.prototype = {
	plus : function() {this.count += 1),
	get : function(){ 
		setTimeout(
			function(){
				console.log(this===window);
				console.log(this.plus);
			}, 1000)
	},
	arw : function(){
		setTimeout(
			() => {
				this.plus();
				console.log(this.count);
			}, 1000);
	}
}
;

let sportsObj = new Sports();
sportsObj.get();
sportsObj.arw();








