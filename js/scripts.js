$(function() {
  $("h4").click(function(event) {
    console.log(event);
    $("p").toggle();
  });
});
