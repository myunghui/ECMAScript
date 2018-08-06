"use strict";

var node = doucument.querySelector("ul");
for(let k=0;k<node.children.length;k++;){
	var el = node.children[k];
	el.onclick = function(event){
		event.target.style.backgroudColor = "yellow";
		console.log(k);
	}
}




