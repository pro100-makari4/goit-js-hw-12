import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import { getImages } from '/js/pixabay-api.js';
import { scrollToNewImages } from '/js/scroll-functions.js';
import errorIcon from '/img/error-icon.png';
import cautionIcon from '/img/caution-icon.png';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-button');
const loader = document.querySelector('.loader');
const goTopBtn = document.querySelector('.go-top-btn');
const SIMPLY_LIGHTBOX = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 150,
  captionsPosition: 'bottom',
});

let page;
let images;
let inputValue = null;

form.addEventListener('submit', searchPhotos);
loadMoreBtn.addEventListener('click', loadNewPhotos);

async function searchPhotos(event) {
  event.preventDefault();
  beforeSearchEvents();

  try {
    const data = await getImages(inputValue, 1);
    images = data.hits;

    if (images.length === 0) {
      messageImagesDidNotFound();
    } else {
      renderImages(images, gallery);
    }
  } catch {
    messageImagesDidNotFound();
  } finally {
    if (images.length === 0) {
      loadMoreBtn.classList.add('is-hidden');
      loader.classList.add('is-hidden');
      goTopBtn.classList.add('is-hidden');
    } else {
      finallyUpdate();
      form.reset();
      goTopBtn.classList.remove('is-hidden');
    }
  }
}

async function loadNewPhotos() {
  loadMoreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  let endReached = false;

  try {
    const data = await getImages(inputValue, ++page);
    const images = data.hits;

    if (images.length === 0) {
      endReached = true;
      messageImagesDidNotFound(endReached);
    } else {
      renderImages(images, gallery);
    }
  } catch {
    messageImagesDidNotFound();
  } finally {
    if (endReached) {
      loadMoreBtn.classList.add('is-hidden');
      loader.classList.add('is-hidden');
    } else {
      finallyUpdate();
      scrollToNewImages();
    }
  }
}

function beforeSearchEvents() {
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  inputValue = input.value;
  page = 1;
}

function messageImagesDidNotFound(endReached = false) {
  const errorMessage = endReached
    ? `Were sorry, but you've reached the end of search results.`
    : 'Sorry, there are no images matching your search query. Please try again!';

  const icon = endReached ? cautionIcon : errorIcon;

  iziToast.error({
    message: errorMessage,
    position: 'topRight',
    timeout: 5000,
    progressBar: true,
    close: true,
    iconUrl: icon,
    messageColor: endReached ? '#000' : '#fafafb',
    iconColor: endReached ? '#000' : '#fafafb',
    backgroundColor: endReached ? '#90C2DE' : '#FF544B',
  });
}

function finallyUpdate() {
  loader.classList.add('is-hidden');
  loadMoreBtn.classList.remove('is-hidden');
}

function renderImages(images, galleryElement) {
  const galleryHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${likes}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${views}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${comments}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', galleryHTML);
  SIMPLY_LIGHTBOX.refresh();
}
