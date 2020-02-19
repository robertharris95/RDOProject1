$.ajax({
    url: "https://api-v2.hearthis.at/categories/"+genre+"/?page="+Math.floor(Math.random()*10)+"&count="+Math.floor(Math.random() * 10),
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });