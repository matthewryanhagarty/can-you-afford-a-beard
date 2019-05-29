$(document).ready(function(){

    var wins = 0;
    var losses =0;
    
    var minAmountNumber = 19;
    var maxAmountNumber = 120;
    var minSpentNumber = 1;
    var maxSpentNumber = 12;
    
    var totalDollarAmount = [Math.floor((Math.random() * (+maxAmountNumber - +minAmountNumber) + +minAmountNumber))];
    
    // for (var i = 0; i < totalDollarAmount.length - 1; i++) {
    //     var beardImage = $("<img>")
    // }

    $("#total-dollar-amount").text(totalDollarAmount);
    
    var totalDollarsSpent = 0;
    
    $("#total-dollars-spent").text(totalDollarsSpent);
    
    // var imageNumber1= 1;
    // var imageNumber2= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
    // var imageNumber3= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
    // var imageNumber4= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
    
    // console.log(totalDollarAmount);
    // console.log(totalDollarsSpent);
    
    // var oil = imageNumber1;
    // var shampoo = imageNumber2;
    // var conditioner = imageNumber3;
    // var comb = imageNumber4;
    
    // console.log(oil);
    // console.log(shampoo);
    // console.log(conditioner);
    // console.log(comb);
    
    $("#image").on("click", function() {
        alert("You Won!");
    //   var imageValue = oil;
    //   imageValue = parseInt(imageValue);
    //   totalDollarsSpent += imageValue;
    });
    
    
    
    
    
    
    // // randomly generated number to start the game ^
    
    // var totalDollarsSpent = "";
    
    // // this number will increase based on the user's click selections. it will be the sum of all the clicks ^
    
    
    
    
    
    
    
    });