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

var imageNumber1= 1;
var imageNumber2= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
var imageNumber3= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
var imageNumber4= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));

// console.log(totalDollarAmount);
// console.log(totalDollarsSpent);

var oil = imageNumber1;
var shampoo = imageNumber2;
var conditioner = imageNumber3;
var comb = imageNumber4;

// console.log(oil);
// console.log(shampoo);
// console.log(conditioner);
// console.log(comb);

$("#oil").on("click", function() {
  var imageValue = oil;
  imageValue = parseInt(imageValue);
  totalDollarsSpent += imageValue;
  $("#total-dollars-spent").text(totalDollarsSpent);
});

$("#shampoo").on("click", function() {
  var imageValue = shampoo;
  imageValue = parseInt(imageValue);
  totalDollarsSpent += imageValue;
  $("#total-dollars-spent").text(totalDollarsSpent);
});

$("#conditioner").on("click", function() {
  var imageValue = conditioner;
  imageValue = parseInt(imageValue);
  totalDollarsSpent += imageValue;
  $("#total-dollars-spent").text(totalDollarsSpent);
});

$("#comb").on("click", function() {
  var imageValue = comb;
  imageValue = parseInt(imageValue);
  totalDollarsSpent += imageValue;
  $("#total-dollars-spent").text(totalDollarsSpent);
});






// // randomly generated number to start the game ^

// var totalDollarsSpent = "";

// // this number will increase based on the user's click selections. it will be the sum of all the clicks ^







});