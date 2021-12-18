var btnelmt = document.querySelector("#start");
var h1 = document.querySelector("#title");
var info = document.createElement("div");
var oderList = document.querySelector("#list");
var divCont = document.querySelector(".container");
var timeElement = document.querySelector("#time");
var anserdiv = document.querySelector("#answer");
var final = document.querySelector("#result");
var finish = document.querySelector(".finish_page");
var finalpage = document.querySelector(".Highscore");
var errMsg = document.querySelector("#error");
var initial = document.querySelector("#input").value;
var initialAndScore = document.querySelector("#letter");
var wrapperElement = document.querySelector(".wrapper");
var submit = document.querySelector(".btn btn-primary mb-2");


// list of questions
var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Array in Javascript can be use to store",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of Above"],
        answer: "All of Above",
    },
    {
        title: "String values must be enclosed within________when being assigned to variables. ?",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],

        answer: "quotes",
    },
    {
        title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)",
            "getElementsByTagName(‘tagname’)", "querySelectorAll()"
        ],
        answer: "querySelectorAll()",
    }
]

var i = 0;

// function created to list the question with answers 
function showquestion() {

    var list = questions[i].title;
    h1.textContent = list;

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    var Choice1 = questions[i].choices[0];
    var Choice2 = questions[i].choices[1];
    var Choice3 = questions[i].choices[2];
    var Choice4 = questions[i].choices[3];

    oderList.innerHTML = '';
    li1.setAttribute("class", "all");

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice1;
    li1.appendChild(btn)
    oderList.appendChild(li1);
    divCont.appendChild(oderList);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice2;
    li2.appendChild(btn)
    oderList.appendChild(li2);
    divCont.appendChild(oderList);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice3;
    li3.appendChild(btn)
    oderList.appendChild(li3);
    divCont.appendChild(oderList);

    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = Choice4;
    li4.appendChild(btn)
    oderList.appendChild(li4);
    divCont.appendChild(oderList);

    var allBtn = document.querySelectorAll(".all_btn")
    allBtn.forEach(function(event) {
        event.addEventListener("click", onclickHandler)
    });

}