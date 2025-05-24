document.addEventListener('DOMContentLoaded', () => {
  // Fade in untuk .info box
  const infoBox = document.querySelector('.info');
  if (infoBox) {
    infoBox.style.opacity = 0;
    infoBox.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      infoBox.style.opacity = 1;
    }, 500);
  }

  // Hover scale effect untuk .circle-button
  document.querySelectorAll('.circle-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
      button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Fade-in animation untuk setiap .card
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      card.style.opacity = 1;
    }, 300 * index);
  });

  // Typewriter effect (jika ada elemen #title)
  const title = document.getElementById('title');
  if (title) {
    const text = "NUR DARWISYAH";
    title.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      title.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 100);
  }
});
