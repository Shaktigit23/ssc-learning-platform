/* SSC Learning Platform Quiz Script */

let currentQuestions = [];
let score = 0;
let currentQuestionIndex = 0;

/* Question Database */
const quizData = {

math: {
"Chapter 1: Numbers":[
{
question:"What is the smallest natural number?",
options:["0","1","2","3"],
answer:"1"
},
{
question:"10 + 15 = ?",
options:["20","25","30","35"],
answer:"25"
}
],

"Chapter 2: Multiplication":[
{
question:"12 × 6 = ?",
options:["72","60","66","80"],
answer:"72"
},
{
question:"9 × 8 = ?",
options:["72","64","70","81"],
answer:"72"
}
]
},

science:{
"Chapter 1: Food Sources":[
{
question:"Plants prepare food by?",
options:["Photosynthesis","Respiration","Digestion","Absorption"],
answer:"Photosynthesis"
}
],

"Chapter 2: Components of Food":[
{
question:"Energy giving nutrient?",
options:["Carbohydrates","Vitamins","Water","Minerals"],
answer:"Carbohydrates"
}
]
},

english:{
"Chapter 1: Nouns":[
{
question:"Which word is a noun?",
options:["Run","School","Quickly","Blue"],
answer:"School"
}
],

"Chapter 2: Pronouns":[
{
question:"Which is a pronoun?",
options:["He","Table","Book","Chair"],
answer:"He"
}
]
},

social:{
"Chapter 1: India":[
{
question:"Capital of India?",
options:["Mumbai","Delhi","Chennai","Kolkata"],
answer:"Delhi"
}
],

"Chapter 2: Freedom Fighters":[
{
question:"Who is known as Father of Nation?",
options:["Gandhi","Nehru","Bose","Patel"],
answer:"Gandhi"
}
]
}

};

/* Load Chapters */
function loadSubject(subject){

const chapters = quizData[subject];
let chapterHTML = "";

for(let chapter in chapters){

chapterHTML += `<button class="chapter-btn" onclick="startQuiz('${subject}','${chapter}')">${chapter}</button>`;

}

document.getElementById("chapters").innerHTML = chapterHTML;
document.getElementById("quiz").innerHTML = "";
document.getElementById("score").innerHTML = "";

}

/* Start Quiz */
function startQuiz(subject,chapter){

currentQuestions = quizData[subject][chapter];
currentQuestionIndex = 0;
score = 0;

showQuestion();

}

/* Display Question */
function showQuestion(){

const q = currentQuestions[currentQuestionIndex];

let html = `<div class="question">

<p>Question ${currentQuestionIndex+1}: ${q.question}</p>`;

q.options.forEach(option => {

html += `<div class="option" onclick="selectAnswer('${option}')">${option}</div>`;

});

html += "</div>";

document.getElementById("quiz").innerHTML = html;

}

/* Answer Selection */
function selectAnswer(selected){

const correct = currentQuestions[currentQuestionIndex].answer;

if(selected === correct){

alert("✅ Correct Answer");
score++;

}else{

alert("❌ Wrong Answer\nCorrect Answer: " + correct);

}

currentQuestionIndex++;

if(currentQuestionIndex < currentQuestions.length){

showQuestion();

}else{

showScore();

}

}

/* Show Final Score */
function showScore(){

document.getElementById("quiz").innerHTML = "";

document.getElementById("score").innerHTML =
"🎓 Your Score: " + score + " / " + currentQuestions.length;

}

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

fetch("users.json")
.then(res => res.json())
.then(data => {

let user = data.users.find(
u => u.username === username && u.password === password
);

if(user){

localStorage.setItem("student",username);

window.location.href = "dashboard.html";

}else{

document.getElementById("loginMessage").innerHTML =
"Invalid username or password";

}

});

}
