const spaceAvailable = 40;
const step = 2;
let score = 0;
let IntervalSpeed = 0;
let speed = 1000;

const car = {
  emoji: "🚔️",
  x: 0,
  y: 0,
};

const heart = {
  emoji: "❤️",
  x: 2 * Math.round(Math.random() * spaceAvailable),
  y: 9,
};

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowRight":
      if (car.x < spaceAvailable) car.x += step;
      break;
    case "ArrowLeft":
      if (car.x > 0) car.x -= step;
      break;
  }
};

const intervalId = setInterval(render, speed);

function render() {
  console.clear();

  for (let i = 10; i >= 0; i--) {
    if (i === 0)
      if (
        heart.y === 0 &&
        (car.x === heart.x || Math.abs(car.x - heart.x) < 2)
      ) {
        console.log("🎉🎉🎉");
        score++;
        x;
        let intervalId = setInterval(render, speed);
      } else if (heart.y === 0 && heart.x > car.x) {
        console.log(
          " ".repeat(car.x) +
            car.emoji +
            " ".repeat(heart.x - car.x - 1) +
            heart.emoji
        );
      } else if (heart.y === 0 && heart.x < car.x) {
        console.log(
          " ".repeat(heart.x) +
            heart.emoji +
            " ".repeat(car.x - heart.x - 1) +
            car.emoji
        );
      } else console.log(" ".repeat(car.x) + car.emoji);
    else if (i === heart.y) console.log(" ".repeat(heart.x) + heart.emoji);
    else console.log(i);
  }
  console.log("Score" + " " + score);
  if (score === 10) {
    console.log("GAME WON");
  }
  updateHeart();
}

function updateHeart() {
  if (heart.y === 0) {
    heart.y = 9;
    heart.x = Math.round(Math.random() * 10);
  } else heart.y -= 1;
}
