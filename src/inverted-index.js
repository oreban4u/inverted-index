class Index {
	
	constructor(){
		
		this.indexes = {};
		this.book = [];
					  
	}
	createIndex(book){
		this.book = book;
		for (let i=0; i< this.book.length; i++){
			//let text = /\S+\s\S+/[Symbol.match](this.book[i].text);
			
			//let index = [];
			//console.log(text)
			let titleIndex = this.book[i].title.split(' ');
			let textIndex = this.book[i].text.split(' ');
			
			for (let item in titleIndex){
				titleIndex[item] = /[A-Za-z0-9]+/[Symbol.match](titleIndex[item])[0];
				titleIndex[item] = titleIndex[item].toLowerCase();
				//if (index.indexOf(titleIndex[item]) === -1){
				if (this.indexes[titleIndex[item]] === undefined){
					//index.push(titleIndex[item]);
					this.indexes[titleIndex[item]] = {}
					this.indexes[titleIndex[item]][i] = true;
				//console.log(titleIndex[item]);
				}
				else{
					this.indexes[titleIndex[item]][i] = true;
				}
			}
			for (let item in textIndex){
				textIndex[item] = /[A-Za-z0-9]+/[Symbol.match](textIndex[item])[0];
				textIndex[item] = textIndex[item].toLowerCase();
				//if (index.indexOf(textIndex[item]) === -1){
				if (this.indexes[textIndex[item]] === undefined){
					//index.push(textIndex[item]);
					this.indexes[textIndex[item]] = {};
					this.indexes[textIndex[item]][i] = true;
				//console.log(titleIndex[item]);
				}
				else{
					this.indexes[textIndex[item]][i] = true;
				}
			}
			//console.log(index);
			//this.indexes[this.bookNo+'Obj'+i]= index;
		}
		return this.indexes;
		
	}
	
	
	getIndex(){
		let indexlist = [];
		for (let item in this.indexes){
			indexlist.push([item, this.indexes[item]]);
			
		}
		this.indexlist = indexlist.sort();
		return this.indexlist;
	}
	
	searchIndex(terms){
		let result = []
		terms = terms.toLowerCase();
		terms = terms.split(' ');
		console.log(terms);
		for (let sItem in terms){
			if (this.indexes[terms[sItem]] !== undefined){
				result.push([sItem, this.indexes[terms[sItem]]])
			}
		}
	}
	
}

// var no1 = new Index('upload1');

//console.log(no1.testFunction());
// console.log(no1.createIndex());
// console.log(no1.getIndex());
// no1.searchIndex('alice fellowship and');