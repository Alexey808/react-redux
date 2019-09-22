import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { ActionCreateUser } from '../actions';
import { getUsers } from '../selectors';
import UsersView from "../container/users-view";

class Users extends React.Component {
	onCreate() {
		this.props.onCreate();
	}

	render() {
		const { collection=[] } = this.props;

		return (
			<div>
				<UsersView collection={collection}/>
				<button onClick={()=>this.onCreate()}>Create</button>
			</div>

		);
	}
}


const mapStateToProps = (state, props) => ({
	collection: getUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
	onCreate: (record) => new ActionCreateUser(record).send(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
