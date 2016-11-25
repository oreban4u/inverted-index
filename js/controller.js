app.controller("testangular", function ($scope){
	
	$scope.showIndex = false;	
	
	$scope.getter = function() {
		$scope.array = $scope.index.createIndex($scope.book);
		$scope.showIndex = true; 
		console.log($scope.array);
		//alert('helloo');
	};

	function numToArray(n) {
		var arr = [];
		for (var i = 0; i < n; i++) {
			arr.push(i);
		}
		return arr;
	}
	function titlesList(n) {
		let arr = []
		for (let i = 0; i < n; i++) {
			arr.push('Book '+ i);
			// console.log (arr);

		}
		return arr;
	};

	$scope.uploader = () => {	
		$scope.index = new Index();
		file = document.getElementById('upload').files[0]
		console.log(file);
	  let reader = new FileReader();
		// var file = result.target.files[0];
		reader.readAsText(file);

		reader.onload = function(event) { 
		  console.log(event.target.result);
		  $scope.book = JSON.parse(event.target.result);
		  $scope.titles = titlesList($scope.book.length);
		  $scope.length = numToArray($scope.book.length);
		  console.log($scope.length);
		}
	};

	$scope.searchy = () => {
		qstring = $scope.sString;
		console.log(qstring);
	}

});
