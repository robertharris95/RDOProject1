// On clicking the search button 
$(".searchBtn").on("click",function(e) {
e.preventDefault();

// Variables
var input = $(".search").val();
input = input.replace(/\s/g,'').toLowerCase();
//Call using page input to get genre
var urlHeartArt = "https://api-v2.hearthis.at/"+ input +"/?type=likes&page=1&count=5"

$.ajax({
  url:urlHeartArt,
  method:"GET"
  
}).then(function(response){
//   console.log(response)
  var genre = response[0].genre
  genre = genre.replace(/\s/g,'').toLowerCase();

// Call using genre to get random artist 

var urlHeart =  "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10);
  $.ajax({
    url: urlHeart,
     method: "GET"
}).then(function(response) {
    //Variables for the users artistName and Description
    console.log(response);
    var artistname = response[0].user.username;
    var description = response[0].user.caption
    //Change description to description from response
   $(".artist-describe").text(description)
   $(".artist-name").text(artistname)

   $(".artist-image").attr("src",response[0].thumb)
   $(".mainartistBtn").attr("href",response[0].permalink_url)
    $(".player").attr("src", response[0].preview_url)

   $(".similarartist1").attr("src",response[1].thumb)
   $(".similarArtistButton1").attr("href",response[1].permalink_url)
   $(".similarArtistname1").text(response[1].user.username)

   $(".similarartist2").attr("src",response[2].thumb)
   $(".similarArtistButton2").attr("href",response[2].permalink_url)
   $(".similarArtistname2").text(response[2].user.username)

   $(".similarartist3").attr("src",response[3].thumb)
   $(".similarArtistButton3").attr("href",response[3].permalink_url)
   $(".similarArtistname3").text(response[3].user.username)
})
});
});
