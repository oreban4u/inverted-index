app.controller('testangular', ($scope) => {
  $scope.showIndex = false;
  let validFile = false;

  $scope.getter = () => {
    if (validFile) {
      $scope.array = $scope.index.createIndex($scope.index.vbook);
      $scope.showIndex = true;
      $scope.showSearch = false;
    } else {
      $scope.showIndex = false;
      $scope.showSearch = false;
      alert('No file / Invalid file uploaded')
    }
  };

  const numToArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      arr.push(i);
    }
    return arr;
  };
  const titlesList = (n) => {
    const arr = [];
    const book = $scope.index.vbook;
    book.forEach ((bookTitle) => {
      arr.push(bookTitle.title);
    });
    console.log(arr);
    return arr;

  };

  $scope.uploader = () => {
    $scope.isUploaded = false;
    $scope.index = new Index();
    const file = document.getElementById('upload').files[0];
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = (event) => {
      $scope.book = (event.target.result);
      const fileValidation = $scope.index.validateFile($scope.book);
      validFile = fileValidation[0];
      if (validFile) {
        $scope.titles = titlesList($scope.index.vbook.length);
        $scope.length = numToArray($scope.index.vbook.length);
      } else {
        alert(fileValidation[1]);
      }
    };
    $scope.isUploaded = true;
  };

  $scope.searchy = () => {
    const qstring = $scope.sString;
    if (qstring !== undefined) {
      console.log($scope.array)
      if ($scope.array !== undefined){
        $scope.searchString = $scope.index.searchIndex(qstring);
        $scope.showIndex = false;
        $scope.showSearch = true;
      } else {
        alert('Index not Created')
      }
    } else {
      alert('No Text Entered');
    }
  };

  $scope.clearSearch = () => {
    $scope.sString = ''
    $scope.showIndex = true;
    $scope.showSearch = false;
  };
});
