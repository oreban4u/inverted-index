/* eslint-disable no-unused-vars*/

/**
 * Class for Complete Inverted Index.
 * @class
 */
class Index {
  /**
  * Defined all Variables to be used.
  * @constructor
  */
  constructor() {
    this.indexes = {};
    this.book = [];
    this.vbook = [];
  }

  /**
  * A method to Create Index of Uploaded File.
  * @param {Object} book
  * @return {Object} Returns an Object containing the created Index.
  */
  createIndex(book) {
    this.book = book;
    for (let i = 0; i < this.book.length; i += 1) {
      const textIndex = this.book[i].text.toLowerCase().match(/\w+/g);
      for (let text = 0; text < textIndex.length; text += 1) {
        if (this.indexes[textIndex[text]] === undefined) {
          this.indexes[textIndex[text]] = {};
          this.indexes[textIndex[text]][i] = true;
        } else {
          this.indexes[textIndex[text]][i] = true;
        }
      }
    }
    return this.indexes;
  }

  /**
  * A method to Get Index of Created Index.
  * @return {Object} Returns an Object containing the Created Index.
  */
  getIndex() {
    return this.indexes;
  }

  /**
  * A method to Search Given String in Created Index.
  * @param {String} terms
  * @return {Object} An Object Containing the Various words and their Locations.
  */
  searchIndex(terms) {
    if (typeof terms === typeof []) {
      terms = terms.join();
    }
    const result = {};
    terms = terms.toLowerCase();
    terms = terms.match(/\w+/g);
    terms.forEach((sItem) => {
      if (this.indexes[sItem] !== undefined) {
        result[sItem] = this.indexes[sItem];
      } else {
        result[sItem] = { 0: false };
      }
    });
    return result;
  }
  /**
  * A method to Validate Uploaded File.
  * @param {String} file
  * @return {Array} Array Containing Boolean and message sent to Controller
  */
  validateFile(file) {
    try {
      if (file === '""' || file === '') {
        return [false, 'Empty File Please Upload a Valid Json File'];
      }
      this.vbook = JSON.parse(file);
      let check = false;
      this.vbook.forEach((item) => {
        if (item.text === undefined || item.title === undefined) {
          check = true;
        }
      });
      if (check) {
        const error = new Error('Invalid Content');
        throw error;
      }
      return [true, 'success'];
    } catch (err) {
      if (err.name === 'SyntaxError') {
        return [false, 'Invalid JSON file'];
      } else if (err.message === 'Invalid Content') {
        return [false, err.message];
      }
      return [false, 'Invalid Content'];
    }
  }
}
