let scoreUser=0,scoreComputer = 0

function play(playerSelection,computerSelection){
    let computerChoice=['rock','paper','scissor']
    let counter=true;
    while (counter){
        if(scoreUser<5 && scoreComputer < 5 ){
            playerSelection=prompt("What is your choice?").toLowerCase();
            let rand=Math.floor(Math.random()*3);
            computerSelection=computerChoice[rand];
            if(playerSelection===computerSelection){
                console.log('User: ' + playerSelection + '\nComputer: ' + computerSelection + '\nEquality');
            }
            else if((playerSelection==='rock' && computerSelection==='scissor')||(playerSelection==='paper'&& computerSelection==='rock')||(playerSelection==='scissor'&&computerSelection==='paper')){
                console.log(`User's choice : ${playerSelection} \t;\tComputer's choice : ${computerSelection}`);
                scoreUser+=1;
                console.log(`user Win!!! ${playerSelection} beat ${computerSelection} \n\n score=> user: ${scoreUser} \t-\tcomputer: ${scoreComputer}`  )
            }
            else {
                console.log(`User's choice : ${playerSelection} \t;\tComputer's choice : ${computerSelection}`);
                scoreComputer+=1;
                console.log(`Computer Win!!! ${computerSelection} beat ${playerSelection} \n\n score=> user: ${scoreUser} \t-\tcomputer: ${scoreComputer}`  )
            }    
        }
        else{
            console.log((scoreUser>scoreComputer)?'congratulations, you WIN!!!':'Let\'s try again you lost');
            scoreComputer=0;
            scoreUser=0;
            counter=false;
        }
    }
}