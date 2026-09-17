const Router = {
  init() {
    window.addEventListener('popstate', (e) => {
      const page = e.state ? e.state.page : 'home';
      this.navigate(page, false);
    });

    // Handle initial route from URL hash
    const initialHash = window.location.hash.replace('#', '') || 'home';
    this.navigate(initialHash, true);
  },

  navigate(pageId, pushState = true) {
    const screens = document.querySelectorAll('.page-screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(`page-${pageId}`);
    if (targetScreen) {
      targetScreen.classList.add('active');
      AppState.currentRoute = pageId;

      if (pushState) {
        history.pushState({ page: pageId }, '', `#${pageId}`);
      }

      this.updateActiveNav(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.warn(`Page target #page-${pageId} not found.`);
    }
  },

  updateActiveNav(pageId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      if (btn.dataset.page === pageId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};
