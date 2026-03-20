onload = () => {
	  const startScreen = document.getElementById("startScreen");
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", () => {
    startScreen.classList.add("fade-out");

    // start your animations AFTER click
    startExperience();
  });

  function startExperience() {
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

// 🔥 FIX: proper full screen size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
}};