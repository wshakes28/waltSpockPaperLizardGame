const player = document.querySelector("#player")
const playerScore = document.querySelector("#playerScore")
const playerChoice = document.querySelector("#playerChoice")
let theChoice = document.querySelector(".choice")

// ICONS

const playerRock = document.querySelector("#playerRock")
const playerPaper = document.querySelector("#playerPaper")
const playerScissors = document.querySelector("#playerScissors")
const playerLizard = document.querySelector("#playerLizard")
const playerSpock = document.querySelector("#playerSpock")

// Computer


const computer = document.querySelector("#computer")
let computerScore = document.querySelector("#computerScore")
let computerChoice = document.querySelector("#computerChoice")


// Computer Icons

const computerRock = document.querySelector("#computerRock")
const computerPaper = document.querySelector("#computerPaper")
const computerScissors = document.querySelector("#computerScissors")
const computerLizard = document.querySelector("#computerLizard")
const computerSpock = document.querySelector("#computerSpock")

// FA-Regular

let faRegular = document.querySelectorAll(".fa-regular").forEach(item => { item.addEventListener('click', e => {
  item.classList.toggle("red")
  
  
})})

const allGameIcons = document.querySelectorAll(".fa-regular")

let computerChoice2 = ''
let playerScoreNumber = 0
let computerScoreNumber = 0



// Reset & Result 

let reset = document.querySelector("#reset")
const resultText = document.querySelector("#resultText")



function select(playerChoice) {
  checkResult()
  //  update Player Choice
  switch (playerChoice) {
    
    case 'rock':
      
      theChoice.textContent = " --- Rock"
      
      break
    case 'paper':
      theChoice.textContent = " --- Paper"
      break
    case 'scissors':
      theChoice.textContent = " --- Scissors"
      break
    case 'lizard':
      theChoice.textContent = " --- Lizard"
      break
    case 'spock':
      theChoice.textContent = " --- Spock"
      break
      default:
      break
      


  }
}


// Add style and update computer choice text

function activateComputerChoice() {

  switch (computerChoice2) {
    
    case 'rock':
      
      computerChoice.textContent = " --- Rock"
      
      break
    case 'paper':
      computerChoice.textContent = " --- Paper"
      break
    case 'scissors':
      computerChoice.textContent = " --- Scissors"
      break
    case 'lizard':
      computerChoice.textContent = " --- Lizard"
      break
    case 'spock':
      computerChoice.textContent = " --- Spock"
      break
      default:
      break

}


}

//  Reset Selected

function resetSelected() {

  allGameIcons.forEach(icon => {
    icon.classList.remove("red")
  })

}


// Call functions to Process the turn

function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  activateComputerChoice()
  updateScore(playerChoice)
  console.log(playerChoice)

}

function computerRandomChoice() {

  const computerChoiceNumber = Math.random()
 if(computerChoiceNumber < 0.2) {
  computerChoice2 = 'rock'
 } else if (computerChoiceNumber <= 0.4) {
  computerChoice2 = 'paper'
 } else if (computerChoiceNumber <= 0.6) {
  computerChoice2 = 'scissors'

 } else if (computerChoiceNumber <= 0.8) {
  computerChoice2 = 'lizard'

 } else { computerChoice2 = 'spock'}
}

function updateScore(playerChoice) {
  if(playerChoice === computerChoice2) {
    resultText.textContent = "Draw"
  }


}







const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

