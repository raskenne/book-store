'use strict';

var bookStoreControlers = angular.module('bookStoreControlers', []);

bookStoreControlers.controller('BookListCtrl' , ['$scope' , '$http' , function($scope, $http) {
	$http.get('books/books.json').success(function(data){
		$scope.books = data;
		console.log(data[1]);
	});	
}]);


bookStoreControlers.controller('BookDetailCtrl', ['$scope', '$routeParams', '$http', 
		function($scope, $routeParams, $http){
			$http.get('books/' + $routeParams.bookId + '.json').success(function(data) {
				$scope.book = data;				
				console.log($scope.books);
			});
}]);