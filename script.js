// ===============DATA===============
// ==================================
const DB_QUiZ = [{
        question: "Bagaimana Kabarmu hari ini?",
        answers: ['Sangat baik', 'baik', 'kurang baik', 'tidak baik']
    },
    {
        question: "Libur ngapain aja?",
        answers: ['belajar', 'main', 'nonton', 'rebahan']
    },
    {
        question: "Perempuan jadi programmer?",
        answers: ['Luar biasa', 'biasa aja', 'emang bisa', 'mungkin']
    }
]

const CORRECT_ANSWER = [0, 0, 0]

// ===============Question Setup===============
// ==================================

let current_question = 0
let total_score = 0
let saved_answer = []

document.addEventListener("DOMContentLoaded", function (event) {
    setupQuestion()
});

function setupQuestion() {
    document.getElementById('question').innerText = DB_QUiZ[current_question]['question']
    document.getElementById('choiceText0').innerText = DB_QUiZ[current_question]['answers'][0]
    document.getElementById('choiceText1').innerText = DB_QUiZ[current_question]['answers'][1]
    document.getElementById('choiceText2').innerText = DB_QUiZ[current_question]['answers'][2]
    document.getElementById('choiceText3').innerText = DB_QUiZ[current_question]['answers'][3]
}



function nextQuestion() {
    current_question++

    saveAnswer()

    if (current_question > DB_QUiZ.length - 1){
        stopQuiz()
    }
    resetState()
    setupQuestion()
}

function stopQuiz() {
    checkScore()
    document.getElementById('quiz_window').style.display = "none"
    document.getElementById('closing_window').style.display = "block"
    document.getElementById('score').innerText = "Score Kamu " + total_score
    return
}

function saveAnswer(){
    const answer = document.querySelector('input[name="choices"]:checked');
    if (answer != null) {
        saved_answer.push(parseInt(answer.getAttribute('data-id')))
    }else{
        // default answer ketika user tidak memilih jawaban
        saved_answer.push(0)
    }
}
function checkScore(){
    for (i = 0; i < saved_answer.length; i++) {
        if (saved_answer[i] == CORRECT_ANSWER[i]) {
            total_score += 100
        }
    }
}
function resetState() {
    const chooseAnswer = document.querySelector('input[name="choices"]:checked')
    if (chooseAnswer != null) {
        chooseAnswer.checked = false
    }
}
function startQuiz() {
    document.getElementById('opening_window').style.display = "none"
    document.getElementById('quiz_window').style.display = "block"
}