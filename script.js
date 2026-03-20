document.addEventListener("DOMContentLoaded", () => {
    // 1. Generate Parallax Stars dynamically
    const createStars = (layerId, count, size) => {
        let starsBox = document.getElementById(layerId);
        let shadows = "";
        for (let i = 0; i < count; i++) {
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * 2000); // 2000px high box for continuous scroll
            shadows += `${x}px ${y}px #ffffff${i !== count - 1 ? ', ' : ''}`;
        }
        starsBox.style.boxShadow = shadows;
        starsBox.style.width = size + "px";
        starsBox.style.height = size + "px";
    };

    createStars('stars1', 300, 1); // Layer 1: small slow stars
    createStars('stars2', 150, 2); // Layer 2: medium stars
    createStars('stars3', 50, 3);  // Layer 3: large fast stars

    // 2. Generate Floating Blue Particles and Hearts
    const particleContainer = document.getElementById('particles');
    const heartSVG = `<svg viewBox="0 0 32 32"><path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path></svg>`;

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize between a blue glowing orb or a heart (80% orbs, 20% hearts)
        if (Math.random() > 0.8) {
            particle.classList.add('particle-heart');
            particle.innerHTML = heartSVG;
        } else {
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
});