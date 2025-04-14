const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
var shuffledLetters = letters.sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffledLetters.length; i++) {
    const letterBox = document.createElement("div");
    letterBox.innerHTML = shuffledLetters[i];
    letterBox.className = "letter";

    letterBox.onclick = function(){
        this.classList.add('lettersFaceUp')
        setTimeout(function(){
            if(document.querySelectorAll('.lettersFaceUp').length > 1){
                if(document.querySelectorAll('.lettersFaceUp')[0].innerHTML ===
                 document.querySelectorAll('.lettersFaceUp')[1].innerHTML){
                    document.querySelectorAll('.lettersFaceUp')[0].classList.add('lettersMatch')
                    document.querySelectorAll('.lettersFaceUp')[1].classList.add('lettersMatch')

                    document.querySelectorAll('.lettersFaceUp')[1].classList.remove('lettersFaceUp')
                    document.querySelectorAll('.lettersFaceUp')[0].classList.remove('lettersFaceUp')
                    
                    if(document.querySelectorAll('.lettersMatch').length === letters.length){
                        alert("Congratulation! You Have Won The Game!")
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