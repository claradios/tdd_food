'use strict';
import { printFoodList} from './print.js';
import {createCard} from './create.js';
import {callApi} from './service.js';
let shopArray = [];
let apiArray = [];

function printDataFood() {
    callApi().then( data => {
        apiArray = data;
        const foodList = document.querySelector('.display__list');
        printFoodList(foodList, apiArray, createCard); 
            
     });
}

function addToShopArray(event) {
    const id = event.currentTarget.id;  
    const newArray = apiArray.filter(item => item.id === id); 
    shopArray.push(newArray[0]);  
}


printDataFood();

export { printDataFood, addToShopArray };

