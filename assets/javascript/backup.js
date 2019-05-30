$(document).ready(function(){

    var wins = 0;
    var losses =0;
    
    $("#wins").text(wins);
    $("#losses").text(losses);

    
    var totalDollarAmount = Math.floor((Math.random() * (+120 - +19) + +19));
    
    $("#total-dollar-amount").text(totalDollarAmount);
    
    var totalDollarsSpent = 0;
    
    $("#total-dollars-spent").text(totalDollarsSpent);
    
    
    function reset() {
      totalDollarAmount = Math.floor((Math.random() * (+120 - +19) + +19));
      $("#total-dollar-amount").text(totalDollarAmount);
      totalDollarsSpent = 0;
      $("#total-dollars-spent").text(totalDollarsSpent);
    };
    
    
    var oil = 1;
    var shampoo = Math.floor((Math.random() * (+12 - +2) + +2));
    var conditioner = Math.floor((Math.random() * (+12 - +2) + +2));
    var comb = Math.floor((Math.random() * (+12 - +2) + +2));

    // set data value = important
    $("#oil").attr("data-value", oil);


    
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
          alert("Your beard looks good! Save some of that money for rent.");
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