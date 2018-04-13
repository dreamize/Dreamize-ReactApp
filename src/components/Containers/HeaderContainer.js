import HeaderStore from './../Stores/HeaderStore';
import {Container} from 'flux/utils';
import AccountContainer

import React from 'react';

class HeaderContainer extends React.Component {
	static getStores() {
		return [
			HeaderStore,
		];
	}

	static calculateState(prevState, props) {
		return {
			
		};
	}

	render() {	    
		return  <div id='header' className="headerstyle">
			I'm Header Area
			<AccountContainer />
		</div>
	}

	componentDidMount(){

	}

	componentDidUpdate(){

	}
}
