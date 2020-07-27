var questions = [
{
    question: "PM of pakistan is ",
    answers:
        {
        a: "Imran Khan",
        b: "nawaz shareef",
        c: "pervaiz musharaf"},
        correct: "Imran Khan"
    
},

{
    question: "President of pakistan is ",
    answers:
        {
        a: "Arif alvi",
        b: "nawaz shareef",
        c: "pervaiz musharaf"},
        correct: "Arif alvi"
    
}


]





var thanks = document.getElementById("thanks")
var start = document.getElementById("start");
var next = document.getElementById ("next")
var questionContainer = document.getElementById ("q-container");
var question = document.getElementById ("question")
var submit = document.getElementById("submit")

var answer1 = document.getElementById("ans1")
var answer2 = document.getElementById("ans2")
var answer3 = document.getElementById("ans3")

var indexOfQuestion = 0;

function showQuestion(){
    question.innerHTML = questions[indexOfQuestion].question 
     answer1.innerHTML = questions[indexOfQuestion].answers.a; 
     answer2.innerHTML = questions[indexOfQuestion].answers.b; 
     answer3.innerHTML = questions[indexOfQuestion].answers.c; 
}

function startBtn(){
    start.classList.add("hide");
     questionContainer.classList.remove("hide")
     showQuestion();
    
     next.classList.remove("hide");
     
     
     

}


function nextques(){
removeClass()
indexOfQuestion++;
showQuestion();
if(questions.length-1 == true){
next.classList.add("hide")
    submit.classList.remove("hide")
}

    
}

function check(e){
removeClass()
if(e.innerHTML== questions[indexOfQuestion ].correct ) {
  e.classList.add("right");
 
}
  else{
    e.classList.add("wrong");
  }
}

    
    



function removeClass(){
    var rem = document.getElementsByClassName("right")
    for(i=0; i< rem.length; i++){
        rem[i].classList.remove("right")
    }
  var rem1 = document.getElementsByClassName("wrong")
    for(i=0; i< rem1.length; i++){
        rem1[i].classList.remove("wrong")
    }  
    
    
}

function submitBtn(){
submit.classList.add("hide");
questionContainer.classList.add("hide");
thanks.innerHTML ="Thank you"
}









