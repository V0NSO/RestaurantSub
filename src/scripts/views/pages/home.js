import TheRestaurantDbSource from '../../data/Therestaurantdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <article class="jumbotron">
      <picture>
                <source media="(max-width: 800px)" srcset="./images/hero-image_2-small.jpg" type="image/jpeg">
                <img src="./images/hero-image_2-large.jpg" alt="hero-image_2">
              </picture>
               </article>
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
