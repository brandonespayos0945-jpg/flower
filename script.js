onload = () => {
  document.body.classList.remove("container");
  
    const particleContainer = document.getElementById('particles');
	
	    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize between a blue glowing orb or a heart (80% orbs, 20% hearts)
        if (Math.random() > 0.8) {
			particle.classList.add('particle-orb');
        }
		        // Random starting position on X axis
        particle.style.left = Math.random() * 100 + "vw";
        
        // Randomize speed and delay
        particle.style.animationDuration = Math.random() * 5 + 5 + "s"; // 5s to 10s
        particle.style.animationDelay = Math.random() * 5 + "s";
        
        particleContainer.appendChild(particle);

        // Remove particle when it floats off screen to save memory
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // Spawn a new particle every 300 milliseconds
    setInterval(createParticle, 300);
	
    const firefliesContainer = document.querySelector(".fireflies");
	
	  // ✨ FIREFLIES
  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");

    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";

    firefliesContainer.appendChild(f);
  }
  // 🎆 FIREWORKS
     const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height * 0.5;

    this.speed = 4 + Math.random() * 3;
    this.particles = [];
    this.exploded = false;
  }

  update() {
    if (!this.exploded) {
      this.y -= this.speed;

      if (this.y <= this.targetY) {
        this.exploded = true;
        this.explode();
      }
    } else {
      this.particles.forEach(p => p.update());
    }
  }

  explode() {
    for (let i = 0; i < 30; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.fillStyle = "#66ccff";
      ctx.fillRect(this.x, this.y, 2, 6);
    } else {
      this.particles.forEach(p => p.draw());
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 4;

    this.life = 100;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    this.life--;
  }

  draw() {
    ctx.fillStyle = "rgba(102,204,255," + this.life / 100 + ")";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();

    if (fw.exploded && fw.particles.every(p => p.life <= 0)) {
      fireworks.splice(i, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

animateFireworks();
};