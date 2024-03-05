const goTopButton = document.querySelector('.go-top-btn');

goTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});

export function scrollToNewImages() {
  window.scrollTo({
    top: window.scrollY + window.innerHeight * 0.9,
  });
}
