const { describe, it } = require('mocha');
const { expect } = require('chai');
const info = require('../index');

describe('info', () => {
  describe('name', () => {
    it('should contain first name, middle initial, last name, and title', () => {
      const me = {
        first: 'Peter',
        middle: 'M',
        last: 'Benjamin',
        title: 'Senior Software Engineer',
      };
      expect(info.name).to.eql(me);
    });
  });
  describe('contact', () => {
    it('should contain all the expected sites', () => {
      expect(info.contact).to.have.all.keys(['codewars', 'devpost', 'email', 'github', 'keybase', 'linkedIn', 'medium', 'npm', 'quora', 'reddit', 'twitter']);
    });
  });
});
