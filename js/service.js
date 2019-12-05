'use strict';
const ENDPOINT = '../apiFood.json';

function callApi() {
    return fetch(ENDPOINT).then(res => res.json());
}

export { callApi, ENDPOINT };