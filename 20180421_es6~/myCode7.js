"use strict";

function get(...rest) {

	console.log(rest);
	console.log(Array.isArray(rest));

};

get(...[1,2,3]);

function get2(one, ...rest) {

	console.log(one);
	console.log(rest);
	
};

get2(...[1,2,3]);
