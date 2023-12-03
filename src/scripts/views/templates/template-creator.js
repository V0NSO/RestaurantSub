import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createMovieDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie-judul" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous"/>
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Restaurant Name</h4>
    <p>${resto.name}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>
    Menu List</h4>
    <p>${resto.menus.foods.map((item) => `${item.name}`)}</p>
    <p>${resto.menus.drinks.map((item) => `${item.name}`)}</p>
  </div>

  <div class="movie__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>
  <div class="movie__overview">
  <h3>Reviews</h3>
  ${resto.customerReviews.map(
    (item) => `
    <div class="movie-item">
      <div class="movie-item__content">
        <p><b>${item.name}</b></p>
        <p>${item.review}</p>
        <p>${item.date}</p>
      </div>
    </div>
  `,
  )}
</div>
 
`;

const createMovieItemTemplate = (resto) => `
  <div class="movie-item">
    <div class="movie-item__header">
    <img class="lazyload" alt="${resto.name}" crossorigin="anonymous" data-src="${
  resto.pictureId
    ? CONFIG.BASE_IMG_URL + resto.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${
  resto.rating
}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 ><a class="resto-name" href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <p>${resto.description}</p>
      <br>
      <h4>Location: ${resto.city}</span></h4>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
