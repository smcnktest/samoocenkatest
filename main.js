// Логика теста
const yesBtns = document.querySelectorAll('.answer-yes');
const noBtns = document.querySelectorAll('.answer-no');
const idkBtns = document.querySelectorAll('.answer-idk');

let score = 0;

function clickYes(btn) {
    score += 2;
    disableQuestionBtns(btn)
    endGame();
}

function clickNo(btn) {
    disableQuestionBtns(btn)
    endGame();
}

function clickIdk(btn) {
    score += 1;
    disableQuestionBtns(btn)
    endGame();
}

function disableQuestionBtns(currentBtn) {
    currentBtn.style = "border: 2px solid black"
    const div = currentBtn.parentElement;
    const btns = Object.values(div.getElementsByTagName('button'));
    btns.forEach((btn) => {btn.disabled = true})
}

let count = 0;
function endGame() {
    count += 1;
    if (count === 16) {
        showPopup();
    }
}

yesBtns.forEach(btn => btn.addEventListener('click', () => clickYes(btn)));
noBtns.forEach(btn => btn.addEventListener('click', () => clickNo(btn)));
idkBtns.forEach(btn => btn.addEventListener('click', () => clickIdk(btn)));

// Приветствие
let greeting = document.getElementById('greeting');
let start = document.getElementById('start');

function hidePopup() {
    greeting.style.opacity = "0"
    greeting.style.visibility = "hidden"
}

start.addEventListener('click', hidePopup);

// Завершение
let finish = document.getElementById('finish');
let resultText = document.getElementById('result');
function showPopup() {
    finish.style.opacity = "1"
    finish.style.visibility = "visible"
    if (score < 12) {
        resultText.textContent = "низкий";
    } else if (score < 24) {
        resultText.textContent = "средний";
    } else {
        resultText.textContent = "высокий";
    }
    
}













