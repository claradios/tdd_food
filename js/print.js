'use strict';
import { createCard } from './create.js';
import { callApi } from './service.js';

function printFoodList(list, arr = [], func) {
    if (list) {
        let children = ''; 
        arr.forEach( child => children += func(child));
        list.innerHTML = children;
    }
}

function listenCards(clase, func) {
    if(clase && func) {
        const elements = document.querySelectorAll(`.${clase}`)
        for(const element of elements) {
            element.addEventListener('click',func);
        }
    }
}

function printDataFood() {
    callApi().then( data => {
        const foodList = document.querySelector('.display__list');
        printFoodList(foodList, data, createCard); 
     });
}

export { printFoodList, printDataFood, listenCards };

