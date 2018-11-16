const { expect } = require('chai');
const _ = require('lodash');
const smartContains = require('../index');

describe('smartContains', function () {

	const firstWord = 'Fedor';
	const secondWord = 'Dostoevsky';
	const string = `${firstWord} ${secondWord}`;

	it('should find substring than it matches with whole string', function () {
		const result = smartContains(string, string);
		expect(result).to.equal(true)
	})

	it('should find substring independent of case', function () {
		expect(smartContains(string, string.toLowerCase())).to.equal(true)
	})

	it('should find substring by first half', function () {
		expect(smartContains(string, firstWord)).to.equal(true);
	})

	it('should find substring by second half', function () {
		expect(smartContains(string, secondWord)).to.equal(true)
	})

	it('should find substring by initials', function () {
		const result = smartContains(string, `${firstWord[0]}${secondWord[0]}`);
		expect(result).to.equal(true)
	})

	it('should find substring by partial first and second words', function () {
		expect(smartContains(string, `${firstWord.substring(0, 2)} ${secondWord.substring(0, 2)}`)).to.equal(true)
	})

	it('should return true for null substring', function () {
		expect(smartContains(string,null)).to.equal(true)
	})

	it('should return true for empty substring', function () {
		expect(smartContains(string, '')).to.equal(true)
	})

	it('should return false for null string', function () {
		expect(smartContains(null, string)).to.equal(false)
	})

	it('should return false for empty string', function () {
		expect(smartContains('', string)).to.equal(false)
	})

	it('should return false for null string and substring', function () {
		expect(smartContains(null, null)).to.equal(false)
	})



});