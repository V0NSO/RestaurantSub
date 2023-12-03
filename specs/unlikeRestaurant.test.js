import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Perbaikan: Gunakan getAllRestaurant
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // Perbaikan: Tambahkan pemeriksaan untuk memastikan tidak ada error yang dilempar
    expect(() => {
      document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
    }).not.toThrow();

    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
