const head = require("./head.js") ; 
const tail = require("./tail.js") ; 
const middle = require("./middle.js"); 
const assertArraysEqual = require("./assertArraysEqual"); 
const assertEqual=require("./assertEqual");
const eqArrays = require("./eqArrays");


module.exports={
  head: head,
  tail: tail,
  middle: middle
  assertArraysEqual, 
  assertEqual,
  eqArrays
};