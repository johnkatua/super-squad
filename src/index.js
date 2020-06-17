import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { addCharacterById} from './actions';

const store = createStore(rootReducers, applyMiddleware(logger));
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(3));

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
     ,document.getElementById('root')
);