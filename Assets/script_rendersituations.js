var situations = [
    {
        title: "You’re interested in attending a coding bootcamp! You’ve selected Butler University’s full stack web dev program, but it looks like a big commitment. The website has a submission form to inquire more and get in touch with an admissions counselor, so you enter your info and get an email back the next day.",
        cOne: "Open the email right away, and email back. You’re excited to get the process started!",
        cTwo: "Wait a week to open the email and another week to reply. You’ve got time!"
    }, {
        title: "You’ve gotten in touch with the advisor and they have given you a bunch of info about the program. It’s important that you respond in a timely manner, since there are deadlines.",
        cOne: "Make the phone calls, send the emails, and set up the accounts with plenty of time before the program begins.",
        cTwo: "Procrastinate until the last few days before the program begins to tie up all the loose ends. You make it into the program, with an hour to spare."
    }, {
        title: "You’re assigned Pre-Work! You're tasked with building a website from scratch.",
        cOne: "Spend any time remaining before the first day of class available to try to complete the Pre-Work.",
        cTwo: "Don’t work on it, you don’t know any of the material and you're going to learn it in class anyway."
    }, {
        title: "After the first week you’re assigned your first challenge! It’s due a week from the assignment date.",
        cOne: "Set aside time each day to work on it, and when you have questions during the week you go to office hours to ask the instructor.",
        cTwo: "It’s a pretty simple design, it shouldn’t take more than an hour. Wait until the day before to start."
    }, {
        title: "You realize that it’s going to take time outside of class to study and practice to really grasp the material. The course is going by quickly and there’s a lot of info in each class.",
        cOne: "Request a tutor and meet with them once a week to go over the new material.",
        cTwo: "You’d rather not sacrifice time in your personal life, so you’ll just try to memorize as much as you can along the way.",
    }, {
        title: "You had a long day at work, and you’re feeling tired. During the program, you can only miss a total of 4 classes before you risk not passing.",
        cOne: "Log in and be present for the class. You want to save your 4 days in case of emergency.",
        cTwo: "Take a nap instead. You can always watch the recording of the class later."
    }, { 
        title: "You divvy up tasks between partners, and you spend time doing independent work during class.", 
        cOne: "Contribute ideas when partners get stuck and actively participate, it’s my grade too!",
        cTwo: "Rely on your partners to speak up and take the lead, they won’t let us fail"
    }, {
        title: "The project is extensive and requires more group discussion than class time allows",
        cOne: "Set up and attend a study session with your partners outside of class",
        cTwo: "Not attend the study session, it’s already time consuming in class as it is"
    }, {
        title: "Presentation day! As a group, you’ll exhibit our efforts to the class before getting your final grade to see whether you pass bootcamp or not!",
        cOne: "You show up early and volunteer to present first",
        cTwo: "You had another long day at work. The group’s got it, they’ll do great"
    }
];

console.log(situations)
var score = 0;
var optionbtns = document.querySelectorAll('.option-btn')
var optionAEl = document.querySelector('#option-a')
var optionBEl = document.querySelector('#option-b')

//level one situations

//shows the third situation and options
function questionThree() {
    document.getElementById('level-one-question').innerHTML = situations[2].title;
    var optionA = situations[2].cOne
    var optionB = situations[2].cTwo
    optionA = optionAEl.textContent;
    optionB = optionBEl.textContent;
}

//shows the second situation and options
function questionTwo() {
    document.getElementById('level-one-question').innerHTML = situations[1].title;
    var optionA = situations[1].cOne
    var optionB = situations[1].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

//renders the first situation once the games starts
function renderLevelOne() {
//hides the welcome page and shows the first level
    document.getElementById('level-one').removeAttribute('hidden');
    document.getElementById('welcome-card').setAttribute('hidden', 'true');
//shows the first situations and options
    document.getElementById('level-one-question').innerHTML = situations[0].title;
    var optionA = situations[0].cOne
    var optionB = situations[0].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

//checks the answer for the third situtation, if they select option A, a point is added to score
//for each option, it renders the next question
function checkAnswerThree() {
    if (optionA) {
    score += 1;
} if (optionB) { 
    renderLevelTwo()
}
}

//checks the answer for the second situtation, if they select option A, a point is added to score
//HELP: situation two is not working! 
//for each option, it renders the next question
function checkAnswerTwo() {
    if (optionA) {
    score += 1;
    questionThree()
} if (optionB) { 
    questionThree()
}
}

//checks the answer for the first situtation, if they select option A, a point is added to score
//for each option, it renders the next question
function checkAnswerOne() {
    if (optionA) {
    score += 1;
    questionTwo()
} if (optionB) { 
    questionTwo()
}
}

//event listeners, for each button, it runs the check answer functions
optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerThree(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerTwo(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerOne(e.target);
        }
    })
})





//level two situations (same as above)

function questionThree() {
    document.getElementById('level-two-question').innerHTML = situations[5].title;
    var optionA = situations[4].cOne
    var optionB = situations[4].cTwo
    optionA = optionAEl.textContent;
    optionB = optionBEl.textContent;
}


function questionTwo() {
    document.getElementById('level-one-question').innerHTML = situations[4].title;
    var optionA = situations[4].cOne
    var optionB = situations[4].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

function renderLevelTwo() {
    document.getElementById('level-two').removeAttribute('hidden');
    document.getElementById('level-one').setAttribute('hidden', 'true');
    document.getElementById('level-one-question').innerHTML = situations[3].title;
    var optionA = situations[3].cOne
    var optionB = situations[3].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

function checkAnswerThree() {
    if (optionA) {
    score += 1;
} if (optionB) { 
    renderLevelThree()
}
}

function checkAnswerTwo() {
    if (optionA) {
    score += 1;
    questionThree()
} if (optionB) { 
    questionThree()
}
}

function checkAnswerOne() {
    if (optionA) {
    score += 1;
    questionTwo()
} if (optionB) { 
    questionTwo()
}
}

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerThree(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerTwo(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerOne(e.target);
        }
    })
})


//level three situations (same as above)

function questionThree() {
    document.getElementById('level-three-question').innerHTML = situations[8].title;
    var optionA = situations[8].cOne
    var optionB = situations[8].cTwo
    optionA = optionAEl.textContent;
    optionB = optionBEl.textContent;
}


function questionTwo() {
    document.getElementById('level-three-question').innerHTML = situations[7].title;
    var optionA = situations[7].cOne
    var optionB = situations[7].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

function renderLevelThree() {
    document.getElementById('level-three').removeAttribute('hidden');
    document.getElementById('level-two').setAttribute('hidden', 'true');
    document.getElementById('level-three-question').innerHTML = situations[6].title;
    var optionA = situations[6].cOne
    var optionB = situations[6].cTwo
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

function checkAnswerThree() {
    if (optionA) {
    score += 1;
} if (optionB) { 
}
}

function checkAnswerTwo() {
    if (optionA) {
    score += 1;
    questionThree()
} if (optionB) { 
    questionThree()
}
}

function checkAnswerOne() {
    if (optionA) {
    score += 1;
    questionTwo()
} if (optionB) { 
    questionTwo()
}
}

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerThree(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerTwo(e.target);
        }
    })
})

optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function(e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswerOne(e.target);
        }
    })
})





//starts the game
 function startGame() {
    startBtnEl.addEventListener('click', function(event) {
        event.preventDefault();
        renderLevelOne();
    })    
}

startGame()