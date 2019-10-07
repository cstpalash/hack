import { users } from '../constants';
import _ from 'lodash';

let currentUser = null;

const getCurrentUser = () => {
	return currentUser;
};

const login = (email) => {
	currentUser = _.find(users, item => item.email === email);
}

export default {
	getCurrentUser,
	login
}

