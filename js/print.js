'use strict';
import { createCard } from './create.js';
import { callApi } from './service.js';

function printFoodList(list, arr = []) {
    if (list) {
        let children = ''; 
        arr.forEach( child => children += createCard(child));
        list.innerHTML = children;
    }
}

function printDataFood() {
    callApi().then( data => {
        const foodList = document.querySelector('.display__list');
        console.log(foodList)
        printFoodList(foodList, data); 
     });
};

export { printFoodList, printDataFood };

