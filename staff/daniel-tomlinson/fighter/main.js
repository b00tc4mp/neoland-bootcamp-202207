console.log(
  "%cFighter🚀​ %cv0.0",
  "color: red; font-size: 32px;",
  "color: dodgerblue"
);

var fighter = document.querySelector(".fighter");
var opponent = document.querySelector(".opponent");
// Declare 'fighter' variable and assign to it HTML element with attribute class 'fighter'

const controller = {
  38: { pressed: false, func: fighter.moveUp },
  40: { pressed: false, func: fighter.moveDown },
  37: { pressed: false, func: fighter.moveLeft },
  39: { pressed: false, func: fighter.moveRight },
  87: { pressed: false, func: opponent.moveUp },
  83: { pressed: false, func: opponent.moveDown },
  65: { pressed: false, func: opponent.moveLeft },
  68: { pressed: false, func: opponent.moveRight },
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

const animate = () => {
  // ctx.clearRect(0, 0, gameInfo.canvasWidth, gameInfo.canvasHeight);
  executeMoves();
  // checkPaddleCollisions()
  // checkWallCollisions()
  // checkWin()
  // moveBall()
  // paintBall()
  // renderPaddles()
  window.requestAnimationFrame(animate);
};
window.requestAnimationFrame(animate);
// moveDown = () => {
//     this.y += config.paddleSpeed;
//     (this.y + config.paddleHeight > canvas.height) && (this.y = canvas.height - config.paddleHeight)
// }

// moveUp = () => {
//     this.y -= config.paddleSpeed
//     this.y < 0 && (this.y = 0)
// }

// win = () => this.score ++

function moveUp() {
  document.onkeydown = function (event) {
    if (event.keyCode === 39) {
      fighter.x = fighter.x + 10;
    }
  };
}

function moveDown() {
  x = x - 10;
}

function moveLeft() {
  y = y + 10;
}

function moveLeft() {
  y = y - 10;
}

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

document.onkeydown = function (event) {
  //   console.log(event.key);
  if (event.key === "ArrowRight") {
    fighter.x = fighter.x + 10;
    // console.log("move right");
  } else if (event.key === "ArrowRight" && "ArrowDown") {
    fighter.x = fighter.x + 10;
    fighter.y = fighter.y + 10;
  } else if (event.key === "ArrowLeft") {
    fighter.x = fighter.x - 10;
    // console.log("move left");
  } else if (event.key === "ArrowUp") {
    fighter.y = fighter.y - 10;
  } else if (event.key === "ArrowDown") {
    fighter.y = fighter.y + 10;
  } else if (event.keyCode === 68) {
    opponent.x = opponent.x + 10;
    // console.log("move right");
  } else if (event.keyCode === 65) {
    opponent.x = opponent.x - 10;
    // console.log("move left");
  } else if (event.keyCode === 87) {
    opponent.y = opponent.y - 10;
  } else if (event.keyCode === 83) {
    opponent.y = opponent.y + 10;
  } else {
    // console.log("do nothing");
  }
  fighter.style.left = fighter.x + "px";
  fighter.style.top = fighter.y + "px";
  opponent.style.left = opponent.x + "px";
  opponent.style.top = opponent.y + "px";
  //   console.log("fighter position", fighter.x);
};

if (fighter1.x + canvas.width >= fighter2.x) {
  console.log("touching blue");
  fighter1.score = fighter1.score + 1;
  fighter2.score = fighter2.score - 1;
  console.log(
    "scores",
    "fighter1 score" + fighter1.score,
    "fighter2 score" + fighter2.score
  );
}
