
// //api request giphy

// //level 3

// //renderSituation 


// // var apiKey = "X13IhKtYw4lctizGutpMfHbcFQ0pTaaY"
// // function showGIF() {
// //   fetch(``)
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data)


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
    getApi(requestUrl3);
  } else {
    if (score <= 6) {
      document.getElementById('results-description').textContent = ("Think about it a bit more before enrolling. It sounds like you're fairly interested but not quite ready to make the necessary lifestyle changes to succeed.")
      getApi(requestUrl2);
      
    } else {
      document.getElementById('results-description').textContent = ("Definitely enroll in Coding Bootcamp! You've got the right mindset for a new Developer!")
      getApi(requestUrl);
    }

  }
  return; 
}

//showResult()




















//get Universities API

fetch('http://universities.hipolabs.com/search?country=United+States&limit=20')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


//var lvlThreeSituations = [

  //  {situation: "You divvy up tasks between partners, and you spend time doing independent work during class.", 
  //  cOne: "Contribute ideas when partners get stuck and actively participate, it’s my grade too!",
  //  cTwo: "Rely on your partners to speak up and take the lead, they won’t let us fail"
  //  },
  //  {situation: "The project is extensive and requires more group discussion than class time allows",
  //  cOne: "Set up and attend a study session with your partners outside of class",
 //   cTwo: "Not attend the study session, it’s already time consuming in class as it is"
 //   },
 //   {situation: "Presentation day! As a group, you’ll exhibit our efforts to the class before getting your final grade to see whether you pass bootcamp or not!",
 //   cOne: "You show up early and volunteer to present first",
 //   cTwo: "You had another long day at work. The group’s got it, they’ll do great"


 //   }


//];

// var threeCounter = 0;

//function renderLvlThree() {
  //  var situationEl = document.getElementById("level-three")
    // situationEl.innerHTML = situations[threeCounter].situation;
  //  var sitchOne = []
  //  for (var i = 0; i < lvlThreeSituations.length; i++) {
  //      let threeCounter = lvlThreeSituations[i];
  //      console.log(threeCounter)
  //      sitchOne.push(threeCounter.situation)
  //      sitchOne.push(threeCounter.cOne)
  //      sitchOne.push(threeCounter.cTwo)
  //      document.getElementById("level-three-question").innerHTML = sitchOne[0]
  //      document.getElementById("optionA").textContent = sitchOne[1]
  //      document.getElementById("optionB").textContent = sitchOne[2]
        
   // }
//};
//renderLvlThree();





































































































































































































































































































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
        let element = document.getElementById("start-game-btn");
            element.removeAttribute("hidden"); 
    })
}

submitName()

// //function toggle () {
// //    var 
// //}


//var levelOneSituations = [
  //  {
    //    situation: "You’re interested in attending a coding bootcamp! You’ve selected Butler University’s full stack web dev program, but it looks like a big commitment. The website has a submission form to inquire more and get in touch with an admissions counselor, so you enter your info and get an email back the next day.",
      //  cOne: "Open the email right away, and email back. You’re excited to get the process started!",
      //  cTwo: "Wait a week to open the email and another week to reply. You’ve got time!"
   // }, {
     //   situation: "You’ve gotten in touch with the advisor and they have given you a bunch of info about the program. It’s important that you respond in a timely manner, since there are deadlines.",
       // cOne: "Make the phone calls, send the emails, and set up the accounts with plenty of time before the program begins.",
      //  cTwo: "Procrastinate until the last few days before the program begins to tie up all the loose ends. You make it into the program, with an hour to spare."
   // }, {
     //   situation: "You’re assigned Pre-Work! You're tasked with building a website from scratch.",
     //   cOne: "Spend any time remaining before the first day of class available to try to complete the Pre-Work.",
     //   cTwo: "Don’t work on it, you don’t know any of the material and you're going to learn it in class anyway."
   // }
//];


//function renderLevelOne() {
    
  //  document.getElementById('level-one').removeAttribute('hidden');
  //  document.getElementById('welcome-card').setAttribute('hidden', 'true');
  //  var situationOneEl = document.getElementById("level-one-question");
  //  var questionOneEl = document.getElementById("option-a");
   // var questionTwoEl = document.getElementById("option-b");

//function renderNextQuestion() {
    
//}

//var optionAEl = document.getElementById('option-a')
//var optionBEl = document.getElementById('option-b')
//var score = 0

//function addPoint() {
//    if (optionAEl.addEventListener ('click', function(event) {
//        event.preventDefault();
//        score += 1
//        nextQuestion();)
//    } else {
//        (optionBEl.addEventListener ('click', function(event) {
//            event.preventDefault();
//            nextQuestion();
//        }))  
//    })) //
//}

































































































































































































































































































// Start of Lvl 2


//var situations = [
  //  {
    //    situation: "After the first week you’re assigned your first challenge! It’s due a week from the assignment date.",
      //  cOne: "Set aside time each day to work on it, and when you have questions during the week you go to office hours to ask the instructor.",
      //  cTwo: "It’s a pretty simple design, it shouldn’t take more than an hour. Wait until the day before to start."
   // }, {
    //    situation: "You realize that it’s going to take time outside of class to study and practice to really grasp the material. The course is going by quickly and there’s a lot of info in each class.",
    //    cOne: "Request a tutor and meet with them once a week to go over the new material.",
    //    cTwo: "You’d rather not sacrifice time in your personal life, so you’ll just try to memorize as much as you can along the way.",
  //  }, {
  //      situation: "You had a long day at work, and you’re feeling tired. During the program, you can only miss a total of 4 classes before you risk not passing.",
  //      cOne: "Log in and be present for the class. You want to save your 4 days in case of emergency.",
  //      cTwo: "Take a nap instead. You can always watch the recording of the class later."
  //  }
//];

//var sCounter = 0;

//function renderLvlTwo() {
 //   var situationEl = document.getElementById("sit");
 //   situationEl.innerHTML = situations[sCounter].situation;
 //   console.log(situationEl.innerHTML = situations[sCounter].situation)
    
//}
//renderLvlTwo();


// var lvlTwoSituations = [
//     {
//         situation: "After the first week you’re assigned your first challenge! It’s due a week from the assignment date.",
//         cOne: "Set aside time each day to work on it, and when you have questions during the week you go to office hours to ask the instructor.",
//         cTwo: "It’s a pretty simple design, it shouldn’t take more than an hour. Wait until the day before to start."
//     }, {
//         situation: "You realize that it’s going to take time outside of class to study and practice to really grasp the material. The course is going by quickly and there’s a lot of info in each class.",
//         cOne: "Request a tutor and meet with them once a week to go over the new material.",
//         cTwo: "You’d rather not sacrifice time in your personal life, so you’ll just try to memorize as much as you can along the way.",
//     }, {
//         situation: "You had a long day at work, and you’re feeling tired. During the program, you can only miss a total of 4 classes before you risk not passing.",
//         cOne: "Log in and be present for the class. You want to save your 4 days in case of emergency.",
//         cTwo: "Take a nap instead. You can always watch the recording of the class later."
//     }
// ];

// var sCounter = 0;
// // user gets to lvl two - the first situation is on the screen with the two choices underneath.
// // the user answers the question by clicking one of the choices. 
// // the next situation pops up with the next two choices.  
// function renderLvlTwo() {
//     var situationEl = document.getElementById("sit");
//     situationEl.innerHTML = "Situation: " + "<br>" + lvlTwoSituations[sCounter].situation;
//     var chOne = document.getElementById("chOne");
//     var chTwo = document.getElementById("chTwo");
//     chOne.textContent = lvlTwoSituations[sCounter].cOne
//     chTwo.textContent = lvlTwoSituations[sCounter].cTwo
// };
// renderLvlTwo();

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
    var chOne = document.getElementById("chOne");
    var chTwo = document.getElementById("chTwo");
    chOne.textContent = lvlTwoSituations[sCounter].cOne
    chTwo.textContent = lvlTwoSituations[sCounter].cTwo
};
  renderLvlTwo();


//COMMENTED OUT TO REMOVE ERROR FOR TEST LINE 823


// getApi(requestUrl);

//get Universities API
var uniListEl = document.getElementById("universityList");
fetch('http://universities.hipolabs.com/search?country=United+States&limit=20')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var uniListEl = document.getElementById("universityList");
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
    // if user gets worst result, display university list as buttons
      //only need 10 buttons to generate
      // need buttons only if user gets worst result
  });

  // var uniBtn = document.createElement("button");
  //     // console.log(data[i].web_pages[0]);
  //     uniBtn.innerText = data[i].web_pages[0];
  //     uniListEl.appendChild(uniBtn);