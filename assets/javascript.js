var counter = 75;
var count;


// Timer function to start the quiz timer
function startTimer() {

    count = setInterval(function() {
        counter--;
        var timeReset = timeElement.textContent = "Time:" + " " + counter;
        counter = counter;
        if (counter <= 0) {
            clearInterval(count);

            timeElement.textContent = timeReset;

        }
    }, 1000)
}

document.addEventListener("click", function(event) {
    if (event.target === btnelmt) {
        wrapperElement.style.display = "none";
        startTimer()
        showquestion();
    }

})

function onclickHandler(event) {

    if (counter <= 0) {
        clearInterval(count);
        divCont.style.display = "none";
        showresult();
    }

    var answertext = event.target.textContent;
    console.log('answer is', answertext);

    if (answertext === questions[i].answer) {
        counter = counter;
        anserdiv.setAttribute("style", "color : green");
        anserdiv.textContent = "Correct";
        console.log('question no.', questions[i].answer);

    } else {
        anserdiv.setAttribute("style", "color : red");
        anserdiv.textContent = "Wrong";
        counter = counter - 15;
    }

    console.log('value', i);
    console.log('question', questions);

    if (i < questions.length - 1) {
        i++;
        setTimeout(function() {
            showquestion();
            anserdiv.textContent = "";
        }, 1000)
    } else {
        setTimeout(function() {

            anserdiv.textContent = "";

            showresult();
            clearInterval(count);
        }, 500)
        divCont.innerHTML = "";
    }

    // function to store the result with in the localstorage
    function showresult() {
        finish.style.visibility = "visible";
        timeElement.textContent = "Time" + "" + counter;
        var score = counter;
        localStorage.getItem(score)
        console.log("score is ", score);
        final.textContent = "Your finally score is: " + score;

        localStorage.setItem("score", score)
    }
}

// function to print the final score 
function finalscore() {
    var scores = localStorage.getItem("score");
    var initial = localStorage.getItem("Initial");

    if (scores && initial === "") {
        return
    }
    finish.textContent = "";
    var finalpage = document.querySelector(".Highscore");
    finalpage.style.visibility = "visible";
    var initialAndScore = document.querySelector("#letter");

    initialAndScore.value = initial + ":" + " " + scores;
    initialAndScore.setAttribute("style", "text-align : center");
    console.log("final score is " + scores);

}
document.addEventListener("submit", function(event) {
    event.preventDefault();
    var initialInput = document.querySelector("#input").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
        finalscore()
    }

})

// function to restart the quiz
function start() {
    location.reload();

}