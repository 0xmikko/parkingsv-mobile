/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {createDataLoaderReducer} from 'redux-data-connect';
import {CONTACT_PREFIX} from './';
import {Contact} from '../../core/contact';

export default createDataLoaderReducer<Contact>(CONTACT_PREFIX);
