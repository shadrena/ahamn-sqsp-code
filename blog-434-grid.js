// Sets the 3:4 image height on posts 5-7 (row 2 of the 4-3-4 blog layout)
// Paste inside <script></script> tags in Blog page Page Header Code Injection section
function updateGridHeight() {
    const BREAKPOINT = 800; // change to match your @desktop breakpoint
    const cards = document.querySelectorAll('.blog-basic-grid--container');
    const wideCards = [cards[4], cards[5], cards[6]];

    wideCards.forEach(card => {
      if (!card) return;
      const wrapper = card.querySelector('.image-wrapper');
      if (!wrapper) return;

      if (window.innerWidth < BREAKPOINT) {
        wrapper.style.removeProperty('height');
        wrapper.style.removeProperty('padding-bottom');
        return;
      }

      const width = wrapper.getBoundingClientRect().width;
      wrapper.style.setProperty('height', (width * 4 / 3) + 'px', 'important');
      wrapper.style.setProperty('padding-bottom', '0', 'important');
    });
  }

  window.addEventListener('load', updateGridHeight);
  window.addEventListener('resize', updateGridHeight);
