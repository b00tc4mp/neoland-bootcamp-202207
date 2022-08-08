class Fighter {
  constructor(direction) {
    this.direction = direction;
    this.y = config.canvasHeight / 2 - config.fighterHeight / 2;
    direction === 1
      ? (this.x = 0)
      : (this.x = config.canvasWidth - config.fighterWidth);
    this.score = 0;
  }

  render = () => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, config.fighterWidth, config.fighterHeight);
    ctx.font = "30px Arial";
    ctx.fillText(this.score, canvas.width / 2 + 200 * this.direction, 50);
  };

  //   checkCollision = (ball) => {
  //     console.log("checking");
  //     return !!(
  //       this.y <= ball.y + ball.r &&
  //       this.y + config.paddleHeight >= ball.y - ball.r
  //     );
  //   };

  moveDown = () => {
    this.y += config.fighterSpeed;
    this.y + config.fighterHeight > canvas.height &&
      (this.y = canvas.height - config.fighterHeight);
  };

  moveUp = () => {
    this.y -= config.fighterSpeed;
    this.y < 0 && (this.y = 0);
  };

  win = () => this.score++;
}
