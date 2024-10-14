// JavaScript for Avengers Trivia Quiz

const questions = [
    {
        question: "What is Captain America's shield made of?",
        options: ["Vibranium", "Adamantium", "Titanium", "Steel"],
        answer: 0
    },
    {
        question: "Who is the villain in the first Avengers movie?",
        options: ["Ultron", "Loki", "Thanos", "Hela"],
        answer: 1
    },
    {
        question: "What is the real name of Black Widow?",
        options: ["Wanda Maximoff", "Carol Danvers", "Natasha Romanoff", "Maria Hill"],
        answer: 2
    },
    {
        question: "What is the name of Thor’s hammer?",
        options: ["Stormbreaker", "Mjolnir", "Gungnir", "Jarnbjorn"],
        answer: 1
    },
    {
        question: "Which Infinity Stone was hidden on Vormir?",
        options: ["Mind Stone", "Soul Stone", "Time Stone", "Power Stone"],
        answer: 1
    },
    {
        question: "What is Iron Man’s real name?",
        options: ["Tony Stark", "Bruce Banner", "Steve Rogers", "Clint Barton"],
        answer: 0
    },
    {
        question: "Which Avenger is from Wakanda?",
        options: ["Hawkeye", "Black Panther", "Vision", "Falcon"],
        answer: 1
    },
    {
        question: "What alien race invades Earth in The Avengers (2012)?",
        options: ["Kree", "Skrulls", "Chitauri", "Dark Elves"],
        answer: 2
    },
    {
        question: "Who is the Scarlet Witch's brother?",
        options: ["Quicksilver", "Loki", "War Machine", "Hawkeye"],
        answer: 0
    },
    {
        question: "Which Avenger said 'I can do this all day'?",
        options: ["Iron Man", "Thor", "Captain America", "Hulk"],
        answer: 2
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const options = document.getElementById('quiz-options').children;

    questionElement.innerText = questions[currentQuestion].question;

    for (let i = 0; i < options.length; i++) {
        options[i].innerText = questions[currentQuestion].options[i];
    }
}

function checkAnswer(selectedOption) {
    const feedback = document.getElementById('quiz-feedback');
    if (selectedOption === questions[currentQuestion].answer) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong!";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('quiz-feedback').innerText = '';
    } else {
        document.getElementById('quiz-question').innerText = "You've completed the quiz!";
        document.getElementById('quiz-options').style.display = 'none';
        document.getElementById('quiz-feedback').innerText = '';
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
