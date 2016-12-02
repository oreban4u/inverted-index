(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]

},{}],2:[function(require,module,exports){
module.exports=""
},{}],3:[function(require,module,exports){
/* eslint no-undef: "error"*/

const emptyFile = require('../empty.json');
const wrongKeyBook = require('../wrongstructure.json');
const validFile = require('../books.json');

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

},{"../books.json":1,"../empty.json":2,"../wrongstructure.json":4}],4:[function(require,module,exports){
module.exports=[
  {
    "texts":"teesasdfasfd dsafdf",
    "titles":"vicky last name"
  },
  {
    "text":"line up of our young detectives",
    "title": "Secret Love child"}
]

},{}]},{},[3])