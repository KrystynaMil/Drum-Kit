'use strict';

import { removeTransition } from '../handlers/remove-transition.js';

/**
 * @name stop the transition 
 * calls handler that stop the transition 
 */

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
