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
