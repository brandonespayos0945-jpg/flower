onload = () => {
  document.body.classList.remove("container");

  const particlesContainer = document.querySelector(".particles");
  const bubblesContainer = document.querySelector(".bubbles");

  // 💙 BLUE PARTICLES
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    p.style.opacity = Math.random();

    particlesContainer.appendChild(p);
  }

  // ❤️ HEART BUBBLES
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.classList.add("bubble");

    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = (6 + Math.random() * 6) + "s";

    b.innerHTML = `
      <svg viewBox="0 0 32 32">
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"/>
      </svg>
    `;

    bubblesContainer.appendChild(b);
  }
};