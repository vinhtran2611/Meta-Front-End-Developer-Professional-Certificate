const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test('return add five', ()=>{
    expect(addFive(1)).toBe(6)
})