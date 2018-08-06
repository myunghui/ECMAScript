"use strict"

const data =
[
  {kor:"산",eng:"mountain"},
  {kor:"바다",eng:"sea"},
  {kor:"하늘",eng:"sky"}
];

window.rowTotal = 0;
const template = document.getElementById("templateID");
const showNode = document.querySelector("tbody");

for (var k = 0; k < data.length; k++) {
  const fragment = template.content.cloneNode(true);
  const cells = fragment.querySelectorAll("td");
  cells[0].textContent = data[k].kor;
  cells[1].textContent = data[k].eng;
}

//showNode.app
