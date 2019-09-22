import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

// import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import {userReducer} from './components/app/users/reducer';
// const store = createStore(userReducer);
import {store} from './store';

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

