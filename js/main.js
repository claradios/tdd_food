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
    console.log('hola');
    const list = document.querySelector('.cart__list');
    const priceArray = shopArray.map(item => item.price);
    const iva = 10;
    addToShopArray(event);
    printFoodList(list,shopArray,createShoppingCard); 
      //-> con el ul-cart, shopArray, createShopingCart()
    const result = getTotalPrice(iva,priceArray);   //-> con un array de números recogidos del shopArray, cLISTA
    printCounterResult(result);
}

printDataFood();

export { printDataFood, addToShopArray, printShopingData };

