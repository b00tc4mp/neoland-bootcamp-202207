const spaceAvailable = 20;

const startTime = Date.now;

const duration = 5000;

let score = 1;

const car = {
  emoji: "🚔️",
  x: 0,
  y: 0,
};

const heart = {
  emoji: "❤️",
  x: Math.round(Math.random * 10),
  y: 9,
};

const bomb = {
  emoji: "💥",
};

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowRight":
      if (car.x < 10) car.x += 1;
      break;
    case "ArrowLeft":
      if (car.x > 0) car.x -= 1;
      break;
  }
};

// setInterval(updateHeart, 200);

// function updateHeart() {
//   for (let i = 0; i < 10; i++) {
//     for (j = i; j < 10; i++) console.log(" ");
//   }
//   console.log(heart.emoji);
// }

const intervalId = setInterval(render, 200);

function render() {
  console.clear();

  /*   for (let i = 9; i >= 0; i--) {
    if (i === heart.y) console.log(" ".repeat(heart.x) + heart.emoji);
    else if (i === 0) console.log(" ".repeat(car.x) + car.emoji);
    else console.log("i");
  } */

  for (let i = 9; i >= 0; i--) {
    // if (i === heart.y)

    if (
      // (heart.x === car.x && heart.y === car.y)
      i === 0 &&
      heart.y === 0 &&
      (car.x === heart.x || Math.abs(car.x - heart.x) < 2)
    ) {
      score++;
      console.log(
        " ".repeat(12) +
          `${score}` +
          "\n".repeat(10) +
          " ".repeat(heart.x) +
          bomb.emoji
      );
    } else if (heart.y > car.y) {
      // debugger;
      console.log(
        " ".repeat(12) +
          `${score}` +
          "\n".repeat(10 - heart.y) +
          " ".repeat(heart.x) +
          heart.emoji +
          "\n".repeat(heart.y) +
          " ".repeat(car.x) +
          car.emoji
      );
    } else if (heart.x !== car.x && heart.y === car.y) {
      console.log(
        " ".repeat(12) +
          `${score}` +
          "\n".repeat(10) +
          " ".repeat(car.x) +
          car.emoji
      );
    }
  }

  if (score === 5) {
    clearInterval(intervalId);

    console.log("GAME WON!");
  }

  if (Date.now >= startTime + duration) {
    clearInterval(intervalId);

    console.log("YOU LOST!");
  }

  updateHeart();
}

function updateHeart() {
  if (heart.y === 0) {
    heart.y = 9;
    heart.x = Math.round(Math.random() * 10);
  } else heart.y -= 1;
}
