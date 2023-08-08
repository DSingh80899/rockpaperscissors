function getComputerChoice(){
    let random = Math.floor(Math.random()*3)
    switch(random){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'

    }

}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();

        if (pSelection == 'scissors'){
            switch (computerSelection){
                case 'rock':
                    computerScore++
                    return 'rock beats scissors.You lose!'
                case 'paper':
                    playerScore++
                    return 'scissors beat paper. You win!'
                case 'scissors':
                    return 'both scissors. You tie!'    
            }
        }
        else if(pSelection == 'paper'){
            switch (computerSelection){
                case 'rock':
                    playerScore++
                    return 'paper beats rock.You win!'
                case 'paper':
                    return 'both paper. You tie!'
                case 'scissors':
                    computerScore++
                    return 'scissors beat paper. You lose!'
            }
        }
        else if(pSelection == 'rock'){
            switch (computerSelection){
                case 'rock':
                    return 'both rock.You tie!'
                case 'paper':
                    computerScore++
                    return 'paper beats rock. You lose!'
                case 'scissors':
                    playerScore++
                    return 'rock beats scissors. You win!'
            }
        }
        else{
            return 'Invalid selection. Please chose between rock , paper, scissors'
        }

  }

  function game(){

    let playerSelection, computerSelection;

    for(let i=0; i<5;i++){
        playerSelection = prompt("chose between rock,paper or scissors")
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer score: "+computerScore,"Player score: "+playerScore)
    }

    if(computerScore>playerScore)
        console.log("Computer wins!")
    else if (playerScore>computerScore)
        console.log("You Win!")
    else
        console.log("it's a tie")
  }
  
  let computerScore = 0, playerScore = 0;
  game();