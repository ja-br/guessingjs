let min = 1,
    max = 10,
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

guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value)
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, `red`)
    }

    if(guess === winCondition){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green'
        setMessage(`${winCondition} is correct! Congrations you done it!`, 'green')
    } else {
        guessesLeft -= 1

        if(guessesLeft === 0){
            guessInput.disabled = true;
            guessInput.style.borderColor = 'green'

            setMessage(`Wrong! You get NOTHING! You LOSE! GOOD DAY, SIR`, 'red')
        } else {
            guessInput.value = ''
            setMessage(`NOPE! Try again. You have ${guessesLeft} guesses remaining`, 'red')
        }
    }
})

const setMessage = (msg, color) =>{
    message.style.color = color
    message.textContent = msg
}

