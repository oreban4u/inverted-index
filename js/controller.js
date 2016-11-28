app.controller("testangular", function ($scope){
	
	$scope.showIndex = false;	
	let validFile = false;
	
	$scope.getter = () => {
		if (validFile) {
			$scope.array = $scope.index.createIndex($scope.index.vbook);
			$scope.showIndex = true;
			$scope.showSearch = false;
			console.log($scope.array);
			//alert('helloo');
		}
		else{
			$scope.showIndex = false;
			$scope.showSearch = false;
			console.log($scope.array);
		}
	};

	numToArray = (n) => {
		var arr = [];
		for (var i = 0; i < n; i++) {
			arr.push(i);
		}
		return arr;
	}
	titlesList = (n) => {
		let arr = []
		for (let i = 0; i < n; i++) {
			arr.push('Book '+ i);
			// console.log (arr);

		}
		return arr;
	};

	$scope.uploader = () => {	
		$scope.index = new Index();
		let file = document.getElementById('upload').files[0]
		console.log(file);
	  let reader = new FileReader();
		// var file = result.target.files[0];
		reader.readAsText(file);

		reader.onload = (event) => { 
		  console.log(event.target.result);
		  $scope.book = (event.target.result)

		  let fileValidation = $scope.index.validateFile($scope.book)
		  validFile = fileValidation[0];
		  console.log(`valid file logging ${validFile}`)
		  if (validFile) {
		  	$scope.titles = titlesList($scope.index.vbook.length);
			  $scope.length = numToArray($scope.index.vbook.length);
			  console.log($scope.length);
		  }
		  else{
		  	alert(fileValidation[1])
		  }


		 //  try{
			//   $scope.book = JSON.parse(event.target.result);
			//   validFile = true;
			  
			// }
			// catch(err){
			// 	// $scope.book = '';
			// 	console.log(`book is ${$scope.book}full`);
			// 	validFile = false;
			// 	alert("Invalid File Please Upload a JSON file");
			// }

	 	}
	};

	$scope.searchy = () => {
		qstring = $scope.sString;
		console.log(qstring);
		$scope.searchString = $scope.index.searchIndex(qstring);
		console.log($scope.searchString)
		$scope.showIndex = false;
		$scope.showSearch = true;
	}

});
