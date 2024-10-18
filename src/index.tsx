import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/scss/global.scss';
import { store } from './store/store';
import { App } from './views/App';
import './intl/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
