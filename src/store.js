import {Map, List} from 'immutable';
import {applyMiddleware, createStore} from "redux";
import {userReducer} from "./components/app/users/reducer";
import userSaga from './components/app/users/sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const initialStore = Map({
	collection: new List([
		Map({id: 0, name: 'name0'}),
		Map({id: 1, name: 'name1'}),
		Map({id: 2, name: 'name2'}),
	])
});

export const store = createStore(userReducer, initialStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);
