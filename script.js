// On clicking the search button 
$(".searchBtn").on("click",function(e) {
e.preventDefault();

// Variables

//Call using page input to get genre
var urlHeartArt = "https://api-v2.hearthis.at/shawne/?type=likes&page=1&count=5"

$.ajax({
  url:urlHeartArt,
  method:"GET"
  
}).then(function(response){
  console.log(response[0].genre)
  var genre = response[0].genre

// Call using genre to get random artist 
var urlHeart =  "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10);
  $.ajax({
    url: urlHeart,
     method: "GET"
}).then(function (response) {
    //Variables for the users artistName and Description
    var artistName = response[0].user.username;
    var description = response[0].user.caption
    //Change description to description from response
   $(".artist-describe").text(description)
 
 
// Call using random artist name to get BIT info
var urlBIT = "https://rest.bandsintown.com/artists/"+ artistname + "/events?app_id=aaa3bc3b24af93f2b09a687107fc37f5&date=upcoming"
$.ajax({
    url: urlBIT,
    method: "GET"
  
}).then(function (response) {
    $(".artist-name").text(response[0].artist.name)
    $(".artist-image").attr("src",response[0].artist.thumb_url)
    $(".mainartistBtn").attr("href",response[0].url)

})

 
});























