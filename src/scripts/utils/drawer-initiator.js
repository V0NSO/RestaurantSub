/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    if (button) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
    } else {
      console.error('Button element is null');
    }

    if (content) {
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    } else {
      console.error('Content element is null');
    }
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
