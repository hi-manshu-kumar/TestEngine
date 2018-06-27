window.addEventListener("load", init);
var questions;
var index = 1;

function init() {
    dbOperations.getQuestion();
    setTimeout(() => {
        bindEvents();
        questions = questionOperations.questions;
        // disable();
        printQuestion();
        printStatus();
        startTimer(60, 1000, "time");
        printQuestion();
    },3000);
   
    
}

function getQuestionId() {
    var id = parseInt(this.innerHTML);
    index = id ;
    printQuestion();
    index --;
}

function drawCircle(status, id) {
    var div = document.createElement("div"); //<div></div>
    div.className = status ? "green" : "red";
    div.innerHTML = id;
    index = id ;
    div.addEventListener("click", getQuestionId);
    document.querySelector("#status").appendChild(div);

}

function printStatus() {
    for (let question of questions) {
        var id = question.id;
        var status = question.attempt;
        drawCircle(status, id);
    }
}

function disable() {
    if (index == 0) {
        document.querySelector("#prev").setAttribute("disabled", true);
    } else {
        document.querySelector("#prev").setAttribute("disabled", false);
    }
    if (index == questions.length - 1) {
        document.querySelector("#next").setAttribute("disabled", true);
    } else {
        document.querySelector("#next").setAttribute("disabled", false);
    }
}

function printQuestion() {
    console.log("index is ", index);
    setTimeout(function(){  
        // console.log(questions);
        if (index < questions.length) {
            var question = questions[index];

            document.querySelector("#question").innerHTML = `Q${question.id}: ${question.name} ${question.opA}`;
            document.querySelector("#optionA").value = question.opA;
            document.querySelector("#optionB").value = question.opB;
            document.querySelector("#optionC").value = question.opC;
            document.querySelector("#optionD").value = question.opD;
            
        } }, 5000);
   
}

function bindEvents() {
    // document.querySelector("#prev").addEventListener("click", printPrev);
    // document.querySelector("#next").addEventListener("click", printNext);
    // dbOperations.getQuestion();
   
}

function printPrev() {
    index = index-1;
    console.log("in printPrev");
    printQuestion();
}

function printNext() {
    // index=  index+1;
    // index = index -1;
    // var x = index + 1;
    // var x = index - 1 ;
    // index=x;
    console.log(x);
    console.log("in prnt next index is ", index);
    console.log("in printNext");
    printQuestion();
    console.log("performed");
}