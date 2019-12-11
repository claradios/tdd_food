import { printDataFood, addToShopArray } from '../js/main.js';
import * as printModule from '../js/print.js';
import * as serviceModule from '../js/service.js';



describe('prinDataFood ', () => {
    
    const spyCallApi = jest.spyOn(serviceModule, 'callApi');
    const spyPrintFoodList = jest.spyOn(printModule, 'printFoodList');
    test('printDataFood() gets data from api', () => {
        printDataFood();
        expect(spyCallApi).toHaveBeenCalled();
        // expect(spyPrintFoodList).toHaveBeenCalled();
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