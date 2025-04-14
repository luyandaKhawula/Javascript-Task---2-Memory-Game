const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
var shuffledLetters = letters.sort(() => Math.random() - 0.5);
var moves = 0;

for (let i = 0; i < shuffledLetters.length; i++) {
    const letterBox = document.createElement("div");
    letterBox.innerHTML = shuffledLetters[i];
    letterBox.className = "letter";

    letterBox.onclick = function(){
        this.classList.add('lettersFaceUp')
        moves++;
        setTimeout(function(){
            if(document.querySelectorAll('.lettersFaceUp').length > 1){
                if(document.querySelectorAll('.lettersFaceUp')[0].innerHTML ===
                 document.querySelectorAll('.lettersFaceUp')[1].innerHTML){
                    document.querySelectorAll('.lettersFaceUp')[0].classList.add('lettersMatch')
                    document.querySelectorAll('.lettersFaceUp')[1].classList.add('lettersMatch')

                    document.querySelectorAll('.lettersFaceUp')[1].classList.remove('lettersFaceUp')
                    document.querySelectorAll('.lettersFaceUp')[0].classList.remove('lettersFaceUp')
                    
                    if(document.querySelectorAll('.lettersMatch').length === letters.length){
                        alert("Congratulation! You Have Won The Game in " + moves + " moves!");
                        window.location.reload();
                    }
                }
                else{
                    document.querySelectorAll('.lettersFaceUp')[1].classList.remove('lettersFaceUp')
                    document.querySelectorAll('.lettersFaceUp')[0].classList.remove('lettersFaceUp')
                }
            }

        }, 1000)

    }

    document.getElementById("game-board").appendChild(letterBox);
}

const finish = new Date().getTime() + (1000 * 10 * 30);
function timer(){
    const now = new Date().getTime();
    const remaining = finish - now;

    if (remaining < 0){
        document.getElementById("time").innerHTML = "00:00:00";
        clearInterval(interval);
        return; 
    }

    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = `${minutes}:${seconds}`;
    
}

function start(){
    timer();
    const interval = setInterval(timer, 1000);
}