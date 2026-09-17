document.addEventListener('DOMContentLoaded', () => {
  // Initialize Routing
  Router.init();

  // Render Default Content
  UI.renderListings();

  // Global Event Listener for Navigation Triggers
  document.addEventListener('click', (e) => {
    const navTrigger = e.target.closest('[data-nav]');
    if (navTrigger) {
      e.preventDefault();
      const page = navTrigger.dataset.nav;
      Router.navigate(page);
    }
  });

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
