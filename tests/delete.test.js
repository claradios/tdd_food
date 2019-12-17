import { deleteArrayItem } from '../js/main.js';

describe('deteleArrayItem()', () => {
    test('deteleArrayItem(li) delete item in array whit same id', () => {
        document.body.innerHTML = `<li id="2a" class = "item first"></li>`;
        let shopArray = [ {name: 'burguer', id: '1a'}, {name: 'hot dog', id: '2a'} ];
        const output = [{name: 'burguer', id: '1a'}];
        const input = document.getElementById("2a");
        deleteArrayItem(input, shopArray);
        expect(shopArray.length).toBe(1)
        expect(shopArray).toEqual(output);
    });
});