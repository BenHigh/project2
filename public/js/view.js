 var config = {
    apiKey: "AIzaSyD72cNEsQjRTR9unRqNr-_uSWTKqaeKu14",
    authDomain: "database2-e81ae.firebaseapp.com",
    databaseURL: "https://database2-e81ae.firebaseio.com",
    projectId: "database2-e81ae",
    storageBucket: "database2-e81ae.appspot.com",
    messagingSenderId: "683163680301"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var email = $("#email").val().trim();
  var comment = $("#comment").val().trim();
  
  var newContact = {
    email: email,
    comment: comment
  };

  database.ref().push(newContact);

  alert("Message submitted successfully");

  $("#email").val("");
  $("#comment").val("");
});
