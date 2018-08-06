"use strict"

const data =
[
  {kor:"산",eng:"mountain"},
  {kor:"바다",eng:"sea"},
  {kor:"하늘",eng:"sky"}
];

const template = documents.querySelector("#row");

for (let k;k<data.length;k++){
  const fragment = template.content.cloneNode(true);
  const cells = fragment.querySelectAll("td");
  cells[0].textContent = data[k].kor;
  cells[1].textContent = data[k].eng;
};
