let min = 1,
    max = 15,
    winCondition = 2,
    guessesLeft = 3

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max