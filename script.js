const generatedPostStyles = document.createElement('link');
generatedPostStyles.rel = 'stylesheet';
generatedPostStyles.href = 'generated-posts.css';
document.head.appendChild(generatedPostStyles);

const postGrid = document.querySelector('.post-grid');
if (postGrid) {
  postGrid.outerHTML = `
    <div class="generated-post-grid">
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/interview.webp" alt="Сгенерированная обложка Telegram-поста: Как пройти первое собеседование" />
      </article>
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/story.webp" alt="Сгенерированная обложка Telegram-поста: История выпускника" />
      </article>
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/internships.webp" alt="Сгенерированная обложка Telegram-поста: Где искать стажировки" />
      </article>
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/skills.webp" alt="Сгенерированная обложка Telegram-поста: Развивай навыки" />
      </article>
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/events.webp" alt="Сгенерированная обложка Telegram-поста: События и эфиры" />
      </article>
      <article class="generated-post-card" data-reveal>
        <img src="assets/posts/generated/quote.webp" alt="Сгенерированная мотивационная обложка Telegram-поста про карьерный рост" />
      </article>
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
