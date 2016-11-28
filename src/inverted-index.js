class Index {
	
	constructor(){
		this.indexes = {};
		this.book = [];
		this.vbook = []		  
	}
	createIndex(book){
		this.book = book;
		// if(this.book === ''){
			// alert('Invalid file') 
			// return "Empty File"
		// }
	
		
		for (let i=0; i < this.book.length; i++) {
			let titleIndex = this.book[i].title.toLowerCase().match(/\w+/g);
			let textIndex = this.book[i].text.toLowerCase().match(/\w+/g);
			
					for (let title = 0; title < titleIndex.length; title++){
			  if (this.indexes[titleIndex[title]] === undefined) {
					this.indexes[titleIndex[title]] = {};
					this.indexes[titleIndex[title]][i] = true;
				}
			
				else {
					this.indexes[titleIndex[title]][i] = true;
				}
			}

		
		for (let text = 0; text < textIndex.length; text++){
			  if (this.indexes[textIndex[text]] === undefined) {
					this.indexes[textIndex[text]] = {};
					this.indexes[textIndex[text]][i] = true;
				}
			
				else {
					this.indexes[textIndex[text]][i] = true;
				}
			}

		}
		console.log(this.indexes)
		return this.indexes;
	}
		
	
	getIndex(){
		return this.indexes;
	}
	
	searchIndex(terms){
		if (typeof terms === 'array'){
			terms = terms.join()
		}

		let result = {}
		terms = terms.toLowerCase();
		terms = terms.match(/\w+/g);
		console.log(terms);
		terms.forEach((sItem) => {
			if (this.indexes[sItem] !== undefined){
			result[sItem] = this.indexes[sItem]
			}
			else {
				result[sItem] = {0:false}
			}
		})
		return result;
	}

	validateFile(file){
		console.log(file)
		try{
			if (file === "") throw "Empty File"
			this.vbook = JSON.parse(file);
			// console.log(`second attempt ${book[0]}`)

			let check
			this.vbook.forEach((item) => {
				console.log(item.text);
				if (item.text === undefined || item.title === undefined){
					check = true;
				}
			})

			if (check) throw "Invalid Content";
			
			return [true, "success"];
		}

		catch(err){
			if (err === 'Empty File'){
				return [false, "Empty File Please Upload a Valid Json File"];
			}
			else if (err.name === 'SyntaxError'){
				return [false, "Invalid JSON file"];
			}
			else if (err === 'Invalid Content'){
				return [false, err];
			}
		}
	}
	
}

// var no1 = new Index('upload1');

//console.log(no1.testFunction());
// console.log(no1.createIndex());
// console.log(no1.getIndex());
// no1.searchIndex('alice fellowship and');