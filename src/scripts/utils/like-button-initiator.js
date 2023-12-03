/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    // Perbaikan 1: Gunakan class atau ID yang unik untuk likeButton
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      await this._renderButton(); // Perbaikan 2: Tambahkan await untuk memastikan render selesai sebelum melakukan pengujian
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    // Perbaikan 3: Gunakan class atau ID yang unik untuk likeButton
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      await this._renderButton(); // Perbaikan 4: Tambahkan await untuk memastikan render selesai sebelum melakukan pengujian
    });
  },
};

export default LikeButtonPresenter;
