console.log("hello world");

//Relates to the canvas in some way
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//what I created to fill the canvas to the size of the screen
const canvasHeightView = visualViewport.height - 20;
const canvasWidthView = visualViewport.width - 20;

const config = {
  canvasWidth: canvasWidthView,
  canvasHeight: canvasHeightView,
  fighterWidth: 30,
  fighterHeight: 30,
  fighterSpeed: 10,
  //I added this
  // score: 0,
};

//This creates the class from the config object
canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

//This is used in the algorithm to decide where the fighter starts
const fighter1 = new Fighter(1);
const fighter2 = new Fighter(-1);

// Controller functions - these should be fine
const controller = {
  87: { pressed: false, func: fighter1.moveUp },
  83: { pressed: false, func: fighter1.moveDown },
  65: { pressed: false, func: fighter1.moveLeft },
  68: { pressed: false, func: fighter1.moveRight },
  38: { pressed: false, func: fighter2.moveUp },
  40: { pressed: false, func: fighter2.moveDown },
  37: { pressed: false, func: fighter2.moveLeft },
  39: { pressed: false, func: fighter2.moveRight },
};

const handleKeyDown = (e) => {
  controller[e.keyCode] && (controller[e.keyCode].pressed = true);
};

const handleKeyUp = (e) => {
  controller[e.keyCode] && (controller[e.keyCode].pressed = false);
};

const runPressedButtons = () => {
  Object.keys(controller).forEach((key) => {
    controller[key].pressed && controller[key].func();
  });
};

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Rendering of the fighter objects
const render = () => {
  //I think this relates to the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //This renders the fighters
  fighter1.render();
  fighter2.render();
};

const animate = () => {
  render();
  runPressedButtons();
  window.requestAnimationFrame(animate);
};

animate();
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

// fighter1.styles.background-color = 'black';
