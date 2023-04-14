//api request giphy

//level 3

//renderSituation 


// var apiKey = "X13IhKtYw4lctizGutpMfHbcFQ0pTaaY"
// function showGIF() {
//   fetch(``)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)

var requestUrl = $.get("https://api.giphy.com/v1/gifs/search?q=cheeseburger&api_key=X13IhKtYw4lctizGutpMfHbcFQ0pTaaY&limit=5")

var resultImg = document.getElementById('resultImg');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
      console.log(response.statusText)
      }
       })
       .then(function (data){
        console.log(data)
        resultImg = data[0].images
      })
    }


    
      

getApi(requestUrl);