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


  $("#oil").attr("data-value", oil);
  $("#shampoo").attr("data-value", shampoo);
  $("#conditioner").attr("data-value", conditioner);
  $("#comb").attr("data-value", comb);

  
  $(".image").on("click", function() {
  var imageValue = $(this).attr("data-value");
    imageValue = parseInt(imageValue);
    totalDollarsSpent += imageValue;
    $("#total-dollars-spent").text(totalDollarsSpent);
  
    if (totalDollarsSpent === totalDollarAmount) {
      wins++;
      $("#wins").text(wins);
      reset();
    } else if
      (totalDollarsSpent >= totalDollarAmount) {
        alert("Your beard looks great, but you got to save some of that money for rent!");
        losses++;
        $("#losses").text(losses);
        reset();
    }
  });
  
  
  });