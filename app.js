function game(){
    human()
    ran()
    people()
    AI()
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
    console.log(rand)
    return rand
}

function people() {
    alert(`You got ${ran()}`)
    return people
} 
people()

function AI() {
    alert(`The computer got ${ran()}`)
    return AI
}
AI()

function score() {

}



