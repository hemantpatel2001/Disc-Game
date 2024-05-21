let target = 0
let remaningChanceplayer1 = 0
let remaningChanceplyer2 = 0
let scorePlayer1 = 0
let scorePlayer2 = 0
let player1turn = true;

function updateui() {
    document.getElementById("scorePlayer1").innerText = scorePlayer1;
    document.getElementById("remaningChancePlayer1").innerText = remaningChanceplayer1;
    document.getElementById("scorePlayer2").innerText = scorePlayer2;
    document.getElementById("remaningChanceplayer2").innerText = remaningChanceplyer2
}

document.getElementById("play").addEventListener("click", function () {
    target = document.getElementById("target").value
    remaningChanceplayer1 = document.getElementById("remaningChanceInp").value
    remaningChanceplyer2 = document.getElementById("remaningChanceInp").value

    updateui()
    document.getElementById("player1container").classList.remove("d-none")
    document.getElementById("plyer2container").classList.remove("d-none")
})


const rollBtn = document.getElementById("btnroll")

rollBtn.addEventListener("click", function () {

    if ( player1turn &&remaningChanceplayer1 > 0) {
        let diceNum = Math.floor(Math.random() * 10 % 6) + 1
        scorePlayer1 += diceNum
        remaningChanceplayer1--
       
        updateui()
        
        if (scorePlayer1 >= target) {
            alert("player1 won")
         reset()
        }
        const face = document.getElementById("face")
        face.classList.remove("face")
        face.src = `./images/dice-${diceNum}.svg`
        alert("player 2 chance")
        return player1turn=false 
        
    }


})

const player2rollBtn = document.getElementById("player2Btn")
player2rollBtn.addEventListener("click", function () {
    if ( !player1turn &&remaningChanceplyer2 > 0) {
        let diceNum = Math.floor(Math.random() * 10 % 6) + 1
        scorePlayer2 += diceNum
        remaningChanceplyer2--
      
        updateui()
        if (scorePlayer2 >= target) {
            alert("player2 won")
 reset()
        }
        const face2 = document.getElementById("face2")
        face2.classList.remove("face2")
        

        face2.src = `./images/dice-${diceNum}.svg`
        alert("player 1 chance")
        return player1turn=true
    }

}
)
 

function reset(){
  let target=0;
   let remaningChanceplayer1=0;
 let remaningChanceplyer2=0}