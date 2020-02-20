// On clicking the search button 

var genreArr = ["Techno","Indie","Rock",,"Jazz","Country","Experimental"];
for(let i =1; i<5; i++){
$(".GenreOfDay"+i).text(genreArr[Math.floor(Math.random()*genreArr.length)])
};

$(document).on("click",".searchBtn",function(e) {
e.preventDefault();

  var genre = $(this).text();
  console.log(genre);
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

$(document).on("click",".billboard",function(e) {
e.preventDefault();
var lastWeek = moment().subtract(7, 'days').format("YYYY-MM-DD");
//From Rapid API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/hot-100?date="+ lastWeek+ "&range=1-4",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "c4651f2781msh4e201642fafd400p16948cjsn15af5c0c8c81"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    
    var artistname = response.content[1].artist;
    var track = response.content[1].title;
    var track1 =response.content[2].title
    track1 = track1.replace(/ /g, '+').toLowerCase();
    var track2 =response.content[3].title
    track2 = track2.replace(/ /g, '+').toLowerCase();
    var track3 =response.content[4].title
    track3 = track3.replace(/ /g, '+').toLowerCase();
    //Change description to description from response
   $(".artist-name").text(artistname)
   track = track.replace(/ /g, '+').toLowerCase();
   $(".artist-describe").text(track)
   $(".mainartistBtn").attr("href",)



   $(".similarArtistButton1").attr("href","https://www.youtube.com/result?search_query="+track1);
   $(".similarArtistname1").text(response.content[2].artist);

   
   $(".similarArtistButton2").attr("href","https://www.youtube.com/result?search_query="+track2);
   $(".similarArtistname2").text(response.content[3].artist);

   
   $(".similarArtistButton3").attr("href","https://www.youtube.com/result?search_query="+track3);
   $(".similarArtistname3").text(response.content[4].artist);

});
});