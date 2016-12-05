/* eslint no-undef: "error"*/

const emptyFile = require('../empty.json');
const wrongKeyBook = require('../wrongstructure.json');
const validFile = require('../books.json');
const wrongFile = require('../../package.json')

const newInstance = new Index();

// tests file
describe('Read Book Data', () => {
  it('Should return \'true\' for Valid JSON file', () => {
    expect(newInstance.validateFile(JSON.stringify(validFile))[0])
    .toEqual(true);
  });
  const report = 'Empty File Please Upload a Valid Json File';
  it(`Should return ${report} for an upload with no data`, () => {
    expect(newInstance.validateFile(emptyFile)[1])
    .toEqual('Empty File Please Upload a Valid Json File');
  });
  it('Should return Invalid Content for wrongly structured valid file', () => {
    expect(newInstance.validateFile(JSON.stringify(wrongKeyBook))[1])
    .toEqual('Invalid Content');
    expect(newInstance.validateFile(JSON.stringify(wrongFile))[1])
    .toEqual('Invalid Content');
  });
});

describe('Populate Index', () => {
  it('Should confirm that Index is Created once file is read', () => {
    expect(newInstance.createIndex(validFile).alice).toBeDefined();
  });
  it('Should confirm that the string key is matched to correct object', () => {
    expect(newInstance.createIndex(validFile).and[0]).toEqual(true);
  });
  it('Should confirm correct index is returned', () => {
    expect(newInstance.getIndex().and[0]).toEqual(true);
  });
});

describe('Test Search', () => {
  it('Should confirm that Search returns valid index', () => {
    expect(newInstance.searchIndex('alice and wonderland').and[0])
    .toEqual(true);
  });
  it('Should confirm that an array input is converted to string', () => {
    expect(newInstance.searchIndex(['alice', 'in', 'last']).alice[1])
    .not.toBeDefined();
  });
});
