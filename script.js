function getcomputerchoice() {
    const choice=["rock","paper","scissor"];
    const rand=Math.floor(Math.random()*3);
    return choice[rand];
}
function gethumanchoice() {
    const choices=prompt("Enter your choice (rock, paper, scissor): ");
    return choices;
}

function playround(human,computer) {
    if (human === computer){
        console.log("it is a tie");
    }
    else if((human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock") || (human === "scissor" && computer === "rock") ){
        humanscore++;
        return console.log("human wins this round");
    }
    else{
        computerscore++;
        return console.log("computer wins this round");
    }
}
const humanselection =gethumanchoice();
const computerselection =getcomputerchoice();
function game() {
    for (let i=0;i<=5;i++){
        const humanselection =gethumanchoice();
        console.log(`human choice is ${humanselection}`)
        const computerselection =getcomputerchoice();
        console.log(`computer choice is ${computerselection}`);
        playround(humanselection,computerselection);
        console.log(`human score is ${humanscore}`);
        console.log(`computer score is ${computerscore}`);
    }
}
game();

