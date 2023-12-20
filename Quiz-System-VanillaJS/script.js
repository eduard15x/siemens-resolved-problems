import quizData from './quizData.json' assert { type: "json" };

const questionsData = quizData;
const questionAnswersArr = ['A', 'B', 'C', 'D'];
let questionsAnswered = 0;
let correctAnswers = 0;

const progressContainer = document.querySelector('.quiz-progress');
const progressBar = document.querySelector('.quiz-progress .bar');
const progressStatus = document.querySelector('.quiz-progress .status');
const questionsContainer = document.querySelector('.questions-container');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');

const resultContainer = document.querySelector('.result');
const resultTitle = document.querySelector('.result .title');
const resetContainer = document.querySelector('.reset-container');

resetContainer.addEventListener('click', resetQuiz);

checkQuiz();
displayQuestion(questionsAnswered);

function checkQuiz() {
    progressBar.style.width = `${questionsAnswered / questionsData.length * 100}%`;
    progressStatus.innerHTML = `${questionsAnswered + 1} out of ${questionsData.length} questions`;

    if (questionsAnswered >= questionsData.length) {
        progressContainer.classList.add('hidden');
        questionsContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        resultTitle.innerHTML += ` ${correctAnswers} of ${questionsData.length}`;
        resetContainer.classList.remove('hidden');
    }
}

function displayQuestion(questionNr) {
    const questionName = questionsData[questionNr].question;
    const correctAns = questionsData[questionNr].answer;

    question.innerHTML = questionName;

    answers.forEach((answer, index) => {
        answer.removeEventListener('click', answerClickHandler);
        answer.innerHTML = questionsData[questionNr][questionAnswersArr[index]];
        answer.dataset.currentAnswerOption = questionAnswersArr[index];
        answer.dataset.correctAnswer = correctAns;
        answer.addEventListener('click', answerClickHandler);
    });
}

function answerClickHandler(event) {
    const selectedAnswer = event.target.dataset.currentAnswerOption;
    const correctAnswer = event.target.dataset.correctAnswer;
    selectAnswer(selectedAnswer, correctAnswer);
};

function selectAnswer(selectedAnswer, questionCorrectAnswer) {
    if (selectedAnswer === questionCorrectAnswer) {
        correctAnswers++;
    }

    questionsAnswered++;
    checkQuiz();

    if (questionsAnswered < questionsData.length) {
        displayQuestion(questionsAnswered);
    }
}

function resetQuiz() {
    questionsAnswered = 0;
    correctAnswers = 0;
    checkQuiz();
    displayQuestion(questionsAnswered);

    progressContainer.classList.remove('hidden');
    questionsContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    resultTitle.innerHTML = `Correct answers:`;
    resetContainer.classList.add('hidden');
}
