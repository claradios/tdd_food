import {
    getTotalPrice,
    createCard,
    getIngredientList, 
    createDefaultObject,
    createShoppingCard
} from '../js/create.js';

import { apiFoodFix } from './fixtures/apiFoodFix';

describe('getTotalPrice', () => {
    test('getTotalPrice() returns 0', () => {
        const result = getTotalPrice();

        expect(result).toBe(0);
    });
    test('getTotalPrice(10,5,3) returns 8.8', () => {
        const result = getTotalPrice([5, 3],10);

        expect(result).toBe("8.80");
    });
    test('getTotalPrice(10,5,3,1) returns 9.9', () => {
        const result = getTotalPrice([5, 3, 1] ,10);

        expect(result).toBe("9.90");
    });

});

describe('createDefaultObject', () => {
    test('return an object with default string properties', () => {
        const result = createDefaultObject();
        const output = {
            defaultId : '1',
            defaultName : 'plato',
            defaultPrice : 10,
            defaultDesc : 'Sin descripción',
            defaultImg : 'https://via.placeholder.com/500x500',
            defaultIngredients : 'Ingredientes no disponibles'
        } 

        expect(result).toEqual(output);       
        expect(typeof result).toBe('object');
        expect(result).toHaveProperty('defaultId');
        expect(result).toHaveProperty('defaultName');
        expect(result).toHaveProperty('defaultPrice');
        expect(result).toHaveProperty('defaultDesc');
        expect(result).toHaveProperty('defaultImg');
        expect(result).toHaveProperty('defaultIngredients');
    });

});

describe('getIngredientsList', () => {
    test('return html string with a list of ingredients', () => {
        const ingredients = ['manzana', 'pera'];
        const output = `<li class ="ingredient">${ingredients[0]}</li><li class ="ingredient">${ingredients[1]}</li>`
        const result = getIngredientList(ingredients);

        expect(result).toEqual(output);
    });
    test('return html string with a list of ingredients', () => {        
        const result = getIngredientList();
        expect(result).toBe(undefined);
    });
});

describe('createCard', () => {
    test('createCard() does not return anything', () => {
        const result = createCard();

        expect(result).toBe(undefined);
    });
 
    test('createCard(obj) return a card', () => {
        const ing = '<li class ="ingredient">cheddar cheese</li><li class ="ingredient">eggs</li><li class ="ingredient">olive oil</li><li class ="ingredient">onions</li><li class ="ingredient">potato</li><li class ="ingredient">salt</li>'
        const input = apiFoodFix[0];
        const result = createCard(input);
        const { id, name, price, description, image, ingredients } = input;        
        const output = `
        <li id=${id} class="card">
            <h3 class="card__name">${name}</h3>
            <p class="card__price">Precio: ${price} €</p>
            <div class="card__image">
                <img class="card__photo" src="${image}" alt="${name}"/>
            </div>
            <p class="card__description">${description}</p>
            <ul class="card__ingredients">${ing} </ul>
        </li>`;

        expect(result).toEqual(output);        
    });
    test('createCard(obj) retund a default card', () => {
        const input = apiFoodFix[1];
        const defaultObj = {
            defaultId : '1',
            defaultName : 'plato',
            defaultPrice : 10,
            defaultDesc : 'Sin descripción',
            defaultImg : 'https://via.placeholder.com/500x500',
            defaultIngredients : 'Ingredientes no disponibles'
        }
        const {defaultName,defaultDesc,defaultIngredients} = defaultObj;
        const { id, name, price,image} = input; 

               
        const output = `
        <li id=${id} class="card">
            <h3 class="card__name">${defaultName}</h3>
            <p class="card__price">Precio: ${price} €</p>
            <div class="card__image">
                <img class="card__photo" src="${image}" alt="${name}"/>
            </div>
            <p class="card__description">${defaultDesc}</p>
            <ul class="card__ingredients">${defaultIngredients} </ul>
        </li>`;
                
        const result = createCard(input);
        expect(result).toEqual(output);
    });
});

describe('createShoppingCard', () => {
    test('createShopping() does not return anything', () => {
        const result = createShoppingCard();

        expect(result).toBe(undefined);
    });

    test('createShoppingCard(obj) return a card', () => {
        const obj = {
            id: '22a',
            name: 'Hamburguesa',
            price: 10
        };
        const { id, name, price } = obj
        const output = `
        <li data-id=${id} class="shop-card">
            <h3 class="shop-card__name">${name}</h3>
            <p class="shop-card__price">Precio: ${price} €</p>
            <button class="shop-card__btn">X</button>
        </li>`
        const result = createShoppingCard(obj);

        expect(result).toEqual(output);
    });
    
    test('createShoppingCard(obj) return a default card', () => {
        const obj = {
            id: undefined,
            name: null,
            price: null
        }
        const defaultObj = {
            defaultId: '1',
            defaultName: 'plato',
            defaultPrice: 10
        };
        const { defaultId, defaultName, defaultPrice } = defaultObj
        const output = `
        <li data-id=${defaultId} class="shop-card">
            <h3 class="shop-card__name">${defaultName}</h3>
            <p class="shop-card__price">Precio: ${defaultPrice} €</p>
            <button class="shop-card__btn">X</button>
        </li>`
        const result = createShoppingCard(obj);

        expect(result).toEqual(output);

    });
});