let min = 1,
    max = 10,
    winCondition = 2,
    guessesLeft = 3

const gameWrapper = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max

gameWrapper.addEventListener('mousedown', (e)=>{
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value)
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, `red`)
    } else if (guess === winCondition){
       gameOver(true, `${winCondition} is correct! Congrations you done it!`)
    } else {
        guessesLeft -= 1

        if(guessesLeft === 0){
           gameOver(false, `Wrong! You get NOTHING! You LOSE! GOOD DAY, SIR`)
        } else {
            guessInput.value = ''
            setMessage(`NOPE! Try again. You have ${guessesLeft} guesses remaining`, 'red')
        }
    }
})

const gameOver = (won, msg) =>{
    let color
    won === true ? color = 'green' : color = 'red'

    guessInput.disabled = true;
    guessInput.style.borderColor = color
    message.style.color = color;
    setMessage(msg)

    guessBtn.value = 'Play Again?'
    guessBtn.classList.add('play-again')
}

const setMessage = (msg, color) =>{
    message.style.color = color
    message.textContent = msg
}

