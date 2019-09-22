import React from 'react';

export default class UsersView extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const {collection} = this.props;

		const users = collection.map((user) => (
			<div key={user.get("id")}>
				<div>{user.get("name")}</div>
			</div>

		));

		return (
			<div>
				<div>{users}</div>
			</div>
		);
	}
}
