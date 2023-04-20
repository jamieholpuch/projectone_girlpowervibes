

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
      



function showResult() {
  

  if (score <= 3) {
    document.getElementById('results-description').textContent = ("Not enroll in Coding Bootcamp at this time. It's a big challenge that requires a lot of time dedicated to learning and practicing. Eat, Sleep, Breathe, Code")
    document.getElementById('universityList').removeAttribute('hidden'); 
    getApi(requestUrl3);
    
    fetch('http://universities.hipolabs.com/search?country=United+States&limit=20')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
      console.log(data);
      var btnOne = document.getElementById("btn1");
      var btnTwo = document.getElementById("btn2");
      var btnThree = document.getElementById("btn3");
      var btnFour = document.getElementById("btn4");
      var btnFive = document.getElementById("btn5");
      btnOne.innerText = data[0].web_pages[0];
      btnTwo.innerText = data[1].web_pages[0];
      btnThree.innerText = data[2].web_pages[0];
      btnFour.innerText = data[3].web_pages[0];
      btnFive.innerText = data[4].web_pages[0];
  });
  } else {
    if (score <= 6) {
      document.getElementById('results-description').textContent = ("Think about it a bit more before enrolling. It sounds like you're fairly interested but not quite ready to make the necessary lifestyle changes to succeed.") 
      getApi(requestUrl2);
      document.getElementById('universityList').setAttribute('hidden'); 
    } else {
      document.getElementById('results-description').textContent = ("Definitely enroll in Coding Bootcamp! You've got the right mindset for a new Developer!")
      getApi(requestUrl);
      document.getElementById('universityList').setAttribute('hidden'); 
    }

  }
  return; 
}




//user enters their name
//user clicks submit name button
//when user clicks submit name, their name is stored in local storage
//when user clicks submit name, start game button appears
//when user clicks start game, it takes them to the next question and hides the start game screen

var submitBtnEl = document.getElementById('submit-name-btn');
var welcomeEl = document.getElementById('welcome-card');
var startBtnEl = document.getElementById('start-game-btn');
var userInput = document.getElementById("inputVal");

//check for validation of username
// if (userInput = "") {
//     userInput.required = true;
// } else {
//     submitName()
// }

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


