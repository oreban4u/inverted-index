class Index {
	
	constructor(){
		
		this.indexes = {};
		this.book = [];
					  
	}
	createIndex(book){
		this.book = book;
		for (let i=0; i< this.book.length; i++){
			let titleIndex = this.book[i].title.match(/\w+/g);
			let textIndex = this.book[i].text.match(/\w+/g);
			
			for (let item in titleIndex){
				titleIndex[item] = /[A-Za-z]+/[Symbol.match](titleIndex[item])[0];
				titleIndex[item] = titleIndex[item].toLowerCase();
				if (this.indexes[titleIndex[item]] === undefined){
					this.indexes[titleIndex[item]] = {}
					this.indexes[titleIndex[item]][i] = true;
				}
				else{
					this.indexes[titleIndex[item]][i] = true;
				}
			}
			for (let item in textIndex){
				textIndex[item] = /[A-Za-z]+/[Symbol.match](textIndex[item])[0];
				textIndex[item] = textIndex[item].toLowerCase();
				if (this.indexes[textIndex[item]] === undefined){
					this.indexes[textIndex[item]] = {};
					this.indexes[textIndex[item]][i] = true;
				}
				else{
					this.indexes[textIndex[item]][i] = true;
				}
			}
		}
		return this.indexes;
		
	}
	
	getIndex(){
		return this.indexes;
	}
	
	searchIndex(terms){
		let result = {}
		terms = terms.toLowerCase();
		// terms = terms.split(',');
		// terms = terms
		terms = terms.match(/\w+/g);
		console.log(terms);
		for (let sItem in terms){
			// terms[sItem] = /[A-Za-z]+/[Symbol.match](terms[sItem])[0]
			if (this.indexes[terms[sItem]] !== undefined){
				result[terms[sItem]] = this.indexes[terms[sItem]]
			}
			else {
				result[terms[sItem]] = {0:false}
			}
		}
		return result;
	}
	
}

// var no1 = new Index('upload1');

//console.log(no1.testFunction());
// console.log(no1.createIndex());
// console.log(no1.getIndex());
// no1.searchIndex('alice fellowship and');