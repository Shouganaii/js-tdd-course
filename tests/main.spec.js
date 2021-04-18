/* eslint-disable */
let expect = require('chai').expect;

describe('Main', () => {
  let arr;

  beforeEach(() => {
    arrr = [1, 2, 3];
  })
  it('should have a size of 4 when push another value to the array', () => {

    arrr.push(4)
    expect(arrr).to.have.lengthOf(4)
  })

  it('should remove the value 3 when use pop in the array', () => {

    arrr.pop();
    expect(arrr).to.not.include(3);
  })

  it('should remove the value 3 when use pop in the array', () => {

    arrr.pop();
    expect(arrr).to.have.lengthOf(2)
  })

  it('should be an array', () => {

    expect(arrr).to.be.an('array')

  })

  it('should return true when pop 3 from the array', () => {
    expect(arrr.pop() === 3).to.be.true
  })

});
