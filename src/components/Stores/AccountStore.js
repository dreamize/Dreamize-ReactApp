'use strict';

import type {AccountActions} from './../Actions/AccountActions'
import AccountDispatcher from './../Dispatchers/AccountDispatcher';
import {ReduceStore} from 'flux/utils';

class AccountStore extends ReduceStore<AccountActions, object> {

	constructor() {
  	super(AccountDispatcher);
  }

  getInitialState(): object {    
    return {
      init = false,
    };
  }

	reduce(state: object, action: AccountActions): object {
		switch (action.type) {
			case 'InitAccount':
				console.log("Hearder has been initiated")
        stste.init = true;
				break;
			default:
      	break;
		}
		this.__emitChange();
		return state;
	}

}
