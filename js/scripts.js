$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var description = $("input#description").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    $(".time").text(time);

    $("#confirmation").show();
    $("#form-for-app").hide();
    event.preventDefault();
  });
});
