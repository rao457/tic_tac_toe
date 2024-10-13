let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let new_btn = document.querySelector("#new_btn");
let reset_container = document.querySelector(".reset_container");
let win_p= document.querySelector("#winner_p");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    count = 0;

}
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        console.log("Button was clicked");
        count++;
        console.log(count);
        if (turnO) {
            box.innerText = "O";
            box.classList.add("Ostyle");

            turnO = false;
            
        }else {
            box.innerText = "X";
            turnO = true;
            box.classList.add("Xstyle");
            
        }
        box.disabled = true;
        checkWinner();
    });

});
const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }

}
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    reset_container.classList.add("hide");
}
const Winner = (winner) => {
    win_p.innerText = `Congratulations! Winner is ${winner}!`;
    reset_container.classList.remove("hide");
    disableBoxes();    
}
const draw = () => {
    win_p.innerText = "***Match Draw***"
    reset_container.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                Winner(pos1Val);
            }else if (count === 9) {
                draw();
            }
        }
            
        }
    }

new_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);