
// //api request giphy

// //level 3

// //renderSituation 


// // var apiKey = "X13IhKtYw4lctizGutpMfHbcFQ0pTaaY"
// // function showGIF() {
// //   fetch(``)
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data)

// var requestUrl = "https://api.giphy.com/v1/gifs/search?q=stressed&api_key=X13IhKtYw4lctizGutpMfHbcFQ0pTaaY&limit=1"

// var resultImg = document.getElementById('resultImg');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         return response.json();
//       } else {
//       console.log(response.statusText)
//       }
//        })
//        .then(function (data){
//         console.log(data)
//         document.getElementById('resultImg').innerHTML = "<img src='" + data.data[0].images.original.url +"' />";
//       })
//     }


    
      

// getApi(requestUrl);












































































































































































































































































































// //user enters their name
// //user clicks submit name button
// //when user clicks submit name, their name is stored in local storage
// //when user clicks submit name, start game button appears
// //when user clicks start game, it takes them to the next question and hides the start game screen

// var submitBtnEl = document.getElementById('submit-name-btn');
// var welcomeEl = document.getElementById('welcome-card');
// var startBtnEl = document.getElementById('start-game-btn');

// var username = localStorage.getItem("username");

// function submitName() {
//     submitBtnEl.addEventListener('click', function(event) {
//         event.preventDefault();
//         var userInput = document.getElementById('inputVal').value;
//         localStorage.setItem("username", userInput)
//         let element = document.getElementById("start-game-btn");
//             element.removeAttribute("hidden"); 
//     })
// }

// submitName()

// //function toggle () {
// //    var 
// //}


// var levelOneSituations = [
//     {
//         situation: "You’re interested in attending a coding bootcamp! You’ve selected Butler University’s full stack web dev program, but it looks like a big commitment. The website has a submission form to inquire more and get in touch with an admissions counselor, so you enter your info and get an email back the next day.",
//         cOne: "Open the email right away, and email back. You’re excited to get the process started!",
//         cTwo: "Wait a week to open the email and another week to reply. You’ve got time!"
//     }, {
//         situation: "You’ve gotten in touch with the advisor and they have given you a bunch of info about the program. It’s important that you respond in a timely manner, since there are deadlines.",
//         cOne: "Make the phone calls, send the emails, and set up the accounts with plenty of time before the program begins.",
//         cTwo: "Procrastinate until the last few days before the program begins to tie up all the loose ends. You make it into the program, with an hour to spare.",
//     }, {
//         situation: "You’re assigned Pre-Work! You're tasked with building a website from scratch.",
//         cOne: "Spend any time remaining before the first day of class available to try to complete the Pre-Work.",
//         cTwo: "Don’t work on it, you don’t know any of the material and you're going to learn it in class anyway."
//     }
// ];

// var counter = 0;

// function renderLevelOne() {
//     document.getElementById('level-one').removeAttribute('hidden');
//     var situationOneEl = document.getElementById("level-one-question");
//     situationOneEl.innerHTML = levelOneSituations[counter].situation;
// }

// function startGame() {
//     startBtnEl.addEventListener('click', function(event) {
//         event.preventDefault();
//         renderLevelOne();
//     })    
// }

// startGame()




// c





































































































































































































































































































// Start of Lvl 2

var lvlTwoSituations = [
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
// user gets to lvl two - the first situation is on the screen with the two choices underneath.
// the user answers the question by clicking one of the choices. 
// the next situation pops up with the next two choices.  
function renderLvlTwo() {
    var situationEl = document.getElementById("sit");
    situationEl.innerHTML = "Situation: " + "<br>" + lvlTwoSituations[sCounter].situation;
    for (var i = 0; i < lvlTwoSituations[sCounter].situation.length; i++) {
       var chOne = document.getElementById("chOne");
       var chTwo = document.getElementById("chTwo");
       chOne.textContent = lvlTwoSituations[sCounter].cOne[i];
       chTwo.textContent = lvlTwoSituations[sCounter].cTwo[i];
        
    }
    
};
renderLvlTwo();

// for (var i = 0; i < lvlTwoSituations.length; i++) {
//     sCounter = lvlTwoSituations[i].situation;
//     var chOne = document.getElementById("chOne");
//     var chTwo = document.getElementById("chTwo");
    

// }