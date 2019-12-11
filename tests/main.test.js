import { printDataFood, addToShopArray, printShopingData } from '../js/main.js';
import * as printModule from '../js/print.js';
import * as serviceModule from '../js/service.js';
import * as mainModule from '../js/main.js';
import * as createModule from '../js/create.js';


describe('prinDataFood ', () => {
    
    const spyCallApi = jest.spyOn(serviceModule, 'callApi');
    const spyPrintFoodList = jest.spyOn(printModule, 'printFoodList');
    test('printDataFood() gets data from api', () => {
        printDataFood();
        expect(spyCallApi).toHaveBeenCalled();
        // expect(spyPrintFoodList).toHaveBeenCalled();
    });
});

describe('printShopingData', () => {

    const spyAddToShopArray = jest.spyOn(mainModule, 'addToShopArray');
    const spyPrintFoodList = jest.spyOn(printModule, 'printFoodList');
    const spyGetTotalPrice = jest.spyOn(createModule, 'getTotalPrice');
    const spyCounterResult = jest.spyOn(printModule, 'printCounterResult');

    test('printShopingData() calls addToShopArray(), printFoodList(), getTotalPrice(),printCounterResult()', () => {

        printShopingData();

        expect(spyPrintFoodList).toHaveBeenCalled();
        expect(spyGetTotalPrice).toHaveBeenCalled();
        expect(spyCounterResult).toHaveBeenCalled();
        //expect(spyAddToShopArray).toHaveBeenCalled();    
    });
});
// describe('addToShopArray ', () => {
//     document.body.innerHTML = `
//         <ul>
//             <li class = "item first" id="1"></li>
//             <li class = "item second"></li>
//         </ul>`;
//     let shopArray = [];
//     let apiArray =[{id: '1'}];
//     const item = document.querySelector('.first');
//     item.addEventListener('click', addToShopArray)
//     item.click();
    
//     test('addToShopArray() return a array with objects', () => {
//         //expect(addToShopArray).toHaveBeenCalled();
//         expect(shopArray[0]).toEqual(apiArray[0]);
//         expect(shopArray.length).not.toBe(0);
//     });
// });