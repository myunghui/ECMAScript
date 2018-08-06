"use strict"

const host = document.getElementById("show");
const root = host.createShadowRoot();
const template = document.getElementById("templateID");
const fragment = template.content.cloneNode(true);
root.appendChild(fragment);
