(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint no-undef: "error"*/

const emptyFile = require('../testfiles/empty.json');
const wrongKeyBook = require('../testfiles/wrongstructure.json');
const validFile = require('../testfiles/books.json');
const wrongFile = require('../testfiles/wrongfile.json');

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

},{"../testfiles/books.json":2,"../testfiles/empty.json":3,"../testfiles/wrongfile.json":4,"../testfiles/wrongstructure.json":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports=""
},{}],4:[function(require,module,exports){
module.exports={
  "name": "inverted-index",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "dependencies": {
    "browser-sync": "^2.18.2",
    "express": "^4.14.0",
    "gulp": "^3.9.1",
    "gulp-browserify": "^0.5.1",
    "gulp-rename": "^1.2.2",
    "gulp-run": "^1.7.1",
    "gulp-watch": "^4.3.11",
    "browserify": "^3.46.1",
    "coveralls": "^2.11.15",
    "eslint": "^3.11.1",
    "eslint-config-airbnb": "^13.0.0",
    "eslint-config-airbnb-base": "^10.0.1",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^2.2.3",
    "eslint-plugin-react": "^6.7.1",
    "jasmine": "^2.5.2",
    "jasmine-core": "^2.5.2",
    "jasmine-node": "^1.14.5",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-coveralls": "^1.1.2",
    "karma-jasmine": "^1.0.2",
    "karma-spec-as-html-reporter": "0.0.3",
    "karma-verbose-reporter": "0.0.3"
  },
  "devDependencies": {
    "browserify": "^3.46.1",
    "coveralls": "^2.11.15",
    "eslint": "^3.11.1",
    "eslint-config-airbnb": "^13.0.0",
    "eslint-config-airbnb-base": "^10.0.1",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^2.2.3",
    "eslint-plugin-react": "^6.7.1",
    "jasmine": "^2.5.2",
    "jasmine-core": "^2.5.2",
    "jasmine-node": "^1.14.5",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-coveralls": "^1.1.2",
    "karma-jasmine": "^1.0.2",
    "karma-spec-as-html-reporter": "0.0.3",
    "karma-verbose-reporter": "0.0.3"
  },
  "scripts": {
    "start": "gulp serve",
    "test": "karma start karma.conf.js --single-run"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andela-obanwo/inverted-index.git"
  },
  "author": "Oreoluwa Banwo",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/andela-obanwo/inverted-index/issues"
  },
  "homepage": "https://github.com/andela-obanwo/inverted-index#readme"
}

},{}],5:[function(require,module,exports){
module.exports=[
  {
    "texts":"teesasdfasfd dsafdf",
    "titles":"vicky last name"
  },
  {
    "text":"line up of our young detectives",
    "title": "Secret Love child"}
]

},{}]},{},[1])