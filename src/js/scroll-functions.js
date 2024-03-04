const goTopButton = document.querySelector('.go-top-btn');

goTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});



export function scrollToNewImages() {
  const galleryItemHeight = getGalleryItemHeight();

  let currentScrollPosition = window.scrollY;
  window.scrollTo({
    top: currentScrollPosition + galleryItemHeight,
  });
}

function getGalleryItemHeight() {
  const rect = document.querySelector('.gallery-item').getBoundingClientRect();
  const windowWidthInPx = window.innerWidth;

  if (windowWidthInPx <= 500) {
    return rect['height'] * 2;
  } else {
    return rect['height'] * 2 + 24 * 2;
  }
}
