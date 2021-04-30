// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";


document.addEventListener("keydown", function(e) {

    console.log(e.key);

    if (e.key === "ArrowLeft") {
        moveDodgerLeft(e);
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight(e);
    }

})



function moveDodgerLeft(e) {

let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

    if (left >= 0) {
      
        dodger.style.left = left - 1 + "px";
        // dodger.style.right = (right + 1) + "px";
    }

}

function moveDodgerRight(e) {

let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);
        
        if (left <= 360) {
    
    
            dodger.style.left = left + 1 + "px";
            // dodger.style.left = (left + 1) + "px";
        }
    }

// function moveDodgerRight(e) {

// // dodger.style.left = "";
// let rightNumbers = dodger.style.right.replace("px", "");
// let right = parseInt(rightNumbers, 10);
    
//     if (right >= 0) {


//         dodger.style.right = right - 1 + "px";
//         // dodger.style.left = (left + 1) + "px";
//     }
// }