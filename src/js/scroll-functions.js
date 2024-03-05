const goTopButton = document.querySelector('.go-top-btn');

goTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});

export function scrollToNewImages() {
  const rect =
    document.querySelector('.gallery-item').getBoundingClientRect().height * 2 +
    48;

  let currentScrollPosition = window.scrollY;
  window.scrollTo({
    top: currentScrollPosition + rect,
  });
}
