// Your code here
// let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// console.log(dodger.style.left);
// console.log(dodger.style.bottom);
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";
// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });
let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  

  function moveDodgerUp() {
      let upNumbers = dodger.style.top.replace("px", "");
      let up = parseInt(upNumbers, 10);

      if (up > 399) {
          dodger.style.top = `${up + 1}px`;
      }
    
      document.addEventListener("keydown", function(u) {
        if (u.key === "ArrowUp") {
          moveDodgerUp();
        }
      });
    

  }