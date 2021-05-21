/// <reference types="Cypress" />
import filterTests from '../../support/filterTests';
describe('Run test', () => {
    filterTests(['pr','smoke'], () => {
    it('test 1', () => {
        console.log('Test 1');
    });
});
filterTests(['smoke'], () => {
    it('test 2', () => {
        console.log('Test 2');
    });
});
});