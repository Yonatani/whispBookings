import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import BookingApp from './components/BookingApp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/index.scss';
const store = configureStore();

registerServiceWorker();

const App = () => (
    <Provider store={store}>
        <BookingApp />
    </Provider>
);

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

render(App);

// This is a workaround to HMR support because babel-plugin-dva-hmr is not available with create-react-app
if (module.hot) {
    module.hot.accept('./components/BookingApp', () => {
        const NextApp = require('./components/BookingApp').default;
        render(NextApp);
    });
}
