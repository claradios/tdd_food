'use strict';
import { printFoodList, listenCards, printCounterResult} from './print.js';
import { getTotalPrice, createShoppingCard } from './create.js';
import { createCard } from './create.js';
import { callApi } from './service.js';
let shopArray = [];
let apiArray = [];

function printDataFood() {
    callApi().then(data => {
        apiArray = data;
        const foodList = document.querySelector('.display__list');
        printFoodList(foodList, apiArray, createCard);
        listenCards('card', printShopingData);
    });
}

function addToShopArray(event) {
    if (event) {
        const id = event.currentTarget.id;
        const newArray = apiArray.filter(item => item.id === id);
        shopArray.push(newArray[0]);
    }
}

function printShopingData(event) {  
    addToShopArray(event);

    const list = document.querySelector('.cart__list');           
    const articlesNum = shopArray.length;
    const priceArray = shopArray.map(item => parseFloat(item.price)); 
    const result = getTotalPrice(priceArray); 
   
    printFoodList(list,shopArray,createShoppingCard); 
    printCounterResult(result,articlesNum);
}

printDataFood();

export { printDataFood, addToShopArray, printShopingData };

