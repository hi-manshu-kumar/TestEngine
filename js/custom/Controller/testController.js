window.addEventListener("load", init);
var questions;
var index = 1;

function init() {
    bindEvents();
    questions = questionOperations.prepareQuestions();
    // disable();
    printQuestion();
    printStatus();
    startTimer(60, 1000, "time");
    
}

function getQuestionId() {
    var id = parseInt(this.innerHTML);
    index = id - 1;
    printQuestion();
    index --;
}

function drawCircle(status, id) {
    var div = document.createElement("div"); //<div></div>
    div.className = status ? "green" : "red";
    div.innerHTML = id;
    index = id - 1;
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
    // if (index == questions.length - 1) {
    //     document.querySelector("#next").setAttribute("disabled", true);
    // } else {
    //     document.querySelector("#next").setAttribute("disabled", false);
    // }
}

function printQuestion() {
    console.log("index is ", index);
    if (index < questions.length) {
        var question = questions[index];
        document.querySelector("#question").innerHTML = `Q${question.id}: ${question.name}`;
        document.querySelector("#optionA").innerHTML = '${question.opA}';
        document.querySelector("#optionB").innerHTML = '${question.opB}';
        document.querySelector("#optionC").innerHTML = '${question.opC}';
        document.querySelector("#optionD").innerHTML = '${question.opD}';
        
    }
}

function bindEvents() {
      // document.querySelector("#prev").addEventListener("click", printPrev);
    // document.querySelector("#next").addEventListener("click", printNext);
    dbOperations.getQuestion();
   
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