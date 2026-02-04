const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".testimonial-track");
    const cards = Array.from(track.children);

    if (!track || cards.length === 0) return;

    // Clone cards for seamless loop
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    let position = 0;
    let speed = 0.3; // scroll speed (smaller = slower)

    function animate() {
      const cardWidth = cards[0].offsetWidth + 32; // width + gap
      position += speed;

      // When first set fully scrolls out, reset seamlessly
      if (position >= cardWidth * cards.length) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();

    // Pause on hover (desktop UX)
    track.addEventListener("mouseenter", () => speed = 0);
    track.addEventListener("mouseleave", () => speed = 0.3);

    // Pause on touch (mobile UX)
    track.addEventListener("touchstart", () => speed = 0);
    track.addEventListener("touchend", () => speed = 0.3);
  });