console.log(
  "%cFighter🚀​ %cv0.0",
  "color: red; font-size: 32px;",
  "color: dodgerblue"
);

var fighter = document.querySelector(".fighter");
var opponent = document.querySelector(".opponent");
// Declare 'fighter' variable and assign to it HTML element with attribute class 'fighter'

fighter.x = 20;
fighter.y = 20;
fighter.width = 50;
fighter.height = 50;
fighter.name = "Dan";
fighter.score = 0;
fighter.style.left = fighter.x + "px";
fighter.style.top = fighter.y + "px";
opponent.x = 500;
opponent.y = 500;
opponent.width = 50;
opponent.height = 50;
opponent.score = 0;
opponent.style.left = opponent.x + "px";
opponent.style.top = opponent.x + "px";

fighter.style.left = fighter.x + "px";
fighter.style.top = fighter.y + "px";
opponent.style.left = opponent.x + "px";
opponent.style.top = opponent.y + "px";

const controller = {
  38: { pressed: false, func: fighter.moveUp },
  40: { pressed: false, func: fighter.moveDown },
  37: { pressed: false, func: fighter.moveLeft },
  39: { pressed: false, func: moveRight() },
};

document.addEventListener("keydown", (e) => {
  if (controller[e.keyCode]) {
    controller[e.keyCode].pressed = true;
  }
});
document.addEventListener("keyup", (e) => {
  if (controller[e.keyCode]) {
    controller[e.keyCode].pressed = false;
  }
});

const executeMoves = () => {
  Object.keys(controller).forEach((key) => {
    controller[key].pressed && controller[key].func();
  });
};

/*
if ((controller[key] = pressed)) moveRight();

executeMoves();

moveRight();

function moveRight() {
  fighter.x = fighter.x + 10;
}
*/

// document.onkeydown = function (event) {
//   document.addEventListener("keydown", (e) => {
//     if (controller[e.keyCode]) {
//       controller[e.keyCode].pressed = true;
//     }
//   });
// };

// document.onkeyup = function (event) {
//   document.addEventListener("keyup", (e) => {
//     if (controller[e.keyCode]) {
//       controller[e.keyCode].pressed = false;
//     }
//   });
// };
