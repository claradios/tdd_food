import {getTotalPrice } from '../js/create.js';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

describe ('getTotalPrice', () => {
    test('getTotalPrice() returns 0',() => {
        const result =getTotalPrice();

        expect(result).toBe(0);
    });
    test('getTotalPrice(10,5,3) returns 8.8', () => {
        const result =getTotalPrice(10,5,3);

        expect(result).toBe(8.8);
    });
    test('getTotalPrice(10,5,3,1) returns 9.9', () => {
        const result =getTotalPrice(10,5,3,1);

        expect(result).toBe(9.9);
    });

});