export default class Ground {
  constructor(ctx, width, height, speed, scaleRatio) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    //this.width = width / 1;
    //this.height = height + 420;
    this.speed = speed;
    this.scaleRatio = 5;

    this.x = 0;
    this.y = this.canvas.height - this.height;

    this.groundImage = new Image();
    this.groundImage.src = "images/racetrack (1).png";
    this.width = width;
    this.height = height + this.groundImage.height;
  }

  update(gameSpeed, frameTimeDelta) {
    this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
  }

  draw() {
    this.ctx.drawImage(
      this.groundImage,
      this.x,
      /* this.y */ 0,
      this.width,
      this.height
    );


    if (this.x < -this.width / 2) {
      this.x = 0;
    }
  }

  reset() {
    this.x = 0;
  }
}
