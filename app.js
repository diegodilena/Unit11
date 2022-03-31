function game(){
    human()
    ran()
    people()
    AI()
    score()
}

function human() {
    var human = prompt("what is your name?")
    alert(`Hi ${human}, Welcome to the Twenty Game! The game is simple. Whoever gets closer to 20 wins, if you go over its an automatic lose. You will be playing againts my AI. GOOD LUCK.`)
    alert("You will go first")
    return human
}
human()

function ran() {
    var rand = Math.floor(Math.random() * 10) + 1
    return rand
}

function people(rand) {
    var pscore = 0;
    do{
        var rand = ran()
        var pscore = pscore + rand
        alert(`Its your turn. You got ${rand}`)
        var again = prompt(`Your total score is ${pscore}. Want to play again?`)
    } while(again == "y")

    return pscore
} 
people()

function AI(rand) {
    var cscore = 0;
    do{
        var rand = ran()
        var cscore = cscore + rand
        alert(`The computer got ${rand}`)
        alert(`The computer total is ${cscore}`)
    }while(again == "y")
    return cscore
}
AI()

function score(pscore , cscore) {
    if((cscore < pscore) && (pscore <= 20)){
        alert(`The AI scored ${cscore} and you scored ${pscore}.You WIN!!!`)
        HUMANscore++
    }else if(cscore == pscore){
        alert(`The AI scored ${cscore} and you scored ${pscore}.You TIE!!!!!`)
    }else if((cscore > pscore) && (pscore < 20)){
        alert(`The AI scored ${cscore} and you scored ${pscore}.You LOST!!!!`)
        COMPscore++
    }
    return score
}
score()

alert(`Your total wins are ${pscore}!!!`)




