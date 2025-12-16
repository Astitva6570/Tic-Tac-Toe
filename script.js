let boxes =  document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".massage-container");
let msg = document.querySelector("#msg");

let trueO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach( (box) => {
     box.addEventListener("click", () => {
         console.log("button was clicked");
        if(trueO === true) {
            box.innerText = "O";
            trueO = false;
        } else {
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;

        checkWinner();
     });
});

const resetGame = () => {
    trueO = true;
    EnableBoxes();
    msgcontainer.classList.add("hide");
}



const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const EnableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}


let checkWinner = () => {
    for(pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }  
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);