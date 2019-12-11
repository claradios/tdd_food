import {
    getTotalPrice,
    createCard
} from '../js/create.js';

import { apiFoodFix } from './fixtures/apiFoodFix';


describe('getTotalPrice', () => {
    test('getTotalPrice() returns 0', () => {
        const result = getTotalPrice();

        expect(result).toBe(0);
    });
    test('getTotalPrice(10,5,3) returns 8.8', () => {
        const result = getTotalPrice(10, 5, 3);

        expect(result).toBe(8.8);
    });
    test('getTotalPrice(10,5,3,1) returns 9.9', () => {
        const result = getTotalPrice(10, 5, 3, 1);

        expect(result).toBe(9.9);
    });

});

describe('createCard', () => {
    test('createCard() restuns empty card', () => {
        const result = createCard();

        expect(result).toBe('');
    });
 
    test('createCard(obj) retund a printed card', () => {
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
        // const defaultName = 'plato';
        // const defaultDesc = 'Sin descripción';
        // const defaultIngredientes = 'Ingredientes no disponibles';
        const defaultObj = {
            defaultId : '1',
            defaultName : 'plato',
            defaultPrice : '-',
            defaultDesc : 'Sin descripción',
            defaultImg : 'https://via.placeholder.com/500x500',
            defaultIngredients : 'Ingredientes no disponibles'
        }
        const {defaultName,defaultDesc,defaultIngredients} = defaultObj;
        const result = createCard(input,defaultObj);
        const { id, name, price, description, image, ingredients } = input;        
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
        expect(result).toEqual(output);
    });
});