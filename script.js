



$("search").click(function () {




})







var urlHeartArt = "https://api-v2.hearthis.at/shawne/?type=likes&page=1&count=5"



$.ajax({
    url: urlHeartArt,
    method: "GET"

}).then(function (response) {

    console.log(response);
    
    console.log(response[0].genre);

   
   
   
   
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






















