import {
    printFoodList,
    printDataFood
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
        printFoodList(list, arr);
        expect(list.innerHTML).toHaveLength(0);
    });
    test('printFoodList(list,apiFoodFix) creates at least one li and introduce it into ul from dom', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix);

        expect(list.innerHTML).toMatch('li');
        expect(list.lastChild.tagName).toBe('LI');
    });
    test('printFoodList(list,apiFoodFix) creates li secuence and introduce it into ul from dom', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix);
        expect(apiFoodFix.length).toBe(list.children.length);
    });
    test('printFoodList(list,apiFoodFix) calls CreateCard', () => {
        document.body.innerHTML = '<ul></ul>';
        const list = document.querySelector('ul');
        printFoodList(list, apiFoodFix);
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