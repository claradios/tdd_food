import { printDataFood, addToShopArray, printShopingData, findAndPush, refreshCart } from '../js/main.js';
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

describe('findAndPush method', () => {
    test('findAndPush(id) finds an element in an array and push it into another array', () => {
        const id = "2a";
        let shopArray = [];
        let apiArray = [{name:"apple", id:"1a"},{name:"burguer", id:"2a"},{name:"fries", id:"3a"}];
        const output = [{name:"burguer", id:"2a"}];
        findAndPush(id,apiArray,shopArray);

        expect(shopArray).toEqual(output);
        expect(shopArray.length).toBe(1);        
    });
});

describe('addToShopArray method', () => {
    const spyFindAndPush = jest.spyOn(mainModule, 'findAndPush');

    test('addToShopArray calls findAndPush', () => {
        document.body.innerHTML = '<button id="6"></button>';
        const btn = document.querySelector('button');
        const id = "2a";
        let shopArray = [{name:"burguer", id:"2a"}];
        let apiArray = [{name:"apple", id:"1a"},{name:"burguer", id:"2a"},{name:"fries", id:"3a"}];
        btn.addEventListener('click',addToShopArray);
        btn.click();

        expect(spyFindAndPush).toHaveBeenCalled();
        expect(spyFindAndPush).toHaveBeenCalledWith(id,apiArray,shopArray)
    });
});

// describe('refreshCart method', () => {

//     const spyRePrintCart = jest.spyOn(mainModule, 'rePrintCart');
//     const spyDeleteArrayItem = jest.spyOn(mainModule, 'deleteArrayItem');    

//     test('addToShopArray calls deleteArrayItem()', () => {  
//         document.body.innerHTML = '<button id="1"></button>';
//         const btnTest = document.querySelector('button');      
//         let shopArray = [{name:"burguer", id:"2a"}];
 
//         btnTest.addEventListener('click',refreshCart);
        
//          btnTest.click();      

//         expect(spyDeleteArrayItem).toHaveBeenCalled();
        
//      });
//      test('addToShopArray calls rePrintCart()', () => {   
//         document.body.innerHTML = '<button id="1"></button>';
//         const btnTest = document.querySelector('button');      
//         let shopArray = [{name:"burguer", id:"2a"}];
 
//         btnTest.addEventListener('click',refreshCart);
        
//          btnTest.click();          

//         expect(spyRePrintCart).toHaveBeenCalled();
  
//      });
// });


