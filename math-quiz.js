var lscheck = "checking done!";
var username = "";
var password = "";
var currentpg = "Login"; //to check and stuff

function login()
{
        window.location = "quizpage.html";
        username = document.getElementById('username1').innerHTML;
        password = document.getElementById('password1').innerHTML;
        console.log(lscheck);
        currentpg = "quizpg";
}

function newACC() {
    //do nothing
}