

// On clicking the search button 
var genreArr = ["Techno","Indie","Rock",,"Jazz","Country","Experimental"];
//shuffle function from javascriptinfo.com
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }  
shuffle(genreArr)
for(let i =1; i<5; i++){
$(".GenreOfDay"+i).text(genreArr[i])
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
    // to clear other formatting
    $(".artist-describe").text("")
    $(".artist-name").text("")
 
    $(".artist-image").attr("src","")
    
    $(".mainartistBtn").attr("href","")
 
     $(".player").attr("src", "")
 
     
 
 
    $(".similarartist1").attr("src","")
    $(".similarartist1").attr("visibility","none")
    $(".similarArtistButton1").attr("href","")
    $(".similarArtistname1").text("")
 
    $(".similarartist2").attr("src","")
    $(".similarArtistButton2").attr("href","")
    $(".similarArtistname2").text("")
 
    $(".similarartist3").attr("src","")
    $(".similarArtistButton3").attr("href","")
    $(".similarArtistname3").text("")


    
    var artistname = response[0].user.username;
    var description = response[0].user.caption
    //Change description to description from response
   $(".artist-describe").text(description)
   $(".artist-name").text(artistname)

   $(".artist-image").attr("src",response[0].thumb)
   $(".mainartistBtn").attr("href",response[0].permalink_url)
if(response[0].preview_url !== null){
    $(".player").attr("src", response[0].preview_url)
}
else{
    $(".player").attr("visibility", "none")
}

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
    
    var artistname = response.content[1].artist;
    var track = response.content[1].title;
    var track1 =response.content[2].title
    
    var track2 =response.content[3].title
    
    var track3 =response.content[4].title
    



//clear all other formatting that may not apply 

    $(".artist-describe").text("")
   $(".artist-name").text("")

   $(".artist-image").attr("src","")
   
   $(".mainartistBtn").attr("href","")

    $(".player").attr("src", "")

    


   $(".similarartist1").attr("src","")
   $(".similarartist1").attr("visibility","none")
   $(".similarArtistButton1").attr("href","")
   $(".similarArtistname1").text("")

   $(".similarartist2").attr("src","")
   $(".similarArtistButton2").attr("href","")
   $(".similarArtistname2").text("")

   $(".similarartist3").attr("src","")
   $(".similarArtistButton3").attr("href","")
   $(".similarArtistname3").text("")

   $(".artist-image").attr("visibility","none")
   $(".similarartist3").attr("visibility","none")
   $(".player").attr("visibility", "none")
   $(".similarartist2").attr("visibility","none")

    //Change description to description from response
   $(".artist-name").text(artistname)
   $(".artist-describe").text(track)
   track = track.replace(/ /g, '%20').toLowerCase();
   


   $(".similarArtistTrack1").text(track1);
   track1 = track1.replace(/ /g, '%20').toLowerCase();
   $(".similarArtistname1").text(response.content[2].artist);
  

   $(".similarArtistTrack2").text(track2);
   track2 = track2.replace(/ /g, '%20').toLowerCase();
   $(".similarArtistname2").text(response.content[3].artist);
   

   $(".similarArtistTrack3").text(track3);
   track3 = track3.replace(/ /g, '%20').toLowerCase();
   $(".similarArtistname3").text(response.content[4].artist);
   

    var tubeUrlmain = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ track + "&key=AIzaSyD08HwnwabQOd301PPQP9RW6yL5BjwqA4g"
    var tubeUrl1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ track1 + "&key=AIzaSyD08HwnwabQOd301PPQP9RW6yL5BjwqA4g"
    var tubeUrl2 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ track2 + "&key=AIzaSyD08HwnwabQOd301PPQP9RW6yL5BjwqA4g"
    var tubeUrl3 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ track3 + "&key=AIzaSyD08HwnwabQOd301PPQP9RW6yL5BjwqA4g"
console.log(tubeUrlmain);
console.log(tubeUrl1);
console.log(tubeUrl2);
console.log(tubeUrl3);
    // main button youtube 
    $.ajax({
        url: tubeUrlmain,
        method:"GET"
    }).then(function(response){
        console.log(response);
        $(".mainartistBtn").attr("href","https://www.youtube.com/watch?v=" + response.items[0].id.videoId);

    })

    // first button youtube 
    $.ajax({
        url: tubeUrl1,
        method:"GET"
    }).then(function(response){
        console.log(response);

        $(".similarArtistButton1").attr("href","https://www.youtube.com/watch?v=" + response.items[0].id.videoId);

    })

    // second button youtube 
    $.ajax({
        url: tubeUrl2,
        method:"GET"
    }).then(function(response){
        console.log(response);

        $(".similarArtistButton2").attr("href","https://www.youtube.com/watch?v=" + response.items[0].id.videoId);

    })

    // third button youtube 
    $.ajax({
        url: tubeUrl3,
        method:"GET"
    }).then(function(response){
        console.log(response);

        $(".similarArtistButton3").attr("href","https://www.youtube.com/watch?v=" + response.items[0].id.videoId);

    })

});
});
