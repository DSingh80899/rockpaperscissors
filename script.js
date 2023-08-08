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
                    return 'rock beats scissors.You lose!'
                case 'paper':
                    return 'scissors beat paper. You win!'
                case 'scissors':
                    return 'both scissors. You tie!'    
            }
        }
        else if(pSelection == 'paper'){
            switch (computerSelection){
                case 'rock':
                    return 'paper beats rock.You win!'
                case 'paper':
                    return 'both paper. You tie!'
                case 'scissors':
                    return 'scissors beat paper. You lose!'
        }else if(pSelection == 'rock'){
            switch (computerSelection){
                case 'rock':
                    return 'both rock.You tie!'
                case 'paper':
                    return 'paper beats rock. You lose!'
                case 'scissors':
                    return 'rock beats scissors. You win!'
        }else{
            return 'Invalid selection. Please chose between rock , paper, scissors'
        }

  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));