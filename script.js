// On clicking the search button 

var genreArr = ["techno","indie","rock","Techno","jazz","country"];
shuffle(genreArr)

for (let i = 1; i<5; i++) {
 
$(".GenreOfDay"+i).text(genreArr[i]);
}

// $(".GenreOfDay").text(genreArr[Math.floor(Math.random()*genreArr.length)])
//};

//genreArr.randomseed(os.time());

// function shuffle(genreArr) {
//   var i = 0
//   var j = 0
//   var temp = null 
//  for (let i = genreArr.length - 1; i > 0; i-=1) {
//    const j = Math.floor(Math.random() * (i+1));
//    temp = genreArr[i]
//    genreArr[i] = genreArr[j]
//    genreArr[j] = temp 
//  }}



//  var randNum;

//  For(let i = 1;i<5;i++) {

// randNum = Math.floor(Math.random()*genreArr.length);

//  $(“.GenreOfDay”).text(genreArr[randNum]);

//  }
   
   
   
   
   //console.log(j)
 // }
  //return genreArr;
 // var genreArr = MIN + Math.random() * (MAX - (lastRandom !== undefined)) | 0;
 // if (genreArr === lastgenreArr) genreArr = MAX;
  //lastgenreArr = genreArr;
 





$(".searchBtn").on("click",function(e) {
e.preventDefault();

  var genre = this.text
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
});
})
