import {
    printFoodList,
    printDataFood,
    listenCards
} from '../js/print.js';
import {
    apiFoodFix
} from './fixtures/apiFoodFix';
import * as createModule from '../js/create.js';
import * as printModule from '../js/print.js';
import * as serviceModule from '../js/service.js';

describe('printFoodList', () => {
    const spyCreateCard = jest.spyOn(createModule, 'createCard');
    test('printFoodList(list, []) leaves the ul empty', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        const arr = [];
        printFoodList(list, arr,createModule.createCard);
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

describe('prinDataFood  ', () => {
    const spyPrintFoodList = jest.spyOn(printModule, 'printFoodList');
    const spyCallApi = jest.spyOn(serviceModule, 'callApi');

    test('printDataFood() gets data from api', () => {
            printDataFood();
            expect(spyPrintFoodList).toHaveBeenCalled(); 
            expect(spyCallApi).toHaveBeenCalled();
    });
});
    

describe('listenCards', () =>{
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