export function ActionCreateUser(value) {
	console.log('action/user/create -> ', value);
	return {type: 'action/user/create', subject: {value}}
}

export function ActionDeleteUser(value) {
	console.log('action/user/delete -> ', value);
	return {type: 'action/user/delete', subject: {value}}
}

export function ActionSaveUser(value) {
	console.log('action/user/save -> ', value);
	return {type: 'action/user/save', subject: {value}}
}

