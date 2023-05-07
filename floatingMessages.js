export class FloatingMessage {
  constructor(value, x, y, targetX, targetY) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.markedForDeletion = false;
    this.timer = 0
  }
  update () {
    this.x += (this.targetX - this.x) * 0.03; //slowly move towards target on x axis
    this.y += (this.targetY - this.y) * 0.03; //slowly move towards target on y axis
    this.timer++; // timer will increase by 1
    if (this.timer > 100) this.markedForDeletion = true; 
  }
  draw(context) {
    context.font = '20px Creepster';
    context.fillStyle = 'white';
    context.fillText(this.value, this.x, this.y); //draw value from line 3 on x and y coordinates
    context.fillStyle = 'black';
    context.fillText(this.value, this.x + 2, this.y + 2)
  }
}