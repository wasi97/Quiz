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
        c: "Bilawal bhutto"},
        correct: "Arif alvi"
    
},

{
    question: "CM of Sindh is ",
    answers:
        {
        a: "Murad Ali shah",
        b: "Qaim Ali Shah",
        c: "Mustafa kamal"},
        correct: "Murad Ali shah"
    
},

{
    question: "CM of Punjab is ",
    answers:
        {
        a: "Shehbaz Shareef",
        b: "Ch Shujaat",
        c: "Usman Buzdar"},
        correct: "Usman Buzdar"
    
},

{
    question: "CM of KPK is ",
    answers:
        {
        a: "Pervaiz Khatak",
        b: "Mehmood khan",
        c: "Pervaiz iqbal"},
        correct: "Mehmood khan"
    
}


]


var data = document.getElementById("data")

var question = document.getElementById("question");
var answer = document.getElementById("answer");
var startbtn = document.getElementById("startbtn")
var nextbtn = document.getElementById("nextBtn");
var submitbtn = document.getElementById("submitBtn")
var questionContainer = document.getElementById("q-container")
var final = document.getElementById("final")
var indexOfQuestion = 0;
var score = 0;
function showQuestion(){
    var questionNum = document.getElementById("q-no")
    questionNum.innerHTML = "Question "+(indexOfQuestion+1)+" of 5"
    // question appear here
    question.classList.add("question")
    
question.innerHTML = questions[indexOfQuestion].question;

// this button for option 1
var button = document.createElement("button")
button.classList.add("btn")
button.addEventListener("click", function(){select(this);})
button.innerText = questions[indexOfQuestion].answers.a;
button.classList.add("question")
answer.appendChild(button);

// this button for option 2
var button = document.createElement("button")
button.classList.add("btn")
button.addEventListener("click", function(){select(this);})
button.innerText = questions[indexOfQuestion].answers.b;
button.classList.add("question")
answer.appendChild(button)

// this button for option 3
var button = document.createElement("button")
button.classList.add("btn")
button.addEventListener("click", function(){select(this);})
button.innerText = questions[indexOfQuestion].answers.c;
button.classList.add("question")        
answer.appendChild(button)

}
// start the quiz
function startBtn(){
    data.classList.add("hide")
startbtn.classList.add("hide");
nextbtn.classList.remove("hide")
showQuestion()
}
// clear the question and answer container
function clearBtn(){
    question.innerHTML = "";
    answer.innerHTML = "";
}
// change background of selected button
function select(e){
    deselect()
    e.classList.add("selected")
    
}
// remove select class so at time one option is selected
function deselect(){
    var deselect = document.getElementsByClassName("selected");
    for(i=0; i<deselect.length;i++){
    deselect[i].classList.remove("selected")
    }
}
// validate the answer
function validate(){
    var validate = document.getElementsByClassName("selected");
   if(validate[0].innerText== questions[indexOfQuestion ].correct){
    score++
    
   }
   
}
// next question 
function nextBtn(){
    validate()
    clearBtn();
    indexOfQuestion++;
    showQuestion()
    if(indexOfQuestion == 4){
        nextbtn.classList.add("hide")
            submitbtn.classList.remove("hide")
        }
}

// submit button function
var nameBig = document.getElementById("nameBig")
var scoreTotal = document.getElementById("score")

function submitBtn(){
    validate()
    var player = document.getElementById("player").value;
    questionContainer.classList.add("hide")
    submitbtn.classList.add("hide")
    final.classList.remove("hide")
    nameBig.innerHTML = player;
    scoreTotal.innerText = "Score : "+score;
    
}
function restart(){
    location.reload();
}
