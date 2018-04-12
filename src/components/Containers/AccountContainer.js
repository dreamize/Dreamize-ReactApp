import AccountStore from './../Stores/AccountStore';
import {Container} from 'flux/utils';
import React from 'react';

class AccountContainer extends React.Component {
	static getStores() {
		return [
			AccountStore,
		];
	}

	static calculateState(prevState, props) {
		return {
			
		};
	}

	render() {	    
		return  <div id='account' className="accountstyle">
			I'm Account Area
			</div>
	}

	componentDidMount(){

	}

	componentDidUpdate(){

	}
}
