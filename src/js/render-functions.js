// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import { getImages } from '/js/pixabay-api.js';
// import errorIcon from '/img/error-icon.png';
// import cautionIcon from '/img/caution-icon.png';

// const form = document.querySelector('.form');
// const input = document.querySelector('.search-input');
// const gallery = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more-button');
// const loader = document.querySelector('.loader');

// const SIMPLY_LIGHTBOX = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 150,
//   captionsPosition: 'bottom',
// });

// let inputValue = null;
// let page = 1;

// form.addEventListener('submit', searchPhotos);
// loadMoreBtn.addEventListener('click', loadNewPhotos);

// function searchPhotos(event) {
//   event.preventDefault();
//   gallery.innerHTML = '';
//   loadMoreBtn.classList.add('is-hidden');
//   loader.classList.remove('is-hidden');

//   inputValue = input.value;

//   getImages(inputValue, 1)
//     .then(data => {
//       const images = data.hits;

//       if (images.length === 0) {
//         throw new Error();
//       }

//       renderImages(images, gallery);
//       SIMPLY_LIGHTBOX.refresh();
//     })
//     .catch(() => {
//       gallery.innerHTML = '';

//       iziToast.error({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//         timeout: 5000,
//         progressBar: true,
//         close: true,
//         iconUrl: errorIcon,
//         messageColor: '#fafafb',
//         iconColor: '#fafafb',
//         backgroundColor: '#FF544B',
//       });
//     })
//     .finally(() => {
//       loader.classList.add('is-hidden');
//       loadMoreBtn.classList.remove('is-hidden');
//       form.reset();
//     });
// }

// function loadNewPhotos() {
//   loadMoreBtn.classList.add('is-hidden');
//   loader.classList.remove('is-hidden');

//   page++;

//   getImages(inputValue, page)
//     .then(data => {
//       const images = data.hits;

//       if (images.length === 0) {
//         throw new Error();
//       }

//       renderImages(images, gallery);
//       SIMPLY_LIGHTBOX.refresh();
//     })
//     .catch(() => {
//       iziToast.error({
//         message: `Were sorry, but you've reached the end of search results.`,
//         position: 'topRight',
//         timeout: 5000,
//         progressBar: true,
//         close: true,
//         iconUrl: cautionIcon,
//         messageColor: '#000',
//         iconColor: '#000',
//         backgroundColor: '#90C2DE',
//       });
//       loadMoreBtn.classList.add('is-hidden');
//     })
//     .finally(() => {
//       loader.classList.add('is-hidden');
//       loadMoreBtn.classList.remove('is-hidden');
//       form.reset();
//     });
// }

// function renderImages(images, galleryElement) {
//   const galleryHTML = images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) =>
//         `<li class="gallery-item">
//           <a class="gallery-link" href="${largeImageURL}">
//             <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
//           </a>

//           <ul class="gallery-info-list">
//             <li class="gallery-info-list-item"><h4>Likes</h4><p>${likes}</p></li>
//             <li class="gallery-info-list-item"><h4>Views</h4><p>${views}</p></li>
//             <li class="gallery-info-list-item"><h4>Comments</h4><p>${comments}</p></li>
//             <li class="gallery-info-list-item"><h4>Downloads</h4><p>${downloads}</p></li>
//           </ul>
//         </li>`
//     )
//     .join('');

//   galleryElement.insertAdjacentHTML('beforeend', galleryHTML);
// }



import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import { getImages } from '/js/pixabay-api.js';
import errorIcon from '/img/error-icon.png';
import cautionIcon from '/img/caution-icon.png';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-button');
const loader = document.querySelector('.loader');

const SIMPLY_LIGHTBOX = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 150,
  captionsPosition: 'bottom',
});

let inputValue = null;
let page = 1;

form.addEventListener('submit', searchPhotos);
loadMoreBtn.addEventListener('click', loadNewPhotos);

async function searchPhotos(event) {
  event.preventDefault();
  handleSearchEvents();

  try {
    const data = await getImages(inputValue, 1);
    const images = data.hits;

    if (images.length === 0) {
      handleNoImagesFound();
    } else {
      renderImages(images, gallery);
      SIMPLY_LIGHTBOX.refresh();
    }
  } catch (error) {
    handleNoImagesFound();
  } finally {
    handleFinally();
  }
}

async function loadNewPhotos() {
  handleLoadNewPhotosEvents();

  try {
    const data = await getImages(inputValue, page);
    const images = data.hits;

    if (images.length === 0) {
      handleNoImagesFound(true);
    } else {
      renderImages(images, gallery);
      SIMPLY_LIGHTBOX.refresh();
    }
  } catch (error) {
    handleNoImagesFound();
  } finally {
    handleFinally();
  }
}

function handleSearchEvents() {
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  inputValue = input.value;
}

function handleNoImagesFound(endReached = false) {
  gallery.innerHTML = '';

  const errorMessage = endReached ? `Were sorry, but you've reached the end of search results.` : 
    'Sorry, there are no images matching your search query. Please try again!';

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

function handleLoadNewPhotosEvents() {
  loadMoreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  page++;
}

function handleFinally() {
  loader.classList.add('is-hidden');
  loadMoreBtn.classList.remove('is-hidden');
  form.reset();
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
}