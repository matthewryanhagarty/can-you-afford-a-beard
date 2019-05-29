$(document).ready(function(){

    var wins = 0;
    var losses =0;
    
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    var minAmountNumber = 19;
    var maxAmountNumber = 120;
    var minSpentNumber = 2;
    var maxSpentNumber = 12;
    
    var totalDollarAmount = Math.floor((Math.random() * (+maxAmountNumber - +minAmountNumber) + +minAmountNumber));
    
    $("#total-dollar-amount").text(totalDollarAmount);
    
    var totalDollarsSpent = 0;
    
    $("#total-dollars-spent").text(totalDollarsSpent);
    
    
    function reset() {
      totalDollarAmount = "";
      totalDollarsSpent = 0;
    };
    
    
    
    var imageNumber1= 1;
    var imageNumber2= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
    var imageNumber3= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));
    var imageNumber4= Math.floor((Math.random() * (+maxSpentNumber - +minSpentNumber) + +minSpentNumber));

    // set data value
    $("#oil").attr("data-value", imageNumber1);


    // for (var i = 0; i < numberOptions.length; i++) {

    // }
    
    var oil = imageNumber1;
    var shampoo = imageNumber2;
    var conditioner = imageNumber3;
    var comb = imageNumber4;
    
    
    
    $("#oil").on("click", function() {
    // var imageValue = $(this).attr("data-value");

      var imageValue = oil;
      imageValue = parseInt(imageValue);
      totalDollarsSpent += imageValue;
      $("#total-dollars-spent").text(totalDollarsSpent);
    
      if (totalDollarsSpent === totalDollarAmount) {
        wins++;
        $("#wins").text(wins);
        reset();
      } else if
        (totalDollarsSpent >= totalDollarAmount) {
          alert("DUDE, save some of that cash money for rent.");
          losses++;
          $("#losses").text(losses);
          reset();
      }
    });
    
    $("#shampoo").on("click", function() {
      var imageValue = shampoo;
      imageValue = parseInt(imageValue);
      totalDollarsSpent += imageValue;
      $("#total-dollars-spent").text(totalDollarsSpent);
    
      if (totalDollarsSpent === totalDollarAmount) {
        wins++;
        $("#wins").text(wins);
        reset();
      } else if
        (totalDollarsSpent >= totalDollarAmount) {
          alert("DUDE, save some of that cash money for rent.");
          losses++;
          $("#losses").text(losses);
          reset();
      }
    });
    
    $("#conditioner").on("click", function() {
      
      var imageValue = conditioner;
      imageValue = parseInt(imageValue);
      totalDollarsSpent += imageValue;
      $("#total-dollars-spent").text(totalDollarsSpent);
    
      if (totalDollarsSpent === totalDollarAmount) {
        wins++;
        $("#wins").text(wins);
        reset();
      } else if
        (totalDollarsSpent >= totalDollarAmount) {
          alert("DUDE, save some of that cash money for rent.");
          losses++;
          $("#losses").text(losses);
          reset();
      }
    });
    
    $("#comb").on("click", function() {
      var imageValue = comb;
      imageValue = parseInt(imageValue);
      totalDollarsSpent += imageValue;
      $("#total-dollars-spent").text(totalDollarsSpent);
    
      if (totalDollarsSpent === totalDollarAmount) {
        wins++;
        $("#wins").text(wins);
        reset();
      } else if
        (totalDollarsSpent >= totalDollarAmount) {
          alert("DUDE, save some of that cash money for rent.");
          losses++;
          $("#losses").text(losses);
          reset();
      }
    });
    
    
    
    
    });