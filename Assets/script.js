
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












































































































































































































































































































//user enters their name
//user clicks submit name button
//when user clicks submit name, their name is stored in local storage
//when user clicks submit name, start game button appears
//when user clicks start game, it takes them to the next question and hides the start game screen

var submitBtnEl = document.getElementById('submit-name-btn');
var welcomeEl = document.getElementById('welcome-card');
var startBtnEl = document.getElementById('start-game-btn');

var username = localStorage.getItem("username");

function submitName() {
    submitBtnEl.addEventListener('click', function(event) {
        event.preventDefault();
        var userInput = document.getElementById('inputVal').value;
        localStorage.setItem("username", userInput)
        let element = document.getElementById("start-name-btn");
        let hidden = element.getAttribute("hidden");
            if (hidden) {
                element.removeAttribute("hidden");
            } else {
                element.setAttribute("hidden", "hidden");
            }   
    })
}

submitName()

//function toggle () {
//    var 
//}


function startGame() {
    if (userInput !== "") {
        show(startBtnEl);
        startBtnEl.addEventListener('click', function(event) {
            event.preventDefault();
            hide(welcomeEl);
            renderLevel();
            show(situationCard);
        })    
    } else {
        alert("Please enter a username to start the game.");
    }
    
}









































































































































































































































































































// Start of Lvl 2

var situations = [
    {
        situation: "After the first week you’re assigned your first challenge! It’s due a week from the assignment date.",
        cOne: "Set aside time each day to work on it, and when you have questions during the week you go to office hours to ask the instructor.",
        cTwo: "It’s a pretty simple design, it shouldn’t take more than an hour. Wait until the day before to start."
    }, {
        situation: "You realize that it’s going to take time outside of class to study and practice to really grasp the material. The course is going by quickly and there’s a lot of info in each class.",
        cOne: "Request a tutor and meet with them once a week to go over the new material.",
        cTwo: "You’d rather not sacrifice time in your personal life, so you’ll just try to memorize as much as you can along the way.",
    }, {
        situation: "You had a long day at work, and you’re feeling tired. During the program, you can only miss a total of 4 classes before you risk not passing.",
        cOne: "Log in and be present for the class. You want to save your 4 days in case of emergency.",
        cTwo: "Take a nap instead. You can always watch the recording of the class later."
    }
];

var sCounter = 0;

function renderLvlTwo() {
    var situationEl = document.getElementById("sit");
    situationEl.innerHTML = situations[sCounter].situation;
    console.log(situationEl.innerHTML = situations[sCounter].situation)
    
}
renderLvlTwo();
