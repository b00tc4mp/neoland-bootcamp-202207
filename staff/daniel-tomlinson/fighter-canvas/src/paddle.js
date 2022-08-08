class Fighter {
  constructor(direction) {
    this.direction = direction;
    this.y = config.canvasHeight / 2 - config.fighterHeight / 2;
    direction === 1
      ? (this.x = 0)
      : (this.x = config.canvasWidth - config.fighterWidth);
    // this.score = 0;
  }

  render = () => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, config.fighterWidth, config.fighterHeight);
    // ctx.font = "30px Arial";
    // ctx.fillText(this.score, canvas.width / 2 + 200 * this.direction, 50);
  };

  moveDown = () => {
    this.y += config.fighterSpeed;
    // stops the character escaping the screen
    this.y + config.fighterHeight > canvas.height &&
      (this.y = canvas.height - config.fighterHeight);
  };

  moveUp = () => {
    this.y -= config.fighterSpeed;
    // stops the character escaping the screen
    this.y < 0 && (this.y = 0);
  };

  moveLeft = () => {
    this.x -= config.fighterSpeed;
    // stops the character escaping the screen
    this.x < 0 && (this.x = 0);
  };

  moveRight = () => {
    this.x += config.fighterSpeed;
    // stops the character escaping the screen
    this.x + config.fighterWidth > canvas.width &&
      (this.x = canvas.width - config.fighterWidth);
  };

  score = () => {
    if ((fighter1.x = fighter2.x) && (fighter1.y = fighter2.y))
      return score + 1;
  };
  // win = () => this.score++;
}
