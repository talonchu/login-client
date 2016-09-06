angular.module('ng-bolierplate.postLogin.allAccess')
.controller('Index.IndexCtrl',function indexCtrl($scope){
	var user = angular.fromJson(localStorage.getItem('user'));
	console.log(user);
	$scope.userName = user.userName;
	$scope.roleDto = user.roleDto;
});