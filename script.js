const generatedPostStyles = document.createElement('link');
generatedPostStyles.rel = 'stylesheet';
generatedPostStyles.href = 'generated-posts.css';
document.head.appendChild(generatedPostStyles);

const postGrid = document.querySelector('.post-grid');
if (postGrid) {
  postGrid.outerHTML = `
    <div class="generated-showcase" data-reveal>
      <img
        src="assets/posts/contact-showcase.svg"
        alt="Шесть примеров Telegram-обложек 100Б Карьера: собеседование, история выпускника, стажировки, навыки, события и карьерный рост"
      />
      <p class="showcase-caption">
        Примеры обложек для Telegram: «Как пройти первое собеседование», «История
        выпускника», «Где искать стажировки», «Развивай навыки», «События и эфиры»,
        мотивационная карточка про карьерный рост.
      </p>
    </div>
  `;
}

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
