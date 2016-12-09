/* eslint no-undef: "error"*/

const emptyFile = require('../testfiles/empty.json');
const wrongKeyBook = require('../testfiles/wrongstructure.json');
const validFile = require('../testfiles/books.json');
const wrongFile = require('../testfiles/wrongfile.json')

const testInvertedIndex = new Index();

// tests file
describe('Read Book Data', () => {
  it('Should return \'true\' for Valid JSON file', () => {
    expect(testInvertedIndex.validateFile(JSON.stringify(validFile))[0])
    .toEqual(true);
  });
  const report = 'Empty File Please Upload a Valid Json File';
  it(`Should return ${report} for an upload with no data`, () => {
    expect(testInvertedIndex.validateFile(emptyFile)[1])
    .toEqual(report);
  });
  it('Should return Invalid Content for wrongly structured valid file', () => {
    expect(testInvertedIndex.validateFile(JSON.stringify(wrongKeyBook))[1])
    .toEqual('Invalid Content');
    expect(testInvertedIndex.validateFile(JSON.stringify(wrongFile))[1])
    .toEqual('Invalid Content');
  });
});

describe('Populate Index', () => {
  it('Should confirm that Index is Created once file is read', () => {
    expect(testInvertedIndex.createIndex(validFile).alice).toBeDefined();
  });
  it('Should confirm that the string key is matched to correct object', () => {
    expect(testInvertedIndex.createIndex(validFile).and[0]).toEqual(true);
  });
  it('Should confirm correct index is returned', () => {
    expect(testInvertedIndex.getIndex().of).toEqual({0: true, 1: true});
    expect(Object.keys(testInvertedIndex.getIndex()).length).toEqual(25);
  });
});

describe('Search Index', () => {
  const searchString = 'alice of fellowship';
  it('Should confirm that Search returns valid index', () => {
    expect(testInvertedIndex.searchIndex(searchString).alice)
    .toEqual({0: true});
    expect(testInvertedIndex.searchIndex(searchString).of)
    .toEqual({0: true, 1: true});
    expect(Object.keys(testInvertedIndex.searchIndex(searchString).of)
    .length).toEqual(2);
  });
  it('Should confirm that an array input is converted to string', () => {
    expect(testInvertedIndex.searchIndex(['alice', 'in', 'last']).alice)
    .toBeDefined();
  });
  it('Should return { 0: false} for a search with an non-existing word', () => {
    expect(testInvertedIndex.searchIndex(searchString).fellowship)
    .toEqual({ 0: false });
  });
});
