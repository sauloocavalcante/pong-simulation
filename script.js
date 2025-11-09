const canvas = window.document.getElementById("bold-limit");
let ctx = canvas.getContext("2d");
let raf;

function drawLimits() {
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.setLineDash([50, 20]);
  ctx.lineWidth = 10;
  ctx.strokeRect(600, 0, 0, 800);
}

const rectYellow = {
  x: 50,
  y: 200,
  w: 15,
  h: 100,
  color: "Yellow",

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

}

const rectRed = {
  x: 1150,
  y: 600,
  w: 15,
  h: 100,
  color: "Red",

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

}

const ball = {
  x: 520,
  y: 400,
  vx: 5,
  vy: 1.7,
  radius: 10,
  color: "orange",

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLimits();
    rectYellow.draw();
    rectRed.draw() ; 

    ball.draw();

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (
    ball.x - ball.radius <= rectYellow.x + rectYellow.w &&
    ball.y + ball.radius >= rectYellow.y &&
    ball.y <= rectYellow.y + rectYellow.h
    ) {
    ball.vx = Math.abs(ball.vx);  
    ball.vy = Math.abs(ball.vy);
    }

    if (
    ball.x + ball.radius >= rectRed.x &&
    ball.y - ball.radius <= rectRed.y + rectRed.h &&
    ball.y >= rectRed.y
    ) {
    ball.vx = -Math.abs(ball.vx);  
    ball.vy = -Math.abs(ball.vy);   
    }



    raf = window.requestAnimationFrame(animate);
}

drawLimits()
rectYellow.draw()
rectRed.draw()
ball.draw()
animate()
