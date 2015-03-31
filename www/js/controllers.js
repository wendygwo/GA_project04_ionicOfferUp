angular.module('starter.controllers', [])

//Dash = goods tab
//Chats = search tab
//Account = friends tab

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
				   	// console.log($scope.goods);
				   	// console.log($scope.goods.length);
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

// .controller('ChatsCtrl', function($scope, Chats, $http) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
//   	$http
// 				.get('http://anteater.offerup.c66.me/goods.json', {cache:true})
// 				   .then(function(response){
// 				   	$scope.goods = response.data; 
// 				   	console.log($scope.goods);
// 				   });
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

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
;
