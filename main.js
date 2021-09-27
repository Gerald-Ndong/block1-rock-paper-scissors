let mainElement = document.querySelector("#main")
let graphElement = document.querySelector("#graph")
let resultElement = document.querySelector("#result")

let rockButton = document.createElement("button")
rockButton.append("Rock💎")
mainElement.append(rockButton)

let paperButton = document.createElement("button")
paperButton.append("Paper📃")
mainElement.append(paperButton)

let scissorsButton = document.createElement("button")
scissorsButton.append("Scissors✂")
mainElement.append(scissorsButton)



rockButton.addEventListener('click', playGame)
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)

let Choices = ["Rock💎", "Paper📃", "Scissors✂"]

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3)
    return Choices[choiceIndex]
}

function playGame(event) {
    let playerChoice = event.target.innerText
    let computerChoice = getComputerChoice()

        console.log("player chose", playerChoice)
        console.log("computer chose", computerChoice)
        resultElement.textContent = ""

        if (playerChoice === computerChoice) {
            resultElement.append("It's a draw!!!")
            
        }
        if (playerChoice === "Rock💎" && computerChoice === "Paper📄") {
            resultElement.append("Paper📄 covers Rock💎. You lose.😪😪😪")
            
        }

        if (playerChoice === "Rock💎" && computerChoice === "Scissors✂ ") {
            resultElement.append("Rocks breaks Scissors ✂. You Win.😃😀🙌🍸")
            
        }

        if (playerChoice === "Paper📄" && computerChoice === "Rock💎") {
            resultElement.append("Paper📄 covers Rock💎. You Win.😃😀🙌🍸")
        }

        if (playerChoice === "Paper📄" && computerChoice === "Scissors✂ ") {
            resultElement.append("Scissors✂ cuts Paper📄. You lose.😪😪😪")
            
        }
        
        if (playerChoice === "Scissors✂ " && computerChoice === "Rock💎") {
            resultElement.append("Rock💎 breaks Scissors✂. You lose.😪😪😪")
            
        }
        
        if (playerChoice === "Scissors✂ " && computerChoice === "Paper📄") {
            resultElement.append("Scissors✂ cuts Paper📄. You Win.😃😀🙌🍸")
            
        }
  
      


    
}