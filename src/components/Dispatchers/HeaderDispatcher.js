'use strict';

import type {HeaderActions} from './../Actions/HeaderActions'
import {Dispatcher} from 'flux';

const HeaderDispatcher: Dispatcher<HeaderActions> = new Dispatcher();

export default HeaderDispatcher;