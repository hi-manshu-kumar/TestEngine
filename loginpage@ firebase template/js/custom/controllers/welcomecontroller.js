redirect();
window.addEventListener("DOMContentLoaded",init);

function init(){
    if(localStorage.userid){
        document.querySelector("#username").innerHTML = localStorage.userid;
        document.querySelector("#usertype").innerHTML = localStorage.type;
    }
    if (localStorage.type == "Student"){
        document.querySelector("#takeTest").style.display = "block";
    }
    if  (localStorage.type == "Teacher"){
        document.querySelector("#createTest").style.display = "block";
    }
    document.querySelector("#takeT").addEventListener("click",takeTest);
    document.querySelector("#createT").addEventListener("click",createTest);
  
}

function redirect(){
    if(!localStorage.userid){
        location.href =  "index.html";
    }
};

function takeTest(){
    // location.href = "";
    location.href = "../../../takeTest/takeTest.html"
}

function createTest(){
    location.href = "../../../createTest/question.html"
}