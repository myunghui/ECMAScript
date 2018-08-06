"use strict"


const sports = {event:"축구", player:11};
const dup = {};
Object.assign(dup, sports);
console.log(dup.player);

sports.player = 33;
console.log(dup.player);

sports.event = "수영";
console.log(dup.event);