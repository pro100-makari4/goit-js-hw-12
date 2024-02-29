import axios from 'axios';

const KEY = '42558168-62173c93aab0d4cbf34bb4fab';
const baseUrl = 'https://pixabay.com/api/';

export async function getImages(query, page) {
  try {
    let response = await axios.get(
      `${baseUrl}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`
    );

    if (!response.data.hits) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    alert.error;
  }
}
