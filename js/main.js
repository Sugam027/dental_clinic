import app from './app.js';

function renderPageFromHash() {
  const page = window.location.hash.replace('#', '') || 'home';
  document.getElementById('root').innerHTML = app(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial render
window.addEventListener('DOMContentLoaded', renderPageFromHash);

// Handle hash change (e.g., when clicking a nav link)
window.addEventListener('hashchange', renderPageFromHash);