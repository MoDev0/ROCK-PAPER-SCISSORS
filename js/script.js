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

function userPlay (){

    res= prompt("your turn ! ");
    return res.toLowerCase();



}

/*function playRound(playerSelection, computerSelection) {
    res=0;
     if(playerSelection==computerSelection)
        res="we are even!";  
        //win case  //
     else if(playerSelection=="rock"&&computerSelection=="scissors")
        res="you won ! rock beats scissors "
     else if(playerSelection=="scissors"&&computerSelection=="paper")
        res="you won ! scissors beats paper "
     else if(playerSelection=="paper"&&computerSelection=="rock")
        res="you won ! paper beats rock "
        // lose case ://
     else if(playerSelection=="scissors"&&computerSelection=="rock")
        res="you lose ! rock beats scissors "
     else if(playerSelection=="paper"&&computerSelection=="scissors")
        res="you lose ! scissors beats paper "
     else if(playerSelection=="rock"&&computerSelection=="paper")
        res="you lose ! paper beats rock "
    

    return res;
  }*/



  function playRound(playerSelection, computerSelection) {
    res=0;
     if(playerSelection==computerSelection)
        res=-1;  
        //win case  //
     else if(playerSelection=="rock"&&computerSelection=="scissors")
        res=1;
     else if(playerSelection=="scissors"&&computerSelection=="paper")
        res=1;
     else if(playerSelection=="paper"&&computerSelection=="rock")
        res=1;
        // lose case ://
     else if(playerSelection=="scissors"&&computerSelection=="rock")
        res=0;
     else if(playerSelection=="paper"&&computerSelection=="scissors")
        res=0;
     else if(playerSelection=="rock"&&computerSelection=="paper")
        res=0;
    

    return res;
  }








  function Game(){
      let user_wins=0;
      let computer_wins=0;
      let playerSelection = " ";
      let computerSelection =" ";
      let res=0;
    

    for (let i = 0; i < 5; i++) {
        playerSelection = userPlay();
        computerSelection = computerPlay();
        res=playRound(playerSelection,computerSelection);

        if(res==1)
           
        {
         user_wins++;
         console.log("You Win!")

        }
        else if(res==0)
        {
            console.log("You lose!")
            computer_wins++;   } 

        else
            console.log("Draw!")    

    }

    if(user_wins>computer_wins)
        console.log("Victory!");
    else if(computer_wins>user_wins)
        console.log("Defeat!");
    else
        console.log("Draw !");



     

  }

  
//   const player_input = userPlay();
//   const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  