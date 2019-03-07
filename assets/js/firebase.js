$( document ).ready(function() {
    console.log( "ready!" );


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
var expiryMonth = "";
var expiryYear = "";
var cvv = "";
var donation = "";

// Capture Button Click
$("#confirm-purchase").on("click", function() {
  //event.preventDefault();

  // Grabbed values from text boxes
  card = $("#cardNumber").val().trim();
  name = $("#owner").val().trim();
  expiryMonth = $("#expiry-month").text().trim();
  expiryYear = $("#expiry-year").text().trim();
  cvv = $("#cvv").val().trim();
  donation = $("#donation").val().trim();

  console.log(expiryMonth);

  // Code for handling the push
  database.ref().push({
    card: card,
    owner: name,
    expiryMonth: expiryMonth,
    expiryYear: expiryYear,
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
  console.log(sv.owner);
  console.log(sv.expiryMonth);
  console.log(sv.expiryYear);
  console.log(sv.cvv);
  console.log(sv.donation);

  // Change the HTML to reflect
  $("#cardNumber").text(sv.number);
  $("#owner").text(sv.owner);
  $("#expiry-month").text(sv.expiryMonth);
  $("#expiry-year").text(sv.expiryYear);
  $("#cvv").text(sv.cvv);
  $("#donation").text(sv.donation);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
});