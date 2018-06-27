window.addEventListener("DOMContentLoaded", init);
var isShowHide = false;
var isShowHideReg = false;
var x= 0;

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
    document.querySelector("#loginBt").addEventListener("click",doLogin);
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
        localStorage.type = data.
        
        type;
    }).catch(err => {
        console.log(err);
        document.querySelector("#message").innerHTML = "Invalid User id or password";
    });
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


