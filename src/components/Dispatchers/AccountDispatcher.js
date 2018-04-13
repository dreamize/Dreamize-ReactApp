'use strict';

import type {AccountActions} from './../Actions/AccountActions'
import {Dispatcher} from 'flux';

const AccountDispatcher: Dispatcher<AccountActions> = new Dispatcher();

export default AccountDispatcher;