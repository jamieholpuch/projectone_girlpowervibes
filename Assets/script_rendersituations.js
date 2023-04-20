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
var startBtnEl = document.getElementById('start-game-btn');
var optionbtns = document.querySelectorAll('.option-btn');
var optionAEl = document.querySelector('#option-a');
var optionBEl = document.querySelector('#option-b');
var levelOneQuestion = document.getElementById('level-one-question');
var restartGameEl = document.getElementById('restart-game');
var quitGameEl = document.getElementById('quit-btn');



//renders the situation once the games starts
var qCounter = 0
var level = 1
var gameover = false
function renderLevel() {
    //hides the welcome page and shows the first level
    document.getElementById('level-one').removeAttribute('hidden');
    document.getElementById('welcome-card').setAttribute('hidden', 'true');
    //shows the first situations and options
    var situationOne = situations[qCounter].title;
    var optionA = situations[qCounter].cOne;
    var optionB = situations[qCounter].cTwo;
    levelOneQuestion.textContent = situationOne;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
}

//checks the user answer for the situtation, if they select option A, a point is added to score
//for each option, it renders the next question
//once three situations are answered, the next level is rendered
function checkAnswer(userClicked) {
    if (!gameover) {
        if (level === 1) {
            if (userClicked === situations[qCounter].cOne) {
                score += 1;
            }
            qCounter++
            renderLevel()
                if (qCounter === 3) {
                    level += 1;
                    document.getElementById('level-name').textContent = "Level 2"
                }
        } else if (level === 2) {
            //do level 2
            if (userClicked === situations[qCounter].cOne) {
                score += 1;
                
            }
            qCounter++
            renderLevel()
                if (qCounter === 6) {
                    level += 1;
                    document.getElementById('level-name').textContent = "Level 3"
                }
                renderLevel()
        } else if (level === 3) {
            //do do level  3
            if (userClicked === situations[qCounter].cOne) {
                score += 1;
            }
            qCounter++
            renderLevel()
                if (qCounter === 8) {
                    level += 1
                }
        } else if (level === 4) {
                gameover === true
                    document.getElementById('results-page').removeAttribute('hidden');
                    document.getElementById('level-one').setAttribute('hidden', 'true');
                    showResult();
        }
           // renderHighScores()
            // game over
        }
    }




//event listeners, for each button, it runs the check answer functions
optionbtns.forEach(optionBtn => {
    optionBtn.addEventListener('click', function (e) {
        e.preventDefault()
        if (e.target.matches('button')) {
            checkAnswer(e.target.textContent);
        }
    })
})



//starts the game
function startGame() {
    startBtnEl.addEventListener('click', function (event) {
        event.preventDefault();
        renderLevel();
    })
}

startGame()



function restartGame() {
    restartGameEl.addEventListener('click', function (event) {
        event.preventDefault();
        level = 1;
        score = 0;
        qCounter = 0;
        renderLevel()
        document.getElementById('results-page').setAttribute('hidden', 'true');
        document.getElementById('level-name').textContent = "Level 1";
    })
}

restartGame()








































