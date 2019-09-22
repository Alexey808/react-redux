import { put, call } from 'redux-saga/effects';

function* userSaga(action) {
	try {
		console.log('test saga', action);
	} catch (e) {
		yield put({type: 'action/user/create'})
	}
}
export default userSaga;

// export default [
// 	function* () {
// 		yield call(userSaga);
// 	}
// ];

// function* takeEvery() {
// 	yield takeEvery('action/users/create', userSaga);
// }
