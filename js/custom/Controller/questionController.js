window.addEventListener("load",init);

var sequence;

function init(){
    document.querySelector("#add").addEventListener("click",addQuestion);
    sequence = autoGen();
    // document.querySelector("#search").addEventListener("click",search);
}

function addQuestion(){
    var questionId = sequence.next().value;
    var question = document.querySelector("#question").value;
    var ans = document.querySelector("#rans").value;
    var optionA =document.querySelector("#optionA").value; 
    var optionB =document.querySelector("#optionB").value; 
    var optionC =document.querySelector("#optionC").value; 
    var optionD =document.querySelector("#optionD").value; 
    var questionObject = new Question(questionId,question, ans,optionA,optionB,optionC,optionD);
   // var questionObject = new Question(1,question, ans);
   console.log("data added");
    dbOperations.addQuestion(questionObject);
    
}

function search(){
    var questionId = document.querySelector("#questionid").value;
    dbOperations.getQuestionById(questionId);
} 