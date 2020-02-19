



$("search").click(function () {




})

var urlSpot = "" 







$.ajax({
    url: urlHeart,
    method: "GET"

}).then(function (urlHeart) {

    console.log(urlHeart);

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






















