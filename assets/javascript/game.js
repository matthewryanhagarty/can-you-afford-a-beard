$(document).ready(function(){

var wins = 0;
var losses =0;

var minAmountNumber = 19;
var maxAmountNumber = 120;
var minSpentNumber = 1;
var maxSpentNumber = 12;

var totalDollarAmount = Math.floor((Math.random() * (+maxAmountNumber - +minAmountNumber) + +minAmountNumber));

$("#total-dollar-amount").text(totalDollarAmount);

var totalDollarsSpent = 0;

$("#total-dollars-spent").text(totalDollarsSpent);

var imageNumber= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));

// console.log(totalDollarAmount);
// console.log(totalDollarsSpent);

// var num1 = "";
// var num2 = "";
// var num3 = "";
// var num4 = "";

// for (var i = 0; i < imageNumber.length; i++)
// var oil = $(this).attr("#oil", imageNumber);
var oil = "";
oil.attr("#oil", imageNumber);
oil.addClass("image");

console.log(oil);






// // randomly generated number to start the game ^

// var totalDollarsSpent = "";

// // this number will increase based on the user's click selections. it will be the sum of all the clicks ^







});