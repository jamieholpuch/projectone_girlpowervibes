

//get GIPHY API
var requestUrl = "https://api.giphy.com/v1/gifs/search?q=excited&api_key=X13IhKtYw4lctizGutpMfHbcFQ0pTaaY&limit=1"
var requestUrl2 = "https://api.giphy.com/v1/gifs/search?q=thinking&api_key=X13IhKtYw4lctizGutpMfHbcFQ0pTaaY&limit=1"
var requestUrl3 = "https://api.giphy.com/v1/gifs/search?q=stressed&api_key=X13IhKtYw4lctizGutpMfHbcFQ0pTaaY&limit=1"


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
        document.getElementById('resultImg').innerHTML = "<img src='" + data.data[0].images.original.url +"' />";
      })
    }

var resultImg2 = document.getElementById('resultImg');

function getApi(requestUrl2) {
  fetch(requestUrl2)
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
        document.getElementById('resultImg').innerHTML = "<img src='" + data.data[0].images.original.url +"' />";
      })
    }

    var resultImg3 = document.getElementById('resultImg');

function getApi(requestUrl3) {
  fetch(requestUrl3)
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
        document.getElementById('resultImg').innerHTML = "<img src='" + data.data[0].images.original.url +"' />";
      })
    }
      
var activityRequestUrl = "https://www.boredapi.com/api/activity?key=5881028"
var universityList = document.getElementById('universityList')

function getActivityApi(activityRequestUrl) {
  fetch(activityRequestUrl)
    .then(function (response) {
      console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
          console.log(response.statusText)
        }
    })
    .then(function (data) {
      console.log(data);
       var btnOne = document.getElementById("btn1");
       btnOne.textContent = data.activity;
       document.getElementById('btn-one-href').href = "https://www.codecademy.com/learn/introduction-to-javascript";
    })
}

function showResult() {
  if (score <= 3) {
    document.getElementById('results-description').textContent = ("Not enroll in Coding Bootcamp at this time. It's a big challenge that requires a lot of time dedicated to learning and practicing. Eat, Sleep, Breathe, Code")
    universityList.removeAttribute('hidden'); 
    getApi(requestUrl3);
    getActivityApi(activityRequestUrl);
  } else if (score <= 6) {
      document.getElementById('results-description').textContent = ("Think about it a bit more before enrolling. It sounds like you're fairly interested but not quite ready to make the necessary lifestyle changes to succeed.") 
      getApi(requestUrl2);
  } else {
      document.getElementById('results-description').textContent = ("Definitely enroll in Coding Bootcamp! You've got the right mindset for a new Developer!")
      getApi(requestUrl);
    } 
  } 

  function quitGame() {
    quitGameEl.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('level-name').textContent = "Game Over";
        document.getElementById('level-one-question').textContent = "Your Bootcamp SIMS game has been exited. Thanks for playing!";
        document.getElementById('option-a').textContent = "Your current score is: " + score + " out of " + situations.length;
        document.getElementById('option-b').textContent = "";
        document.getElementById('quit-btn').textContent = "";
  })
  }
  
quitGame()


//user enters their name
//user clicks submit name button
//when user clicks submit name, their name is stored in local storage
//when user clicks submit name, start game button appears
//when user clicks start game, it takes them to the next question and hides the start game screen

var submitBtnEl = document.getElementById('submit-name-btn');
var welcomeEl = document.getElementById('welcome-card');
var startBtnEl = document.getElementById('start-game-btn');
var userInput = document.getElementById("inputVal");

//when user submits their name, they are able to click start game
function submitName() {
    submitBtnEl.addEventListener('click', function(event) {
        event.preventDefault();
        var userInput = document.getElementById('inputVal').value;
        localStorage.setItem("username", userInput)
        let element = document.getElementById("start-game-btn");
            element.removeAttribute("hidden"); 
    })
}

submitName()

//code sourced from Stacy Summers of Web Design Library
Share = {
  facebook: function(purl, ptitle, pimg, text) {
  url = 'http://www.facebook.com/sharer.php?s=100';
  url += '&p[title]=' + encodeURIComponent(ptitle);
  url += '&p[summary]=' + encodeURIComponent(text);
  url += '&p[url]=' + encodeURIComponent(purl);
  url += '&p[images][0]=' + encodeURIComponent(pimg);
  Share.popup(url);
  },
  twitter: function(purl, ptitle) {
  url = 'http://twitter.com/share?';
  url += 'text=' + encodeURIComponent(ptitle);
  url += '&url=' + encodeURIComponent(purl);
  url += '&counturl=' + encodeURIComponent(purl);
  Share.popup(url);
  },
  popup: function(url) {
  window.open(url,'','toolbar=0,status=0,width=626, height=436');
  }
  };

