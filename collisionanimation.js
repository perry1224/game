 export class CollisionAnimation {
  constructor(game, x, y) {
    this.game = game;
    this.image = document.getElementById('collisionanimation');
    this.spriteWidth = 100; //width of a single frame
    this.spriteHeight = 90; //
    this.sizeModifier = Math.random() + 0.5;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
    this.frameX = 0;
    this.maxFrame = 4;
    this.markForDeletion = false;
    this.fps = Math.random() * 10 + 10;
    this.frameInterval = 1000/this.fps;
    this.frameTimer = 0
  }
  draw(context) {
    context.drawImage(this.image, this.frameX * this.spriteWidth, 0, 
      this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
  update(deltaTime) {
    this.x -= this.game.speed; //make sure animation move with the world
    if(this.frameTimer > this.frameInterval) {
      this.frameX++;
      this.frameTimer = 0
    } else {
      this.frameTimer += deltaTime
    }
    
    if (this.frameX > this.maxFrame) this.markForDeletion = true
  }
}