

// Initialize Firebase
var otherAppConfig = {
    apiKey: "AIzaSyCE4bIUeNfQ7Z2FsMO5iuP7szvZt1GxeYI",
    authDomain: "team9-266a8.firebaseapp.com",
    databaseURL: "https://team9-266a8.firebaseio.com",
    projectId: "team9-266a8",
    storageBucket: "team9-266a8.appspot.com",
    messagingSenderId: "340573874282"
};
var otherApp = firebase.initializeApp(otherAppConfig, "other");

var dataRef = otherApp.database();
console.log(dataRef)

dataRef.ref().on("value", function (snapshot) {

    // <img src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/e7/b9/13/condor.jpg">



    //setting each snapshot value as a variable. These values have the image, name and description in firebase.
    var rabbitPic = snapshot.val().Africa.RiverineRabbit.image
    var rabbitName = snapshot.val().Africa.RiverineRabbit.species_name
    var rabbitDesc = snapshot.val().Africa.RiverineRabbit.species_desc

    //appending the variables established above to a specific id that i gave to a table i made in the index.html
    $("#rabbit-image").append('<img src="' + rabbitPic + '" />')
    $("#rabbit-name").text(rabbitName)
    $("#rabbit-desc").text(rabbitDesc)

    //debugging purpposes
    console.log(rabbitName)
    console.log(rabbitDesc)

    var rhinoPic = snapshot.val().Africa.BlackRhino.image
    var rhinoName = snapshot.val().Africa.BlackRhino.species_name
    var rhinoDesc = snapshot.val().Africa.BlackRhino.species_desc

    $("#rhino-image").append('<img src="' + rhinoPic + '" />')
    $("#rhino-name").text(rhinoName)
    $("#rhino-desc").text(rhinoDesc)

    var zebraPic = snapshot.val().Africa.GrevysZebra.image
    var zebraName = snapshot.val().Africa.GrevysZebra.name
    var zebraDesc = snapshot.val().Africa.GrevysZebra.species_desc

    $("#zebra-image").append('<img src="' + zebraPic + '" />')
    $("#zebra-name").text(zebraName)
    $("#zebra-desc").text(zebraDesc)

    console.log(zebraName)


    // north america code


    var raccoonPic = snapshot.val().NorthAmerica.PygmyRaccoon.image
    var raccoonName = snapshot.val().NorthAmerica.PygmyRaccoon.species_name
    var rccoonDesc = snapshot.val().NorthAmerica.PygmyRaccoon.species_desc

    $("#raccoon-image").append('<img src="' + raccoonPic + '" />')
    $("#raccoon-name").text(raccoonName)
    $("#raccoon-desc").text(rccoonDesc)

    var wolfPic = snapshot.val().NorthAmerica.RedWolf.image
    var wolfName = snapshot.val().NorthAmerica.RedWolf.species_name
    var wolfDesc = snapshot.val().NorthAmerica.RedWolf.species_desc

    $("#wolf-image").append('<img src="' + wolfPic + '" />')
    $("#wolf-name").text(wolfName)
    $("#wolf-desc").text(wolfDesc)

    var marmotPic = snapshot.val().NorthAmerica.VancouverMarmot.image
    var marmotName = snapshot.val().NorthAmerica.VancouverMarmot.species_name
    var marmotDesc = snapshot.val().NorthAmerica.VancouverMarmot.species_desc

    $("#marmot-image").append('<img src="' + marmotPic + '" />')
    $("#marmot-name").text(marmotName)
    $("#marmot-desc").text(marmotDesc)


    // south america code

    var lionPic = snapshot.val().SouthAmerica.GoldenLionTamarin.image
    var lionName = snapshot.val().SouthAmerica.GoldenLionTamarin.species_name
    var lionDesc = snapshot.val().SouthAmerica.GoldenLionTamarin.species_desc

    $("#lion-image").append('<img src="' + lionPic + '" />')
    $("#lion-name").text(lionName)
    $("#lion-desc").text(lionDesc)

    var frogPic = snapshot.val().SouthAmerica.LemurLeafFrog.image
    var frogName = snapshot.val().SouthAmerica.LemurLeafFrog.species_name
    var frogDesc = snapshot.val().SouthAmerica.LemurLeafFrog.species_desc

    $("#frog-image").append('<img src="' + frogPic + '" />')
    $("#frog-name").text(frogName)
    $("#frog-desc").text(frogDesc)

    var albatrossPic = snapshot.val().SouthAmerica.WavedAlbatross.image
    var albatrossName = snapshot.val().SouthAmerica.WavedAlbatross.species_name
    var albatrossDesc = snapshot.val().SouthAmerica.WavedAlbatross.species_desc

    $("#albatross-image").append('<img src="' + albatrossPic + '" />')
    $("#albatross-name").text(albatrossName)
    $("#albatross-desc").text(albatrossDesc)


    // europe code

    var minkPic = snapshot.val().Europe.EuropeanMink.image
    var minkName = snapshot.val().Europe.EuropeanMink.species_name
    var minkDesc = snapshot.val().Europe.EuropeanMink.species_desc

    $("#mink-image").append('<img src="' + minkPic + '" />')
    $("#mink-name").text(minkName)
    $("#mink-desc").text(minkDesc)

    var lynxPic = snapshot.val().Europe.IberianLynx.image
    var lynxName = snapshot.val().Europe.IberianLynx.species_name
    var lynxDesc = snapshot.val().Europe.IberianLynx.species_desc

    $("#lynx-image").append('<img src="' + lynxPic + '" />')
    $("#lynx-name").text(lynxName)
    $("#lynx-desc").text(lynxDesc)

    var sealPic = snapshot.val().Europe.MediterraneanMonkSeal.image
    var sealName = snapshot.val().Europe.MediterraneanMonkSeal.species_name
    var sealDesc = snapshot.val().Europe.MediterraneanMonkSeal.species_desc

    $("#seal-image").append('<img src="' + sealPic + '" />')
    $("#seal-name").text(sealName)
    $("#seal-desc").text(sealDesc)


    // asia code

    var pandaPic = snapshot.val().Asia.GiantPanda.image
    var pandaName = snapshot.val().Asia.GiantPanda.species_name
    var pandaDesc = snapshot.val().Asia.GiantPanda.species_desc

    $("#panda-image").append('<img src="' + pandaPic + '" />')
    $("#panda-name").text(pandaName)
    $("#panda-desc").text(pandaDesc)

    var turtlePic = snapshot.val().Asia.GreenSeaTurtle.image
    var turtleName = snapshot.val().Asia.GreenSeaTurtle.species_name
    var turtleDesc = snapshot.val().Asia.GreenSeaTurtle.species_desc

    $("#turtle-image").append('<img src="' + turtlePic + '" />')
    $("#turtle-name").text(turtleName)
    $("#turtle-desc").text(turtleDesc)

    var leopardPic = snapshot.val().Asia.SnowLeopard.image
    var leopardName = snapshot.val().Asia.SnowLeopard.species_name
    var leopardDesc = snapshot.val().Asia.SnowLeopard.species_desc

    $("#leopard-image").append('<img src="' + leopardPic + '" />')
    $("#leopard-name").text(leopardName)
    $("#leopard-desc").text(leopardDesc)


    // australia code

    var finchPic = snapshot.val().Australia.GouldianFinch.image
    var finchName = snapshot.val().Australia.GouldianFinch.species_name
    var finchDesc = snapshot.val().Australia.GouldianFinch.species_desc

    $("#finch-image").append('<img src="' + finchPic + '" />')
    $("#finch-name").text(finchName)
    $("#finch-desc").text(finchDesc)

    var quollPic = snapshot.val().Australia.NorthernQuoll.image
    var quollName = snapshot.val().Australia.NorthernQuoll.species_name
    var quollDesc = snapshot.val().Australia.NorthernQuoll.species_desc

    $("#quoll-image").append('<img src="' + quollPic + '" />')
    $("#quoll-name").text(quollName)
    $("#quoll-desc").text(quollDesc)

    var woyliePic = snapshot.val().Australia.Woylie.image
    var woylieName = snapshot.val().Australia.Woylie.species_name
    var woylieDesc = snapshot.val().Australia.Woylie.species_desc

    $("#woylie-image").append('<img src="' + woyliePic + '" />')
    $("#woylie-name").text(woylieName)
    $("#woylie-desc").text(woylieDesc)






    // $("#click-value").text(snapshot.val().clickCount);
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);

});

var apiKey = "db3ac0b89f504302b518361b6d27fc68"
var queryURL = "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response)
    

        
        $('#1stpicture').attr('src', response.articles[0].urlToImage);
        // $("#news-here").append('<img src="' + response.articles[0].urlToImage + '" />');
        $("#article1title").append(response.articles[0].title, "<br>");
        $("#article1desc").append(response.articles[0].description);
        $("#article1link").append(response.articles[0].url, "<br>");

        $('#2ndpicture').attr('src', response.articles[1].urlToImage);
        $("#article2title").append(response.articles[1].title, "<br>");
        $("#article2desc").append(response.articles[1].description);
        $("#article2link").append(response.articles[1].url, "<br>");
        
        $('#3rdpicture').attr('src', response.articles[2].urlToImage);
        $("#article3title").append(response.articles[2].title, "<br>");
        $("#article3desc").append(response.articles[2].description);
        $("#article3link").append(response.articles[2].url, "<br>");
        
        

        console.log(response.articles[i].urlToImage)
    
});


