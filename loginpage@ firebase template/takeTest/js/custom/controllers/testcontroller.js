window.addEventListener("load", init);
var sequence;

function init() {
    // document.querySelector("#add").addEventListener("click", addQuestion);
    // sequence = autoGen();
    // document.querySelector("#search").addEventListener("click", search);
    // document.querySelector("#login").addEventListener("click", login);
    document.querySelector("#getQ").addEventListener("click", recieveQues);
}

function recieveQues() {
    var pr = dbOperations.getQuestionList();
    pr.then(data => {
        // questionOperations.prepareQuestions(data.id, data.name, data.ans, data.opA, data.opB, data.opC, data.opD);
        //console.log("in receive Ques", data.id, data.name, data.ans, data.opA, data.opB, data.opC, data.opD);
    }).catch(err => {
        console.log("err");
    });
}