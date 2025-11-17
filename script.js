function getComputerChoice() {
    let num = Math.random();
    let play = "";

    if (num >= 2/3) {
        play = "Rock";
    } else if (num >= 1/3) {
        play = "Scissors";
    } else {
        play = "Paper";
    }
    return play;
}


document.getElementById("btn1").addEventListener("click", ()=>{
    const computer = getComputerChoice();
    if (computer == "Paper") {
        flash("#ff0000ff", "YOU LOST!");
    } else if (computer == "Rock") {
        flash("#575757ff", "YOU DREW!")
    } else if (computer == "Scissors") {
        flash ("#00ff00ff", "YOU WON!")
    }
}
)

document.getElementById("btn2").addEventListener("click", ()=>{
    const computer = getComputerChoice();
    if (computer == "Paper") {
        flash("#575757ff", "YOU DREW!")
    } else if (computer == "Rock") {
        flash ("#00ff00ff", "YOU WON!")
    } else if (computer == "Scissors") {
        flash("#ff0000ff", "YOU LOST!");
    }
}
)

document.getElementById("btn3").addEventListener("click", ()=>{
    const computer = getComputerChoice();
    if (computer == "Paper") {
        flash ("#00ff00ff", "YOU WON!")
    } else if (computer == "Rock") {
        flash("#ff0000ff", "YOU LOST!");
    } else if (computer == "Scissors") {
        flash("#575757ff", "YOU DREW!")
    }
}
)


// This code is AI generated it is not expected of you to know
function flash(color, message) {
  const body = document.body;
  const text = document.getElementById("result");
  const overlay = document.getElementById("flash");


  text.textContent = message;
  text.style.color = "#FFFFFF";


  overlay.style.backgroundColor = color;
  overlay.style.opacity = "1";

  setTimeout(() => {
    overlay.style.opacity = "0";
    text.textContent = "";
  }, 650);
}




