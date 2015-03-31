angular.module('starter.controllers', [])

.controller('GoodsCtrl', function($scope, $http) {
	$http
				.get('http://anteater.offerup.c66.me/users/1.json', {cache:true})
				   .then(function(response){
				   	$scope.goods = response.data.goods; 
				   	for (var i=0; i<$scope.goods.length; i++){
				   		if ($scope.goods[i].photo=='/photos/original/missing.png'){
				   			$scope.goods[i].photo='img/black-drill-sihouette.png';
				   		}
				   	}
				   });
})
.controller('GoodDetailCtrl', function($scope, $http, $stateParams) {
	$http
				.get('http://anteater.offerup.c66.me/goods/' + $stateParams.goodId +'.json', {cache:true})
				   .then(function(response){
				   	$scope.good = response.data; 
				   	if ($scope.good.photo =='/photos/original/missing.png'){
				   		$scope.good.photo = 'img/black-drill-sihouette.png';
				   	}
				   });
})

.controller('SearchCtrl', function($scope, Chats, $http) {
})

.controller('FriendsCtrl', function($scope, $http) {
	$http
				.get('http://anteater.offerup.c66.me/users/1.json', {cache:true})
				   .then(function(response){
				   	$scope.friends = response.data.friends; 
				   	for (var i=0; i<$scope.friends.length; i++){
				   		if ($scope.friends[i].photo=='/photos/original/missing.png'){
				   			$scope.friends[i].photo='img/mysteryperson.jpg';
				   		}
				   	}
				   	// console.log($scope.friends);
				   });
})

.controller('FriendDetailCtrl', function($scope, $http, $stateParams) {
	$http
				.get('http://anteater.offerup.c66.me/users/' + $stateParams.friendId +'.json', {cache:true})
				   .then(function(response){
				   	$scope.goods = response.data.goods; 
				   	for (var i=0; i<$scope.goods.length; i++){
				   		if ($scope.goods[i].photo=='/photos/original/missing.png'){
				   			$scope.goods[i].photo='img/black-drill-sihouette.png';
				   		}
				   	}
				   });
})
.controller('FriendDetailGoodCtrl', function($scope, $http, $stateParams) {
	$http
				.get('http://anteater.offerup.c66.me/goods/' + $stateParams.goodId +'.json', {cache:true})
				   .then(function(response){
				   	$scope.good = response.data; 
				   	if ($scope.good.photo =='/photos/original/missing.png'){
				   		$scope.good.photo = 'img/black-drill-sihouette.png';
				   	}
				   });
})
;
