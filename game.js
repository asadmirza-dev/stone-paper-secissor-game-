let userscore = 0;
let compscore = 0;
let msg = document.getElementById("btn")
let userscorepara = document.getElementById('user-score')
let compscorepara = document.getElementById('comp-score')

const choices = document.querySelectorAll('.choices');
const gencompchoice = () =>{
    const option = [ 'rock', 'paper', 'scissor'];
    const randomidx = Math.floor(Math.random()*option.length);
    return option[randomidx];
}
choices.forEach(choice => {
    choice.addEventListener('click',()=>{
        const userchoice = choice.getAttribute('id');
        playgame(userchoice)
        // console.log(`the choice was clicked ${userchoice}`);
    })
});
    
let drawgame = ()=>{
    console.log("the game was draw")
      msg.innerText = "Game was draw Please Try Again!"
        msg.style.backgroundColor = "grey"
        msg.style.padding = "1rem 0.7rem"
}// 
const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win!")
        userscore++;
        userscorepara.innerText = userscore
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
    }
    else{
        console.log("you loss!")
         compscore++;
        compscorepara.innerText = userscore
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red"

    }
}
const playgame = (userchoice)=>{

    const compchoice = gencompchoice()
        let userwin = true;

    if(userchoice === compchoice){
        drawgame();
       return;
    }
        else{
        if(userchoice === 'rock'){
            // paper , scissor
            userwin = compchoice == 'paper ' ? false : true;
        }else if(userchoice === 'paper'){
            // rock , scissor
            userwin = compchoice == ' scissor' ? true : false;

        }else{
            // rock ,paper
            userwin = compchoice == 'rock' ? false : true;
        }
        }
        showwinner(userwin,userchoice,compchoice);
}
