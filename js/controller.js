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
    for (let i = 0; i < n; i += 1) {
      arr.push(`Book ${i}`);
    }
    return arr;
  };

  $scope.uploader = () => {
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
  };

  $scope.searchy = () => {
    const qstring = $scope.sString;
    if (qstring !== undefined) {
      $scope.searchString = $scope.index.searchIndex(qstring);
      $scope.showIndex = false;
      $scope.showSearch = true;
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
