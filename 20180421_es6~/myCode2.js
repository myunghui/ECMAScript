"use strict";
debugger;
let music = "재즈";
let sports = "축구";

function get() {

	let music = "클래식";
	console.log("음악", music);
	console.log("스포츠", sports);	// closer
	console.log("this:", this.music);	// window가 this가 되면서 변수 참조 안됨. var키워드 였다면 참조가능.

}
window.get();
get();	// this에 해당하는 오브젝트가 undefined. 마지막줄 에러 발생


try{
	let spr = "농구";
	console.log(spr);
}catch(e){
}

switch(cnt) {
	case 1:
		let mus;
		break;
	case 2:
		let mus;
		break;
	default:
		console.log(spr);
}



function(){

	console.log(spr);
	var spr = "스포츠";
	console.log(spr);
	let mus = "음악";

};

