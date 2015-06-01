var app = angular.module('friendsList');

app.controller('mainCntrl', function($scope){

$scope.friends = ['alex', 'anna'];

$scope.addFriend = function(){
	$scope.friends.push($scope.newFriend);
	$scope.newFriend = '';
};

});