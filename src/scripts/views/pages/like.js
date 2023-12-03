import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

// ... (your existing code)

const like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="movies" class="movies"></div>
        <input id="query" type="text">
        <p id="noFavoriteText" class="no-favorite-text" style="display: none;">Tidak ada restaurant yang disukai.</p>
      </div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const moviesContainer = document.querySelector('#movies');
    const noFavoriteText = document.querySelector('#noFavoriteText');

    if (restaurants.length === 0) {
      // Tampilkan teks jika tidak ada restoran yang disukai
      noFavoriteText.style.display = 'block';
    } else {
      // Tampilkan restoran jika ada yang disukai
      restaurants.forEach((restaurant) => {
        moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
      });
    }
  },
};

export default like;
