
function computerPlay(){
    result =" ";
    // let randomnumber = Math.random() * (maximum - minimum) + minimum;
    let randomnumber = parseInt(Math.random() * (4 - 1) + 1);
    if(randomnumber==1)
        result="rock";
    else if(randomnumber==2)
        result="paper";
    else
        result="scissors";

    return result;
    
}


function disableButtons()
{
    buttons.forEach((button)=>{
        
        button.disabled=true;
    
    
    })

}

const container = document.querySelector('.container');
const para=document.createElement('p');
const playerScore=document.createElement('p');
const computerScore=document.createElement('p');
const finalScore=document.createElement('p');



  function playRound(playerSelection, computerSelection) {

    if(playerSelection==computerSelection)

   { para.textContent= `It's a draw!, we both played ${playerSelection}`;  }

    //win case  ///////////////////////////////
 else if(playerSelection=="rock"&&computerSelection=="scissors")
   { para.textContent="you won ! rock beats scissors ";
   user_wins++;

}
 else if(playerSelection=="scissors"&&computerSelection=="paper")
   { para.textContent= "you won ! scissors beats paper ";
   user_wins++;

}
 else if(playerSelection=="paper"&&computerSelection=="rock")
 {para.textContent="you won ! paper beats rock ";
 user_wins++;

}

    // lose case :///////////////////////////////////////
 else if(playerSelection=="scissors"&&computerSelection=="rock")
 {para.textContent="you lose ! rock beats scissors "; 
 computer_wins++;

}
 else if(playerSelection=="paper"&&computerSelection=="scissors")
 {para.textContent="you lose ! scissors beats paper ";
 computer_wins++;

}
 else if(playerSelection=="rock"&&computerSelection=="paper")
 {para.textContent="you lose ! paper beats rock ";
 computer_wins++;
}

playerScore.textContent=`player score : ${user_wins} `;
computerScore.textContent=`computer score : ${computer_wins}`;
para.style.fontWeight='bold';


container.appendChild(para);
container.appendChild(playerScore);
container.appendChild(computerScore);

if(user_wins===5)
{
   finalScore.textContent="congrats! YOU WON. Reload the page to play again ";
   container.appendChild(finalScore);
   disableButtons();
   
}   

if(computer_wins===5)
{
   finalScore.textContent="Game OVER! Reload the page to play again";
   container.appendChild(finalScore);
   disableButtons();



}   


  }






  let user_wins=0;
  let computer_wins=0;

  
  

  const buttons=document.querySelectorAll('button');

  buttons[0].addEventListener('click',function(){
      playRound(buttons[0].id,computerPlay()) });

  buttons[1].addEventListener('click',function(){
      playRound(buttons[1].id,computerPlay()) });

  buttons[2].addEventListener('click',function(){
      playRound(buttons[2].id,computerPlay()) });


  
  