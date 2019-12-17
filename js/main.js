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

function findAndPush(id, referenceArray, pushableArray) {
    const newArray = referenceArray.filter(item => item.id === id);
    pushableArray.push(newArray[0]);
}

function addToShopArray(event) {
    if (event) {
        const id = event.currentTarget.id;
        findAndPush(id, apiArray, shopArray);
    }
}

function deleteArrayItem(element, array) {
    if(element && array) {
        const id = element.id;
        const itemToDelete = array.findIndex(item => item.id === id); 
        const newArray = array.splice(itemToDelete, 1);
        array = newArray;   
    }
}

function rePrintCart() {
    const list = document.querySelector('.cart__list');           
    const articlesNum = shopArray.length;
    const priceArray = shopArray.map(item => parseFloat(item.price)); 
    const result = getTotalPrice(priceArray);    
    printFoodList(list,shopArray,createShoppingCard); 
    listenCards('shop-card__btn',refreshCart);
    printCounterResult(result,articlesNum);
}

function printShopingData(event) {  
    addToShopArray(event);
    rePrintCart();
}

function refreshCart(event) {   
    const element= event.currentTarget;   
    deleteArrayItem(element, shopArray);
    rePrintCart();
}

printDataFood();


export { printDataFood, addToShopArray, printShopingData, deleteArrayItem, findAndPush, refreshCart, rePrintCart };

