"use strict";

const sprorts = "축구";
try{
	sprorts = "농구";
}catch(e){
	console.log(e);
}

const obj = {lang:"ko"};
try{
	obj = {};
}catch(e){
	console.log(e);
}

obj.lang = "eng";
console.log(obj.lang);




