'use strict';
const ENDPOINT = '../apiFood.js';

function callApi() {
    return fetch(ENDPOINT).then(res => res.json());
}

export { callApi, ENDPOINT };