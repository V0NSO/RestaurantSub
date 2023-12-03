import TheRestaurantDbSource from '../../data/Therestaurantdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <picture>
<<<<<<< HEAD
        <source media="(max-width: 800px)" srcset="./images/hero-image_2-small.jpg" type="image/jpeg">
=======
        <source media="(max-width: 800px)" srcset="./images/hero-image_2-small.jpg type="image/jpeg">
>>>>>>> 6298a30ae0786be9368446d12ecc03406dcb4b49
        <img src="./images/hero-image_2-large.jpg" alt="pembuka web">
      </picture>
      <div class="content">
        <h2 class="content__heading">Eating House</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homePages();

    const moviesContainer = document.querySelector('#movies');
    restaurants.forEach((resto) => {
      moviesContainer.innerHTML += createMovieItemTemplate(resto);
    });
  },
};

export default Home;
