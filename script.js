



// On clicking the search button 
$(".searchBtn").on("click",function(e) {
e.preventDefault();

// Variables






// Call using artist to get genre 
// $.ajax({
//     url: urlHeart,
//     method: "GET"

// }).then(function(response) {

    // console.log(response);

    // $(".media-object-section").text("")
    // $(".similarArtistname").text("")
    // $(".similarArtistDescribe").text("")


var urlHeart =  "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10);
  
// Call using genre to get random artist 
  $.ajax({
    url: urlHeart,
     method: "GET"


}).then(function (response) {
    //Variables for the users artistName and Description
    var artistName = response[0].user.username;
    var description = response[0].user.caption;
    //Log test of the artist name matching and being correctly defined
    console.log(response[0].user.username);
    console.log(artistName);
    //Log test of the artist description matching and being correctly defined
    console.log(response[0].user.caption);
    console.log(description);
    $(".artist-describe").text(response[0].user.caption)
 });

  
// Call using random artist name to get BIT info
var artistname= "trippiered"
var urlBIT = "https://rest.bandsintown.com/artists/"+ artistname + "/events?app_id=aaa3bc3b24af93f2b09a687107fc37f5&date=upcoming"
$.ajax({
    url: urlBIT,
    method: "GET"
  
}).then(function(response) {
   console.log(response)

    $(".artist-name").text(response[0].artist.name)
    $(".artist-image").attr("src",response[0].artist.thumb_url)
    $(".mainartistBtn").attr("href",response[0].url)


})

    




});























