$( document ).ready(function() {
    console.log( "ready!" );
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJTEj33E5xunnlgknC1dCsT8ECvgCp3Ss",
    authDomain: "team9-be37f.firebaseapp.com",
    databaseURL: "https://team9-be37f.firebaseio.com",
    projectId: "team9-be37f",
    storageBucket: "team9-be37f.appspot.com",
    messagingSenderId: "735843198652"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var card = "";
var name = "";
var expiry = "";
var cvv = "";
var donation = "";

// Capture Button Click
$("#donate").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  card = $("#card-number").val().trim();
  name = $("#custName").val().trim();
  expiry = $("#expiry-date").val().trim();
  cvv = $("#cvv").val().trim();
  donation = $("#donation").val().trim();


  // Code for handling the push
  database.ref().push({
    card: card,
    custName: name,
    expiry: expiry,
    cvv: cvv,
    donation: donation,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();

  // Console.loging the last user's data
  console.log(sv.card);
  console.log(sv.custName);
  console.log(sv.expiry);
  console.log(sv.cvv);
  console.log(sv.donation);

  // Change the HTML to reflect
  $("#card-number").text(sv.number);
  $("#custName").text(sv.custName);
  $("#expiry-date").text(sv.expiry);
  $("#cvv").text(sv.cvv);
  $("#donation").text(sv.donation);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
