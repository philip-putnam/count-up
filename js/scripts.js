$(document).ready(function() {
  $("#count-up form").submit(function(event) {
    var userCountTo = parseInt($("input#count-to").val());
    var userCountBy = parseInt($("input#count-by").val());

    for (var index = 0; index <= userCountTo; index += userCountBy) {
      $(".results").append(index + " ");
    }




    // var usrResults = [];
    // usrResults.push(index);

    event.preventDefault();

  });
});
