const spaceAvailable = 20;

const startTime = Date.now();

const duration = 20000;

const winningScore = 8;

let speed = 300;

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

let intervalId = setInterval(render, speed);

function render() {
  console.clear();

  if (heart.y === 0 && (car.x === heart.x || Math.abs(car.x - heart.x) < 2)) {
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

  if (score === winningScore) {
    clearInterval(intervalId);

    console.log("GAME WON!");
  }

  if (Date.now() >= startTime + duration) {
    clearInterval(intervalId);

    console.log("YOU LOST!");
  }

  updateSpeed();
  updateHeart();
}

function updateSpeed() {
  if (heart.y === 0 && speed > 250) {
    speed -= 50;
    clearInterval(intervalId);
    intervalId = setInterval(render, speed);
  } else if (heart.y === 0 && speed > 150) {
    speed -= 25;
    clearInterval(intervalId);
    intervalId = setInterval(render, speed);
  }
}

function updateHeart() {
  if (heart.y === 0) {
    heart.y = 9;
    heart.x = Math.round(Math.random() * 10);
  } else heart.y -= 1;
}
