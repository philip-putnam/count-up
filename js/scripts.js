$(document).ready(function() {
  $("#count-up form").submit(function(event) {
    $(".results").text(" ");
    var userCountTo = parseInt($("input#count-to").val());
    var userCountBy = parseInt($("input#count-by").val());

    if (!userCountTo) {
      alert("Please enter a number to count to!")
    }
    else if (!userCountBy || userCountBy < 0 || userCountBy > userCountTo) {
      alert("Please enter a non-negative number that is smaller than what you want to count to!")
    }
    else {
      for (var index = 0; index <= userCountTo; index += userCountBy) {
        $(".results").append(index + " ");
      }
    }



    event.preventDefault();

  });
});
