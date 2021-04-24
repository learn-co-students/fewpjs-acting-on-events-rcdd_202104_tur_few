// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft (){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);

        if (left > 0){
                dodger.style.left = `${left - 1}px`;
        }
}

function moveDodgerRight (){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);

        if (left > 0){
                dodger.style.left = `${left + 1}px`;
        }
}
// Welp :)
function moveDodgerTop (){
        let topNumbers = dodger.style.top.replace("px", "");
        let top = parseInt(topNumbers, 10);

        if (top > 0){
                dodger.style.top = `${top - 1}px`;
        }
}

function moveDodgerBottom (){
        let bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10);

        if (bottom > 0){
                dodger.style.bottom = `${bottom - 1}px`;
        }
}

document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
                moveDodgerLeft();
        }

        else if (e.key === "ArrowRight") {
                moveDodgerRight();
        }

        else if (e.key === "ArrowUp") {
                moveDodgerTop();             
        }

        else if (e.key === "ArrowDown") {
                moveDodgerBottom();                
        }
});