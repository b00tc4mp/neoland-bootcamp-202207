console.log("hello world");

var fighter1 = document.querySelector(".fighter1");
var fighter2 = document.querySelector(".fighter2");

fighter1.x = 0;
fighter1.y = visualViewport.height - fighterHeight / 2;
// fighter1.name = "Dan";
// fighter1.score = 0;
fighter1.style.left = fighter1.x + "px";
fighter1.style.top = fighter1.y + "px";
fighter1.style.width = fighterWidth;
fighter1.style.height = fighterHeight;

fighter2.x = visualViewport.width - fighterWidth - 20;
fighter2.y = visualViewport.height - fighterHeight / 2;
// fighter2.score = 0;
fighter2.style.left = fighter2.x + "px";
fighter2.style.top = fighter2.y + "px";
fighter2.style.width = fighterWidth;
fighter2.style.height = fighterHeight;

var fighterWidth = 30;
var fighterHeight = 30;
var fighterSpeed = "10px";

const controller = {
  87: false,
  83: false,
  65: false,
  68: false,
  38: false,
  40: false,
  37: false,
  39: false,
};

// Pong

// const handleKeyDown = (e) => {
//   controller[e.keyCode] && (controller[e.keyCode].pressed = true);
// };

// const handleKeyUp = (e) => {
//   controller[e.keyCode] && (controller[e.keyCode].pressed = false);
// };

// document.addEventListener("keydown", handleKeyDown);
// document.addEventListener("keyup", handleKeyUp);

//Fede

window.addEventListener("keydown", (event) => {
  controller[`${event.key}`] = true;
});

window.addEventListener("keyup", (event) => {
  controller[`${event.key}`] = false;
});

function checkKeyDown() {
  if (controller[39] === true) {
    fighter2.x = fighter2.x + fighterSpeed;
    // console.log("move left");
  } else if (controller[37] === true) {
    fighter2.x = fighter2.x - fighterSpeed;
  } else if (controller[38] === true) {
    fighter2.y = fighter2.y - fighterSpeed;
  } else if (controller[40] === true) {
    fighter2.y = fighter2.y + fighterSpeed;
  } else if (controller[68] === true) {
    fighter1.x = fighter1.x + fighterSpeed;
    // console.log("move right");
  } else if (controller[65] === true) {
    fighter1.x = fighter1.x - fighterSpeed;
    // console.log("move left");
  } else if (controller[87] === true) {
    fighter1.y = fighter1.y - fighterSpeed;
  } else if (controller[83] === true) {
    fighter1.y = fighter1.y + fighterSpeed;
  } else {
    return fighter1.score;
  }

  fighter2.style.left = fighter2.x + "px";
  fighter2.style.top = fighter2.y + "px";
  fighter1.style.left = fighter1.x + "px";
  fighter1.style.top = fighter1.y + "px";
}

setInterval(checkKeyDown, 100);

// console.log(fighter1);

// if (fighter1.x + canvas.width >= fighter2.x) {
//   console.log("touching blue");
//   fighter1.score = fighter1.score + 1;
//   fighter2.score = fighter2.score - 1;
//   console.log(
//     "scores",
//     "fighter1 score" + fighter1.score,
//     "fighter2 score" + fighter2.score
//   );
//   alert("strike");
// }
