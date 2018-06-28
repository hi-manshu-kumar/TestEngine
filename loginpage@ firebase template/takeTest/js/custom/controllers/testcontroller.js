window.addEventListener("load", init);
var sequence;
var questions;
var index = 0;
var marks = 0;
var rans;

function init() {
    // document.querySelector("#add").addEventListener("click", addQuestion);
    // sequence = autoGen();
    // document.querySelector("#search").addEventListener("click", search);
    // document.querySelector("#login").addEventListener("click", login);
    document.querySelector("#getQ").addEventListener("click", recieveQues);

}

function recieveQues() {
    document.querySelector("#getQ").setAttribute("disabled", true)
    var pr = dbOperations.getQuestionList();
    pr.then(data => {
        // questionOperations.prepareQuestions(data.id, data.name, data.ans, data.opA, data.opB, data.opC, data.opD);
        //console.log("in receive Ques", data.id, data.name, data.ans, data.opA, data.opB, data.opC, data.opD);
        init2();
    }).catch(err => {
        console.log("err");
    });
}

function init2() {
    console.log("in init");
    bindEvents();
    questions = questionOperations.questions;
    // questions = questionOperations.prepareQuestions();
    printQuestion();
    disable();
    printStatus();
    timer();
    document.querySelector("#submit").addEventListener("click", submitAns);
    document.querySelector("#end").addEventListener("click", endTest);



}

function timer() {
    //var prTimer = startTimer(2, 1000, "time");
    // prTimer.then(data => {
    //     // alert(data);

    // }).catch(err => {
    //     console.log("error in timer promise");
    // });
    var min = 2;
    var sec = 10;
    var x = setInterval(function () {
        var a = new Date();
        document.getElementById("time").innerHTML = min + " : " + sec;
        sec--;
        if (sec == 00) {
            if (min == 0 && sec == 0) {
                clearInterval(x);
                // alert("time is over!!!");
                disableAll();
                endTest();
            }
            if (min == 0) {
                console.log(marks);
                // alert("Your Score is " + marks);
            }
            min--;
            sec = 60;
        }
    }, 1000);

}

function bindEvents() {
    document.querySelector("#prev").addEventListener("click", printPrev);
    document.querySelector("#next").addEventListener("click", printNext);
}

function printQuestion() {
    if (index < questions.length) {
        var question = questions[index];
        document.querySelector("#question").innerHTML = `Q${question.id}: ${question.name}`;
        document.querySelector("#opA").innerHTML = question.opA;
        document.querySelector("#opB").innerHTML = question.opB;
        document.querySelector("#opC").innerHTML = question.opC;
        document.querySelector("#opD").innerHTML = question.opD;
        rans = question.ans;
    }
    console.log("in printques", index);
    disable();
}
// function printQuestion(){
//     document.querySelector("#testDiv").className = "show";
//     questions = questionOperations.questions;
//         console.log("hi",questions);
//         document.querySelector("#question").innerHTML = `Q${questions[0].id}: ${questions[0].name}`;
//         disable();
// }

function disable() {
    console.log("index and length is ", index, questions.length - 1);
    if (index == 0) {
        // console.log("index and length is ",index,questions.length - 1);
        document.querySelector("#prev").setAttribute("disabled", true);
    } else {
        // console.log("index and length is ",index,questions.length - 1);
        document.querySelector("#prev").removeAttribute("disabled");
    }
    if (index >= questions.length - 1) {
        document.querySelector("#next").setAttribute("disabled", true);
        console.log("index and length is ", index, questions.length - 1);

    } else {
        document.querySelector("#next").removeAttribute("disabled");
    }
}


function printPrev() {
    console.log(index);
    index--;
    console.log(index);
    printQuestion();
}

function printNext() {
    console.log(index);
    index++;
    console.log(index);
    printQuestion();
}

function getQuestionId() {
    var temp = index;
    var id = parseInt(this.innerHTML);
    index = id - 1;
    printQuestion();
    console.log("in gwtQuesstion circle", index);
    index = temp; //or put index = 0 as the id-1 is messing up with index

}

function drawCircle(status, id) {
    var div = document.createElement("div");
    div.className = status ? "green" : "red";
    div.innerHTML = id;
    console.log("in draw circle", index);
    index = id - 1;
    div.addEventListener("click", getQuestionId);
    document.querySelector("#status").appendChild(div);
    console.log("in draw circle 2", index);
}

function printStatus() {
    for (let question of questions) {
        var id = question.id;
        var status = question.attempt;
        drawCircle(status, id);
    }
    index = 0;
    console.log("in printstatus", index);

}

function endTest() {
    document.querySelector("#total").innerHTML = "Your total marks is " + marks;
    disableAll();
}

function submitAns() {
    console.log("hhhhhhhhhhhhhhh", questions[index].attempt);
    questions[index].attempt = true
    var statusDiv = document.querySelector("#status");
    //to remove the child elements of the div as we are going to print once again
    while (statusDiv.firstChild) {
        statusDiv.removeChild(statusDiv.firstChild);
    }
    printStatus();
    console.log("hhhhhhhhhhhhhhh", questions[index].attempt);

    var option = document.getElementsByName("ans");

    var option_value;
    for (var a = 0; a < option.length; a++) {
        if (option[a].checked) {
            option_value = option[a].value;
        }
    }

    if (option_value == rans) {
        marks += 10;
    }
    if (index >= questions.length - 1) {} else {
        printNext();
    }

}

function disableAll() {
    document.querySelector("#prev").setAttribute("disabled", true);
    document.querySelector("#next").setAttribute("disabled", true);
    document.querySelector("#submit").setAttribute("disabled", true);

}