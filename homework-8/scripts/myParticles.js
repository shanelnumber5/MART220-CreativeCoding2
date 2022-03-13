class Particle {

    constructor() {
      this.x = 1210;
      this.y = 895;
      this.vx = random(-10, -5);
      this.vy = random(-5, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      fill(255, this.alpha);
      ellipse(this.x, this.y, 1);
    }
  
  }