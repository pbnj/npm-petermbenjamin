const { describe, it } = require('mocha');
const { expect } = require('chai');
const my = require('../index');

describe('petermbenjamin', () => {
  describe('fullname', () => {
    it('should contain first name, middle initial, last name, and title', () => {
      const me = '\u001b[1m\u001b[4mPeter M Benjamin\u001b[24m\u001b[22m | Senior Software Engineer';
      expect(my.fullName()).to.eql(me);
    });
  });
  describe('contact', () => {
    it('should contain all contact info', () => {
      expect(my.contactInfo()).to.have.deep.property('length', 11);
    });
  });
});
