'use strict';
import { createCard } from './create.js';

function printFoodList(list, arr = []) {
    if (list) {
        let children = '';
        // for (let i = 0; i < arr.length; i++) {
        //     children += createCard(arr[i]);
        // }
        arr.forEach( child => children += createCard(child));
        list.innerHTML = children;
    }
}

export { printFoodList };

