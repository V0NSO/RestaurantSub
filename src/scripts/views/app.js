/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content || document.getElementById('mainContent');

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // Pastikan elemen this._content sudah terdefinisi dan bukan null
    if (this._content) {
      this._content.innerHTML = await page.render();
      await page.afterRender();

      // Cari elemen dengan kelas .skip-link setelah konten dirender
      const skipElement = document.querySelector('.skip-link');

      // Periksa apakah skipElement tidak null sebelum menambahkan event listener
      if (skipElement) {
        skipElement.addEventListener('click', (event) => {
          event.preventDefault();
          document.querySelector('#mainContent').focus();
        });
      } else {
        console.error('Element with class .skip-link not found');
      }
    } else {
      console.error('Content element is null or undefined');
    }
  }
}

export default App;
