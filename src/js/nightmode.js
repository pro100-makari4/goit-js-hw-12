const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.style.backgroundColor = '#2C2C2F';
  } else {
    document.body.style.backgroundColor = '#fbfbfb';
  }
});
