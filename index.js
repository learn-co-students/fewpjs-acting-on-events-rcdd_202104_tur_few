// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";
dodger.style.bottom = "0px";



function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// function moveDodgerRight() {
//     let rightNumber = dodger.style.right.replace("px", "");
//     let right = parseInt(rightNumber, 10);
//     if (right > 0) {
//         dodger.style.right = `${right - 1}px`;
//     }
// }

function moveDodgerRight() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft(); 
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  });
  