const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Resto');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});
// eslint-disable-next-line no-unused-vars, no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant yang disukai.', '#noFavoriteText');
});

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('liking and Unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant yang disukai.', '#noFavoriteText');

  I.amOnPage("/");
  I.waitForElement(".resto-name", 10);
  I.seeElement(".resto-name");
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate(".resto-name").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // eslint-disable-next-line no-undef
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  // eslint-disable-next-line no-undef
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.waitForElement(".movie-item")
  I.seeElement(".movie-item");
  const likedRestaurantName = await I.grabTextFrom(".resto-name");

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Unliking Restaurant
  I.click(likedRestaurantName);
  I.seeElement("#likeButton");
  // eslint-disable-next-line no-undef
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.see('Tidak ada restaurant yang disukai.', '#noFavoriteText');
});
