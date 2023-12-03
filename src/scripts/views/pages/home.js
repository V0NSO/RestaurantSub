import TheRestaurantDbSource from '../../data/Therestaurantdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img class="jumbotron-img" src="./images/hero-image_2-large.jpg" alt="pembuka web">
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
