//  var config = {
//     apiKey: "AIzaSyD72cNEsQjRTR9unRqNr-_uSWTKqaeKu14",
//     authDomain: "database2-e81ae.firebaseapp.com",
//     databaseURL: "https://database2-e81ae.firebaseio.com",
//     projectId: "database2-e81ae",
//     storageBucket: "database2-e81ae.appspot.com",
//     messagingSenderId: "683163680301"
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  console.log('working');

  var email = $("#email").val().trim();
  var comment = $("#comment").val().trim();

  var newContact = {
    email: email,
    comment: comment
  };

  $.post("/api/contact", newContact)
    // On success, run the following code
    .done(function() {

      
  

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");
  $("#comment").val("");
});

  // database.ref().push(newContact);
console.log(newContact);
  alert("Message submitted successfully");

  $("#email").val("");
  $("#comment").val("");
});
