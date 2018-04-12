'use strict';

import type {HeaderActions} from './../Actions/HeaderActions'
import HeaderDispatcher from './../Dispatchers/HeaderDispatcher';
import {ReduceStore} from 'flux/utils';

class HeaderStore extends ReduceStore<HeaderActions, object> {

	constructor() {
	  super(HeaderDispatcher);
	}

  getInitialState(): object {    
    return {
      init = false,
    };
  }

	reduce(state: object, action: HeaderActions): object {
		switch (action.type) {
			case 'InitHeader':
				console.log("Hearder has been initiated")
        state.init = true;
				break;
			default:
      	break;
		}
		this.__emitChange();
		return state;
	}

}
