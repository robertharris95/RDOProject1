var genre = "country";

$.ajax({
    url: "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10),
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });




$("search").click(function () {




})

var urlSpot = "" 





var urlHeart =  "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10);

$.ajax({
    url: urlHeart,
    method: "GET"

}).then(function (response) {
    var artistName = response[0].user.username;
    var description = response[0].user.caption;
    console.log(response[0].user.username);
    console.log(artistName);
    console.log(response[0].user.caption);
    console.log(description);

    $("#media-object-section").text("")
    $("#similarArtistname").text("")
    $("#similarArtistDescribe").text("")


})


var urlBIT = ""



$.ajax({
    url: url,
    method: "GET"

}).then(function (urlBIT) {

    console.log(urlBIT);

    $("#media-object-section").text("")
    $("#similarArtistname").text("")
    $("#similarArtistDescribe").text("")


})






















