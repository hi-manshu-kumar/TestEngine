window.addEventListener("DOMContentLoaded", init);
var isShowHide = false;
var isShowHideReg = false;
var x= 0;
var sequence;
function init(){
    
    showHide();
    showHideReg();
    bindEvents();
    clearLocal();
}  

const clearLocal = () => localStorage.clear();

function bindEvents(){
    document.querySelector("#login").addEventListener("click",show);
    document.querySelector("#register").addEventListener("click",showReg);
    sequence =autoGen();
    document.querySelector("#loginBt").addEventListener("click",doLogin);
    document.querySelector("#regBt").addEventListener("click",doReg);    
}

function doLogin(){
    var userid = document.querySelector("#useridtxt").value;
    var password = document.querySelector("#passwordtxt").value;
    // if( userOperations.search(userid,password) == true ){
    //     localStorage.userid = userid;
    //     location.href = "welcome.html";
    // }
    // else{
    //  document.querySelector("#message").innerHTML = "Invalid User id or password";
        
    // }
    var pr = dbOperations.match(userid, password);
    localStorage.userid = userid;
    //localStorage.type = type;
    pr.then(data => {
        
        location.href = "welcome.html";
        console.log("inside then");
        localStorage.type = data.type;
    }).catch(err => {
        console.log(err);
        document.querySelector("#message").innerHTML = "Invalid User id or password";
    });
}

function doReg(){ 
    var id = sequence.next().value;
    var user = document.querySelector("#userid").value;
    var pwd = document.querySelector("#password").value;
    var name =document.querySelector("#name").value; 
    var age =document.querySelector("#age").value; 
    var type = document.querySelector("#type").value;
    // var optionC =document.querySelector("#optionC").value; 
    // var optionD =document.querySelector("#optionD").value; 
    var userObject = new User(id,user,pwd,name,age,type);
   // var questionObject = new Question(1,question, ans);
   console.log("data added");
    dbOperations.addUser(userObject);
alert("You have been Registered");
}

function show(){
    isShowHide =  true;
    isShowHideReg = false;
    showHide();
    showHideReg();
}

function showReg(){
    isShowHideReg = true;
    isShowHide=false;
    showHideReg();
    showHide();
}

const showHide = () =>  document.querySelector("#loginDiv").className  = isShowHide?'show':'hide';
const showHideReg = () =>  document.querySelector("#regDiv").className  = isShowHideReg?'show':'hide';


