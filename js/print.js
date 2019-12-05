'use strict';
import { createCard } from './create.js';

function printFoodList(list, arr = []) {
    if (list) {
        let children = ''; 
        arr.forEach( child => children += createCard(child));
        list.innerHTML = children;
    }
}

export { printFoodList };

