var btnelmt = document.querySelector("#start");
var h1 = document.querySelector("#title");
var info = document.createElement("div");
var oderListEl = document.querySelector("#list");
var divCont = document.querySelector(".divContainer");
var timeElement = document.querySelector("#counter");
var anserdiv = document.querySelector("#answer");
var final = document.querySelector("#result");
var finish = document.querySelector(".finish_page");
var finalpage = document.querySelector(".Highscore");
var errMsg = document.querySelector("#error");
var initial = document.querySelector("#input");
var initialAndScore = document.querySelector("#text");
var wrapperElement = document.querySelector(".nav justify-content-center");
var submit = document.querySelector(".btn btn-primary mb-2");

var i = 0;


function showquestion() {

    var list = questions[i].title;
    h1.textContent = list;
    var Choice1 = questions[i].choices[0];


    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");


    var Choice2 = questions[i].choices[1];
    var Choice3 = questions[i].choices[2];
    var Choice4 = questions[i].choices[3];


    oderListEl.innerHTML = "";
    li1.setAttribute("class", "all");

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice1;
    li1.appendChild(btn)
    oderListEl.appendChild(li1);
    divCont.appendChild(oderListEl);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice2;
    li2.appendChild(btn)
    oderListEl.appendChild(li2);
    divCont.appendChild(oderListEl);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice3;
    li3.appendChild(btn)
    oderListEl.appendChild(li3);
    divCont.appendChild(oderListEl);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice4;
    li4.appendChild(btn)
    oderListEl.appendChild(li4);
    divCont.appendChild(oderListEl);



    var allBtn = document.querySelectorAll(".all_btn")
    allBtn.forEach(function(event) {
        event.addEventListener("click", onclickHandler)
    });

}
var counter = 75;
var timeCount;

function startTimer() {

    timeCount = setInterval(function() {
        counter--;
        var timeReset = timeElement.textContent = "Time:" + " " + counter;
        counter = counter;
        if (counter <= 0) {
            clearInterval(timeCount);

            timeElement.textContent = timeReset;

        }
    }, 1000)
}

document.addEventListener("click", function(event) {
    if (event.target === btnelmt) {
        //wrapperElement.style.display = "none";
        startTimer()
        showquestion();
    }

})