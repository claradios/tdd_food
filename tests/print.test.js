import { printFoodList } from '../js/print.js';
import { apiFoodFix } from './fixtures/apiFoodFix';


describe('printFoodList', () => {

    beforeEach(() => {

    });

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
});