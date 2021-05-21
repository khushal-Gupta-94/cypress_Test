/// <reference types="Cypress" />
import filterTests from '../../support/filterTests';
describe('Run test demo', () => {
    filterTests(['smoke'], () => {
    it('test 01', () => {
        console.log('Test 1');
    });
});
filterTests(['smoke'], () => {
    it('test 02', () => {
        console.log('Test 2');
    });
});
});