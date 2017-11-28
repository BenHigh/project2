$("#createUser-btn").on("click", function(event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var username = $("#username").val().trim();
  var password = $("#password").val().trim();
  var summary = $("#summary").val().trim();

  var newUser = {
    name: name,
    email: email,
    username: username,
    password: password,
    summary: summary
  };

  $.post("/api/newUser", newUser)

    .done(function() {

      alert("Profile created successfully");

      $("#name").val("");
      $("#email").val("");
      $("#username").val("");
      $("#password").val("");
      $("#summary").val("");
    });

});
