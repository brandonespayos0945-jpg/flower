onload = () => {
  document.body.classList.remove("container");
  
    const firefliesContainer = document.querySelector(".fireflies");
	
	  // ✨ FIREFLIES
  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");

    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";

    firefliesContainer.appendChild(f);
  }
};