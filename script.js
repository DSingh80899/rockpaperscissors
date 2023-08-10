let computerScore = 0, playerScore = 0;

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

function playRound(playerSelection='rock', computerSelection='rock') {
    let pSelection = playerSelection.toLowerCase();

        if (pSelection == 'scissors'){
            switch (computerSelection){
                case 'rock':
                    computerScore++
                    return 'rock beats scissors.You lose'
                case 'paper':
                    playerScore++
                    return 'scissors beat paper. You win'
                case 'scissors':
                    return 'both scissors. You tie'    
            }
        }
        else if(pSelection == 'paper'){
            switch (computerSelection){
                case 'rock':
                    playerScore++
                    return 'paper beats rock.You win'
                case 'paper':
                    return 'both paper. You tie'
                case 'scissors':
                    computerScore++
                    return 'scissors beat paper. You lose'
            }
        }
        else if(pSelection == 'rock'){
            switch (computerSelection){
                case 'rock':
                    return 'both rock.You tie'
                case 'paper':
                    computerScore++
                    return 'paper beats rock. You lose'
                case 'scissors':
                    playerScore++
                    return 'rock beats scissors. You win'
            }
        }
        else{
            return 'Invalid selection. Please choose between rock , paper, scissors'
        }

  }

  const score= document.querySelector('.score')
  score.innerHTML= 'Your score: '+playerScore+' Computer score: '+computerScore 

 const buttons= document.querySelectorAll('button')
 buttons.forEach((button) =>{
    button.addEventListener('click', ()=> {
        
        let result = playRound(button.className,getComputerChoice())
        const divResults= document.querySelector('.results')

        if(computerScore==5){
            divResults.innerHTML = 'Computer won! game has been reset';
            computerScore=playerScore=0;
        }else if(playerScore==5){
            divResults.innerHTML = 'You won! game has been reset';
            computerScore=playerScore=0;
        }else{
            divResults.innerHTML = result;

        }  

        score.innerHTML= 'Your score: '+playerScore+' Computer score: '+computerScore     
    })
 })