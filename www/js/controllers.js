angular.module('starter.controllers', [])

//Dash = goods tab
//Chats = search tab
//Account = friends tab

.controller('DashCtrl', function($scope, $http) {
	$http
				.get('http://anteater.offerup.c66.me/users/1.json', {cache:true})
				   .then(function(response){
				   	$scope.goods = response.data.goods; 
				   	// console.log($scope.goods);
				   });
})
.controller('DashDetailCtrl', function($scope, $http, $stateParams) {
	$http
				.get('http://anteater.offerup.c66.me/goods/' + $stateParams.goodId +'.json', {cache:true})
				   .then(function(response){
				   	// $scope.good = response.data; 
				   	 
				   });
})

.controller('ChatsCtrl', function($scope, Chats, $http) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  	$http
				.get('http://anteater.offerup.c66.me/goods.json', {cache:true})
				   .then(function(response){
				   	$scope.goods = response.data; 
				   	console.log($scope.goods);
				   });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountDetailCtrl', function($scope, $http, $stateParams) {
	$http
				.get('http://anteater.offerup.c66.me/users/' + $stateParams.friendId +'.json', {cache:true})
				   .then(function(response){
				   	$scope.goods = response.data.goods; 
				   });

		// $scope.message = 'hello';
		// console.log('Went into dash dash dash controller');
})
.controller('AccountCtrl', function($scope, $http) {
	$http
				.get('http://anteater.offerup.c66.me/users/1.json', {cache:true})
				   .then(function(response){
				   	$scope.friends = response.data.friends; 
				   	// console.log($scope.friends);
				   });
});
