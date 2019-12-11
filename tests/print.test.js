import {
    printFoodList,
    listenCards,
    printCounterResult,
    printShopingData
} from '../js/print.js';
import {
    apiFoodFix
} from './fixtures/apiFoodFix';
import * as createModule from '../js/create.js';


describe('printFoodList', () => {
    const spyCreateCard = jest.spyOn(createModule, 'createCard');
    test('printFoodList(list, []) leaves the ul empty', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        const arr = [];
        printFoodList(list, arr, createModule.createCard);
        expect(list.innerHTML).toHaveLength(0);
    });
    test('printFoodList(list,apiFoodFix) creates at least one li and introduce it into ul from dom', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix, createModule.createCard);

        expect(list.innerHTML).toMatch('li');
        expect(list.lastChild.tagName).toBe('LI');
    });
    test('printFoodList(list,apiFoodFix) creates li secuence and introduce it into ul from dom', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix, createModule.createCard);
        expect(apiFoodFix.length).toBe(list.children.length);
    });
    test('printFoodList(list,apiFoodFix) calls CreateCard', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix, createModule.createCard);
        expect(spyCreateCard).toHaveBeenCalled();
    });
});


describe('listenCards', () => {
    test('listenCards(item, func) add listeners to an element', () => {
        document.body.innerHTML = `
        <ul>
            <li class = "item first"></li>
            <li class = "item second"></li>
        </ul>`;
        const mockFunc = jest.fn();
        const firstElem = document.querySelector('.first');
        const secondElem = document.querySelector('.second');

        listenCards('item', mockFunc);
        firstElem.click();
        secondElem.click();

        expect(mockFunc).toHaveBeenCalled();
        expect(mockFunc).toHaveBeenCalledTimes(2);
    });
    test('listenCards() is undefined', () => {

        const result = listenCards();
        expect(result).toBe(undefined);
    })
});

describe('printCounterResult', () => {

    test('printCounterResult() paints a new p as "<p class="cart-msg">carrito vacío</p>" on html', () => {
        document.body.innerHTML = `
            <div class="cart__counter">
                <p class="counter__items"></p>
                <p class="counter__price"></p>
            </div>`;

        const mother = document.querySelector('.cart__counter');

        printCounterResult();

        expect(mother.innerHTML).toMatch('carrito vacío');
        expect(mother.children.length).toBe(3);
    });
    test('printCounterResult(0) paints a new p as "<p class="cart-msg">carrito vacío</p>" on html', () => {
        document.body.innerHTML = `
            <div class="cart__counter">
                <p class="counter__items"></p>
                <p class="counter__price"></p>
            </div>`;

        const mother = document.querySelector('.cart__counter');

        printCounterResult(0);

        expect(mother.innerHTML).toMatch('carrito vacío');
        expect(mother.children.length).toBe(3);
    });

    test('printCounterResult(17.50) insert 17.50 € as text on <p class="counter__price">', () => {
        document.body.innerHTML = `
            <div class="cart__counter">
                <p class="counter__items"></p>
                <p class="counter__price"></p>
            </div>`;

        const counterPrice = document.querySelector('.counter__price');

        printCounterResult(17.55);

        expect(counterPrice.innerHTML).toMatch('17.55 €');
    });
    test('printCounterResult(17.50,2) insert 2 artículos as text on <p class="counter__items">', () => {
        document.body.innerHTML = `
            <div class="cart__counter">
                <p class="counter__items"></p>
                <p class="counter__price"></p>
            </div>`;

        const counterItems = document.querySelector('.counter__items');
        const amount = 2;
        const output = `<span>${amount}</span> artículos`

        printCounterResult(17.55, amount);
        expect(counterItems.innerHTML).toEqual(output);
    });
});
