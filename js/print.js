'use strict';

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


function printMsgEmptyCart() {
    const counter = document.querySelector('.cart__counter');
    if(counter) {
        const counterItems = counter.children[1];
        const msg = document.createTextNode('carrito vacío');
        const textWarning = document.createElement('p');
        textWarning.className ='txt-warning';
        textWarning.appendChild(msg);   
        counter.insertBefore(textWarning, counterItems);
    }
}

function deleteMsgEmptyCart() {
    const msgEmptyCart = document.querySelector('.txt-warning');
    if (msgEmptyCart) {msgEmptyCart.remove()};
}


function printCounterResult(price,amount) {
    if (!price) {
        printMsgEmptyCart();
    } else {
        deleteMsgEmptyCart();
        const counterPrice = document.querySelector('.counter__price');
        const counterItems = document.querySelector('.counter__items');
        counterPrice.innerHTML =`${price} €`; 
        counterItems.innerHTML = `<span>${amount}</span> artículos`;  
    }    
}






export { printFoodList, listenCards, printCounterResult};

