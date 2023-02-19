const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = capitalizeFirstLetter(userChoice)
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    //console.log(randomNumber)
    if (randomNumber == 1) computerChoice = "rock"
    if (randomNumber == 2) computerChoice = "paper"
    if (randomNumber == 3) computerChoice = "scissor"
    computerChoiceDisplay.innerHTML = capitalizeFirstLetter(computerChoice)

}

function getResult() {
    if (computerChoice == userChoice) {
        result = "Draw!"
    }
    if (computerChoice == "rock" && userChoice == "scissor") {
        result = "Computer Win!"
    }
    if (computerChoice == "scissor" && userChoice == "rock") {
        result = "You Win!"
    }
    if (computerChoice == "paper" && userChoice == "scissor") {
        result = "You Win!"
    }
    if (computerChoice == "scissor" && userChoice == "paper") {
        result = "Computer Win!"
    }
    if (computerChoice == "rock" && userChoice == "paper") {
        result = "User Win!"
    }
    if (computerChoice == "paper" && userChoice == "rock") {
        result = "Computer Win!"
    }
    resultDisplay.innerHTML = result

} 