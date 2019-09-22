import { createSelector } from 'reselect';

const collection = state => state.get('collection');

export const getUsers = createSelector(
	collection,
	users => users
);
