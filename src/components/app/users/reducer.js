export function userReducer(state, action) {
	switch (action.type) {
		case 'action/user/create':
			return state.set('collection', state.get('collection').push(action.subject.value));
		case 'action/user/delete':
			return state.set('collection', state.get('collection').filter((item) => item.get('id') !== action.subject.value));
		case 'action/user/save':
			return state;
		default:
			return state;
	}
}
