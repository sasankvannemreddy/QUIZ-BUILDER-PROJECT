let questions = [
    {
        question: "What is HTML?",
        options: [
            "Markup Language",
            "Programming Language",
            "Database",
            "Operating System"
        ],
        answer: 0
    },

    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Style Syntax",
            "Colorful Style Sheets"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<img>",
            "<link>",
            "<a>",
            "<href>"
        ],
        answer: 2
    },

    {
        question: "Which JavaScript keyword declares a constant variable?",
        options: [
            "var",
            "let",
            "static",
            "const"
        ],
        answer: 3
    },

    {
        question: "Which HTML tag is used to display an image?",
        options: [
            "<img>",
            "<image>",
            "<pic>",
            "<src>"
        ],
        answer: 0
    },

    {
        question: "Which HTML tag creates the largest heading?",
        options: [
            "<h6>",
            "<h1>",
            "<heading>",
            "<head>"
        ],
        answer: 1
    },

    {
        question: "Which technology is used to handle button clicks?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "What is the best way to process every question in an array?",
        options: [
            "Use a loop",
            "Use CSS",
            "Use an HTML comment",
            "Use only alert()"
        ],
        answer: 0
    },

    {
        question: "Why is JavaScript important in a quiz application?",
        options: [
            "It provides page structure",
            "It controls logic and interaction",
            "It only changes colors",
            "It stores images"
        ],
        answer: 1
    },

    {
        question: "What is Git?",
        options: [
            "A database",
            "A web browser",
            "A version control system",
            "A programming language"
        ],
        answer: 2
    },

    {
        question: "What is GitHub?",
        options: [
            "An online platform for Git repositories",
            "A programming language",
            "An operating system",
            "A code compiler"
        ],
        answer: 0
    },

    {
        question: "Which command downloads an existing repository?",
        options: [
            "git push",
            "git clone",
            "git add",
            "git commit"
        ],
        answer: 1
    },

    {
        question: "Why are branches used in Git?",
        options: [
            "To delete repositories",
            "To increase internet speed",
            "To create separate development lines",
            "To compile JavaScript"
        ],
        answer: 2
    },

    {
        question: "What is a commit?",
        options: [
            "A recorded snapshot of changes",
            "A new HTML tag",
            "A JavaScript function",
            "A GitHub password"
        ],
        answer: 0
    },

    {
        question: "Which property controls space inside an element?",
        options: [
            "margin",
            "border",
            "padding",
            "spacing"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let selectedAnswer = -1;
let score = 0;


/* Buttons */

document.getElementById("startBtn").addEventListener("click", startQuiz);

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

document.getElementById("restartBtn").addEventListener("click", restartQuiz);


/* Start Quiz */

function startQuiz() {

    currentQuestion = 0;
    selectedAnswer = -1;
    score = 0;

    document.getElementById("home").classList.add("hidden");

    document.getElementById("result").classList.add("hidden");

    document.getElementById("quiz").classList.remove("hidden");

    showQuestion();
}


/* Show Question */

function showQuestion() {

    let q = questions[currentQuestion];

    let optionsBox = document.getElementById("quizOptions");

    selectedAnswer = -1;

    document.getElementById("quizQuestion").textContent =
        q.question;

    optionsBox.innerHTML = "";


    q.options.forEach(function(option, index) {

        let button = document.createElement("button");

        button.textContent = option;

        button.className = "quiz-option";


        button.addEventListener("click", function() {

            /* Prevent selecting another answer */

            if (selectedAnswer !== -1) {
                return;
            }

            selectedAnswer = index;


            /* Correct answer */

            if (index === q.answer) {

                score++;

                button.textContent =
                    option + " ✓ Correct Answer!";

                button.classList.add("correct");

            }


            /* Wrong answer */

            else {

                button.textContent =
                    option + " ✗ Wrong Answer!";

                button.classList.add("wrong");


                /* Show correct answer */

                let correctButton =
                    optionsBox.children[q.answer];

                correctButton.textContent =
                    q.options[q.answer] +
                    " ✓ Correct Answer!";

                correctButton.classList.add("correct");
            }


            /* Disable all options */

            document.querySelectorAll(".quiz-option")
                .forEach(function(btn) {

                    btn.disabled = true;

                });

        });


        optionsBox.appendChild(button);

    });


    document.getElementById("progress").textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;
}


/* Next Question */

function nextQuestion() {

    if (selectedAnswer === -1) {

        alert("Please select an answer.");

        return;
    }

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }
}


/* Show Result */

function showResult() {

    document.getElementById("quiz")
        .classList.add("hidden");

    document.getElementById("result")
        .classList.remove("hidden");


    document.getElementById("score").textContent =
        "Your score: " +
        score +
        " / " +
        questions.length;


    let answersBox =
        document.getElementById("answers");

    answersBox.innerHTML = "";


    questions.forEach(function(q, index) {

        let item = document.createElement("p");


        /* Question */

        let question = document.createElement("b");

        question.textContent =
            (index + 1) +
            ". " +
            q.question;


        /* Correct Answer */

        let answer = document.createElement("span");

        answer.textContent =
            "Correct Answer: " +
            q.options[q.answer];


        item.appendChild(question);

        item.appendChild(
            document.createElement("br")
        );

        item.appendChild(answer);

        answersBox.appendChild(item);

    });
}


/* Restart Quiz */

function restartQuiz() {

    document.getElementById("result")
        .classList.add("hidden");

    document.getElementById("home")
        .classList.remove("hidden");


    currentQuestion = 0;

    selectedAnswer = -1;

    score = 0;
}